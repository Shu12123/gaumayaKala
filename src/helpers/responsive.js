import { useEffect, useState } from 'react'

export default function Main() {
  const mediaQuery = '(max-width: 1279px)'
  const mediaMatch = typeof window !== 'undefined' && window.matchMedia(mediaQuery)
  const [isMobile, setIsMobile] = useState(mediaMatch ? mediaMatch.matches : false)

  useEffect(() => {
    if (!mediaMatch) return

    const handler = e => setIsMobile(e.matches)
    mediaMatch.addEventListener('change', handler)
    return () => mediaMatch.removeEventListener('change', handler)
  }, [mediaMatch])

  return isMobile
}
