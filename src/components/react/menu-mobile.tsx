import { useState } from 'react'
import { X, Menu } from 'lucide-react'
import NavLink from './NavLink'

export default function MenuMobile() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  return (
    <div className="z-0 md:hidden ">
      {/* Mobile Menu Button */}
      <button
        className=" p-2 rounded-lg hover:bg-gray-100"
        onClick={toggleMenu}
        aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
        aria-expanded={isMenuOpen}
      >
        {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>
      {/* Mobile Menu */}
      <div
        className={`
      fixed top-20 -z-20 inset-x-0 px-4 py-8 bg-neutral-100 md:hidden border-y border-y-gray-400/60
      transition-transform duration-300 ease-in-out
      ${isMenuOpen ? 'translate-y-0' : '-translate-y-[200%]'}
    `}
      >
        <div className="flex flex-col space-y-8">
          <NavLink href="#home" onClick={() => setIsMenuOpen(false)}>
            Inicio
          </NavLink>
          <NavLink href="#services" onClick={() => setIsMenuOpen(false)}>
            Servicios
          </NavLink>
          <NavLink href="#testimonials" onClick={() => setIsMenuOpen(false)}>
            Casos de Éxito
          </NavLink>
          <NavLink href="#about" onClick={() => setIsMenuOpen(false)}>
            Sobre Nosotros
          </NavLink>
          <NavLink href="#contact" onClick={() => setIsMenuOpen(false)}>
            Contacto
          </NavLink>
        </div>
      </div>
    </div>
  )
}
