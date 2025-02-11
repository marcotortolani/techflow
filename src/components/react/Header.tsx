import { useState, useEffect } from 'react'
import Navbar from "./Navbar"

export default function Header() {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // Oculta el header al hacer scroll hacia abajo
        setIsVisible(false)
      } else {
        // Muestra el header al hacer scroll hacia arriba
        setIsVisible(true)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [lastScrollY])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ease-in-out ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      } ${
        lastScrollY > 50
          ? ' backdrop-blur-md bg-white/70 shadow-sm shadow-black/50 '
          : ' bg-primary'
      }`}
    >
      <Navbar />
    </header>
  )
}
