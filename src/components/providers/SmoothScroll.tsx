"use client"
import { ReactLenis } from "lenis/react"
import React, { useEffect, useState } from "react"

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    const checkIsDesktop = () => {
      // Lenis is most impactful on desktop, disable on touch devices
      const finePointer = window.matchMedia("(pointer: fine)").matches
      setIsDesktop(finePointer)
    }

    checkIsDesktop()
    window.addEventListener('resize', checkIsDesktop)
    return () => window.removeEventListener('resize', checkIsDesktop)
  }, [])

  if (!isDesktop) {
    return <>{children}</>
  }

  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
      {children}
    </ReactLenis>
  )
}