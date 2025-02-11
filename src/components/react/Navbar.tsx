import { Mountain } from 'lucide-react'

export default function Navbar() {
  return (
    <nav className="bg-white py-4 px-6 fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="flex items-center gap-2">
          <Mountain className="h-6 w-6" />
          <span className="text-2xl font-bold text-gray-800">TechFlow</span>
        </a>
        {/* <div className="hidden md:flex space-x-8">
          <a href="/" className="text-gray-600 hover:text-gray-900">
            Inicio
          </a>
          <a href="/services" className="text-gray-600 hover:text-gray-900">
            Servicios
          </a>
          <a href="/cases" className="text-gray-600 hover:text-gray-900">
            Casos de Éxito
          </a>
          <a href="/about" className="text-gray-600 hover:text-gray-900">
            Sobre Nosotros
          </a>
          <a href="/contact" className="text-gray-600 hover:text-gray-900">
            Contacto
          </a>
        </div> */}
      </div>
    </nav>
  )
}
