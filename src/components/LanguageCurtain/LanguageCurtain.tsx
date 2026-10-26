import { useLayoutEffect, useRef } from 'react'
import { profile } from '../../content/profile'
import { useLanguage } from '../../i18n/useLanguage'
import './LanguageCurtain.css'

const EASE = 'cubic-bezier(.75, 0, .25, 1)'

/**
 * Full-screen panel that sweeps across when the language changes.
 * It travels in the new reading direction: right-to-left into Arabic, left-to-right into English.
 * The language is swapped while the screen is covered, so the visitor never sees the layout flip.
 */
export function LanguageCurtain() {
  const { incoming, applyIncoming, endTransition } = useLanguage()
  const ref = useRef<HTMLDivElement>(null)

  // useLayoutEffect starts the animation before the browser paints, so the panel never flashes at rest.
  useLayoutEffect(() => {
    const curtain = ref.current
    if (!incoming || !curtain) return

    const from = incoming === 'ar' ? 1 : -1
    let cancelled = false
    let leave: Animation | undefined

    const enter = curtain.animate(
      [{ transform: `translateX(${from * 100}%)` }, { transform: 'translateX(0)' }],
      { duration: 440, easing: EASE, fill: 'forwards' },
    )

    enter.finished
      .then(() => {
        if (cancelled) return
        applyIncoming()
        leave = curtain.animate(
          [{ transform: 'translateX(0)' }, { transform: `translateX(${-from * 100}%)` }],
          { duration: 520, delay: 90, easing: EASE, fill: 'forwards' },
        )
        return leave.finished
      })
      .then(() => {
        if (!cancelled) endTransition()
      })
      .catch(() => {
        // A cancelled animation rejects its promise; nothing to do.
      })

    return () => {
      cancelled = true
      enter.cancel()
      leave?.cancel()
    }
  }, [incoming, applyIncoming, endTransition])

  const className = incoming ? `curtain curtain--active curtain--to-${incoming}` : 'curtain'

  return (
    <div className={className} ref={ref} aria-hidden="true">
      {incoming && <b lang={incoming}>{profile.firstName[incoming]}</b>}
    </div>
  )
}
