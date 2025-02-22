import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function Testimonials() {
  const TESTIMONIALS = [
    {
      title: 'Muebles Web (eCommerce)',
      problem: 'El dueño estaba saturado, tomando todas las decisiones.',
      solution: 'Implementación de ERP y WMS; redefinición de roles.',
      result: 'Reducción del 30% en errores operativos.',
    },
    {
      title: 'Laring (Fabricación de productos químicos)',
      problem: 'Procesos manuales que aumentaban los tiempos de operación.',
      solution: 'Automatización de procesos clave y mejoras en el ERP.',
      result: 'Aumento del 20% en la productividad del equipo.',
    },
    {
      title: 'TechSolutions (Servicios IT)',
      problem: 'Falta de visibilidad en el rendimiento de proyectos.',
      solution: 'Implementación de software de gestión de proyectos y KPIs.',
      result: 'Mejora del 40% en la entrega puntual de proyectos.',
    },
  ]

  const [currentCase, setCurrentCase] = useState(0)

  const nextCase = () =>
    setCurrentCase((prev) => (prev + 1) % TESTIMONIALS.length)
  const prevCase = () =>
    setCurrentCase(
      (prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length
    )

  return (
    <section className="py-20 bg-gray-50" id="testimonials">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-900">
          Ellos confiaron en nosotros y transformaron su forma de trabajar
        </h2>
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-blue-900 mb-2">
              {TESTIMONIALS[currentCase].title}
            </h3>
            <p className="text-gray-600 italic mb-4">
              Problema: {TESTIMONIALS[currentCase].problem}
            </p>
            <p className="text-gray-700 mb-4">
              Solución: {TESTIMONIALS[currentCase].solution}
            </p>
            <p className="text-lime-600 font-bold">
              Resultado: {TESTIMONIALS[currentCase].result}
            </p>
          </div>
          <div className="flex justify-between items-center">
            <button
              onClick={prevCase}
              className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition duration-300"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <span className="text-gray-500">
              {currentCase + 1} / {TESTIMONIALS.length}
            </span>
            <button
              onClick={nextCase}
              className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition duration-300"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
