import NavLink from './NavLink'

export default function Navbar() {
  return (
    <nav className="hidden md:flex space-x-8 relative z-50">
      <NavLink href="#home">Inicio</NavLink>
      <NavLink href="#services">Servicios</NavLink>
      <NavLink href="#testimonials">Casos de Éxito</NavLink>
      <NavLink href="#about">Sobre Nosotros</NavLink>
      <NavLink href="#contact">Contacto</NavLink>
    </nav>
  )
}
