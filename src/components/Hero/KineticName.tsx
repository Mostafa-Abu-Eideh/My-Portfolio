import type { Ref } from 'react'
import { profile } from '../../content/profile'

interface KineticNameProps {
  ref: Ref<HTMLDivElement>
}

/**
 * The name in both scripts, stacked in the same space.
 * A seam (driven by `useSeam` through the --x variable) shows English on its left and Arabic on its right.
 * Decorative only: the real heading is the visually hidden <h1> in <Hero>.
 */
export function KineticName({ ref }: KineticNameProps) {
  return (
    <div className="kinetic-name ltr-fixed" ref={ref} aria-hidden="true">
      <div className="kinetic-name__layer kinetic-name__layer--en" lang="en">
        {profile.firstName.en}
      </div>
      <div className="kinetic-name__layer kinetic-name__layer--ar" lang="ar" dir="rtl">
        {profile.firstName.ar}
      </div>
      <div className="kinetic-name__seam" />
    </div>
  )
}
