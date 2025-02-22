import { useState, useEffect } from 'react'
import Navbar from './Navbar'
import { log } from 'node_modules/astro/dist/core/logger/core'
import { Mountain } from 'lucide-react'
import MenuMobile from './menu-mobile'

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
      className={`fixed top-0 z-50 w-full py-4 px-8 transition-all duration-300 ease-in-out  ${
        lastScrollY > 50
          ? ' backdrop-blur-md bg-white/70 shadow-sm shadow-black/50 '
          : ' bg-white'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="flex items-center gap-2">
          <Mountain className="h-6 w-6" />
          <span className="text-2xl font-bold text-gray-800">TechFlow</span>
        </a>
        <Navbar />
        <MenuMobile />
      </div>
    </header>
  )
}
