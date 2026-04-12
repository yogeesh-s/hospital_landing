"use client"

import { useEffect } from "react"

export default function RootPage() {
  useEffect(() => {
    // Robust redirect for GitHub Pages static export
    window.location.replace("/hospital_landing/en/")
  }, [])

  return null
}
