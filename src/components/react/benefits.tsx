import { Clock, TrendingUp, Lightbulb, Target } from 'lucide-react'

export default function Benefits() {
  const benefits = [
    {
      icon: <Clock className="w-12 h-12 text-lime-500" />,
      title: 'Más tiempo para lo importante',
      description:
        'Delegar tareas y automatizar procesos te dará el tiempo que necesitas para tomar decisiones estratégicas.',
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-lime-500" />,
      title: 'Mayor rentabilidad',
      description:
        'Optimizamos tus procesos para reducir costos y aumentar la eficiencia de tu negocio.',
    },
    {
      icon: <Lightbulb className="w-12 h-12 text-lime-500" />,
      title: 'Claridad en tus operaciones',
      description:
        'Implementamos sistemas que te dan visibilidad total sobre el funcionamiento de tu empresa.',
    },
    {
      icon: <Target className="w-12 h-12 text-lime-500" />,
      title: 'Crecimiento sostenible',
      description:
        'Creamos una base sólida para que tu negocio pueda escalar de manera controlada y efectiva.',
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-900">
          Lo que obtendrás al trabajar con nosotros
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg text-center"
            >
              <div className="inline-block mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-blue-900">
                {benefit.title}
              </h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
