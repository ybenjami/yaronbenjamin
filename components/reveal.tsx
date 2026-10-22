'use client'

import { useEffect, useRef, useState } from 'react'

// Fades and lifts its children into place the first time they scroll into view.
// Content is visible by default: it is only hidden once this component has
// hydrated and found itself below the fold. If JavaScript never runs (blocked
// chunks, slow network, no JS), everything simply stays visible.
// Motion is skipped for people who prefer reduced motion (see global.css).
export function Reveal({
  children,
  delay = 0,
  className = '',
}: {
  children: React.ReactNode
  delay?: number
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [armed, setArmed] = useState(false)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    // Already on screen at load: leave it alone rather than hiding and re-showing it.
    if (el.getBoundingClientRect().top < window.innerHeight * 0.92) return
    setArmed(true)
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true)
          io.disconnect()
        }
      },
      { rootMargin: '0px 0px -8% 0px' }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      data-armed={armed || undefined}
      data-shown={shown || undefined}
      style={{ transitionDelay: `${delay}ms` }}
      className={`reveal ${className}`}
    >
      {children}
    </div>
  )
}
