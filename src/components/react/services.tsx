export default function Services() {
  const services = [
    {
      title: 'Optimización de Procesos',
      description:
        'Rediseñamos y simplificamos tus flujos de trabajo para que tu negocio funcione con claridad y eficiencia.',
      image: '/placeholder.svg?height=300&width=400',
    },
    {
      title: 'Implementación de Tecnologías',
      description:
        'Adoptamos herramientas como ERP, WMS y plataformas de IA para digitalizar y automatizar las operaciones clave de tu negocio.',
      image: '/placeholder.svg?height=300&width=400',
    },
    {
      title: 'Consultoría Estratégica',
      description:
        'Diseñamos la misión, visión y planificación estratégica de tu negocio, alineando cada proceso con tus metas a largo plazo.',
      image: '/placeholder.svg?height=300&width=400',
    },
  ]

  return (
    <section className="py-20 bg-white" id="services">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-900">
          Nuestras soluciones, diseñadas para transformar tu negocio
        </h2>
        <div className="space-y-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center gap-8"
            >
              <div
                className={`w-full md:w-1/2 ${
                  index % 2 === 1 ? 'md:order-2' : ''
                }`}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  width={400}
                  height={300}
                  className="rounded-lg"
                />
              </div>
              <div className="w-full md:w-1/2">
                <h3 className="text-2xl font-bold mb-4 text-blue-900">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <button className="bg-lime-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-lime-600 transition duration-300">
                  Conoce más
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
