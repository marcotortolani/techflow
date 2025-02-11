export default function Hero() {
  return (
    <section className=" relative min-h-screen flex items-center">
      <img
        src="/placeholder.svg?height=1080&width=1920"
        alt="Modern office background"
        // layout="fill"
        // objectFit="cover"
        className="filter brightness-50 object-fill "
      />
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 font-montserrat">
            Haz que tu negocio funcione contigo, no que dependa de ti.
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 font-poppins">
            Transformamos procesos complejos en soluciones claras, para que
            tengas más tiempo, tranquilidad y un negocio preparado para crecer.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-lime-500 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-lime-600 transition duration-300">
              Agenda una consulta gratuita
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-white/10 transition duration-300">
              Descubre cómo transformamos negocios
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
