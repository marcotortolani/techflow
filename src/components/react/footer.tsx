import { Mountain } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#1a2937] text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Mountain className="h-6 w-6" />
              <span className="text-2xl font-bold">TechFlow</span>
            </div>
            <p className="text-gray-400 text-sm">
              Transformamos PYMEs con tecnología y procesos inteligentes para
              impulsar su crecimiento sostenible.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Contacto</h4>
            <p className="text-gray-400 text-sm">info@techflowconsulting.com</p>
            <p className="text-gray-400 text-sm">+598 XXX XXX XXX</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Enlaces</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Casos de Éxito
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Sobre Nosotros
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Contacto
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Términos de Servicio
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Política de Privacidad
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} TechFlow Consulting. Todos los
            derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
