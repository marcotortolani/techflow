export default function Problems() {
  const problems = [
    'Sientes que todo depende de ti y no tienes tiempo para lo realmente importante.',
    'Los procesos de tu negocio son confusos y consumen más tiempo y recursos de los necesarios.',
    'No tienes visibilidad clara sobre el rendimiento de tu empresa.',
    'Te cuesta delegar porque temes perder el control de las operaciones.',
    'El crecimiento de tu negocio se ha estancado y no sabes cómo impulsarlo.',
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-900">
          ¿Esto te suena familiar?
        </h2>
        <div className="max-w-3xl mx-auto">
          <ul className="space-y-4">
            {problems.map((problem, index) => (
              <li key={index} className="flex items-start">
                <span className="text-2xl mr-4">😓</span>
                <p className="text-gray-700">{problem}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
