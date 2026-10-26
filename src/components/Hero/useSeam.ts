import { useEffect, useRef, type RefObject } from 'react'
import type { Lang } from '../../content/types'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'

const BASE_WEIGHT = 420
const MAX_WEIGHT = 700
const IDLE_BEFORE_SWEEP_MS = 2600

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value))

/** Where the seam rests when nobody is touching it: mostly showing the current language. */
const restingPosition = (lang: Lang) => (lang === 'ar' ? 0.22 : 0.78)

interface SeamState {
  x: number // seam position, 0 (left edge) to 1 (right edge)
  target: number
  weight: number // font weight of the name
  weightTarget: number
  speed: number // recent pointer speed, adds weight when moving fast
  lastPointerX: number | null
  lastPointerTime: number
  lastInteraction: number
  dragging: boolean
  hovering: boolean
}

/**
 * Drives the split-name hero.
 * - `areaRef` is the element you move across; it receives `--w` (font weight).
 * - `outputRef` receives `--x` (seam position), so siblings like the role lines can react to it too.
 *
 * Values are written straight to CSS variables inside requestAnimationFrame.
 * They change 60 times a second, which is far too often to route through React state.
 */
export function useSeam(
  areaRef: RefObject<HTMLElement | null>,
  outputRef: RefObject<HTMLElement | null>,
  lang: Lang,
) {
  const reduceMotion = usePrefersReducedMotion()
  const langRef = useRef(lang)
  const stateRef = useRef<SeamState | null>(null)

  // When the language changes, slide the seam over to reveal it (unless someone is holding it).
  useEffect(() => {
    langRef.current = lang
    const s = stateRef.current
    if (s && !s.hovering && !s.dragging) s.target = restingPosition(lang)
  }, [lang])

  useEffect(() => {
    const area = areaRef.current
    const output = outputRef.current
    if (!area || !output) return

    const touchOnly = window.matchMedia?.('(hover: none)').matches ?? false
    const home = () => restingPosition(langRef.current)

    // On load the seam starts at the far edge and sweeps in.
    const startX = langRef.current === 'ar' ? 0.98 : 0.02
    const s: SeamState = {
      x: reduceMotion ? home() : startX,
      target: home(),
      weight: BASE_WEIGHT,
      weightTarget: BASE_WEIGHT,
      speed: 0,
      lastPointerX: null,
      lastPointerTime: 0,
      lastInteraction: 0,
      dragging: false,
      hovering: false,
    }
    stateRef.current = s

    const follow = (e: PointerEvent) => {
      const rect = area.getBoundingClientRect()
      s.target = clamp((e.clientX - rect.left) / rect.width, 0, 1)
      // Higher on the name = lighter, lower = bolder.
      s.weightTarget = 200 + clamp((e.clientY - rect.top) / rect.height, 0, 1) * 420

      const now = performance.now()
      if (s.lastPointerX !== null) {
        const pxPerMs = Math.abs(e.clientX - s.lastPointerX) / (now - s.lastPointerTime + 1)
        s.speed = Math.min(1, s.speed + pxPerMs / 6)
      }
      s.lastPointerX = e.clientX
      s.lastPointerTime = now
      s.lastInteraction = now
    }

    const onEnter = (e: PointerEvent) => {
      if (e.pointerType === 'mouse') s.hovering = true
    }
    const onMove = (e: PointerEvent) => {
      if (s.hovering || s.dragging) follow(e)
    }
    const onDown = (e: PointerEvent) => {
      s.dragging = true
      area.setPointerCapture?.(e.pointerId)
      follow(e)
    }
    const onUp = () => {
      s.dragging = false
      s.lastPointerX = null
      s.lastInteraction = performance.now()
    }
    const onLeave = (e: PointerEvent) => {
      if (e.pointerType !== 'mouse') return
      s.hovering = false
      s.lastPointerX = null
      s.target = home()
      s.weightTarget = BASE_WEIGHT
    }

    area.addEventListener('pointerenter', onEnter)
    area.addEventListener('pointermove', onMove)
    area.addEventListener('pointerdown', onDown)
    area.addEventListener('pointerup', onUp)
    area.addEventListener('pointercancel', onUp)
    area.addEventListener('pointerleave', onLeave)

    let frameId = 0
    const frame = (time: number) => {
      // Touch screens have no hover, so the seam drifts on its own while nobody is dragging.
      const idle = performance.now() - s.lastInteraction > IDLE_BEFORE_SWEEP_MS
      if (touchOnly && !reduceMotion && !s.dragging && idle && s.lastInteraction) {
        s.target = 0.5 + 0.36 * Math.sin(time / 1500)
        s.weightTarget = BASE_WEIGHT + 140 * Math.sin(time / 2300)
      }

      s.speed *= 0.93
      s.x += (s.target - s.x) * (reduceMotion ? 1 : 0.1)
      const weightGoal = Math.min(MAX_WEIGHT, s.weightTarget + s.speed * 260)
      s.weight += (weightGoal - s.weight) * (reduceMotion ? 1 : 0.14)

      output.style.setProperty('--x', s.x.toFixed(4))
      area.style.setProperty('--w', String(Math.round(s.weight)))
      frameId = requestAnimationFrame(frame)
    }
    frameId = requestAnimationFrame(frame)

    // Let the intro sweep settle before the idle drift starts on touch screens.
    const sweepTimer = touchOnly ? window.setTimeout(() => (s.lastInteraction = 1), 2200) : undefined

    return () => {
      cancelAnimationFrame(frameId)
      window.clearTimeout(sweepTimer)
      area.removeEventListener('pointerenter', onEnter)
      area.removeEventListener('pointermove', onMove)
      area.removeEventListener('pointerdown', onDown)
      area.removeEventListener('pointerup', onUp)
      area.removeEventListener('pointercancel', onUp)
      area.removeEventListener('pointerleave', onLeave)
    }
  }, [areaRef, outputRef, reduceMotion])
}
