import Header from './Header'
import Hero from './hero'
import Benefits from './benefits'
import Problems from './problems'
import Services from './services'
import Testimonials from './testimonials'
import Contact from './contact'
import Footer from './footer'

export default function Component() {
  return (
    <div className="relative flex flex-col h-screen ">
      <Header />

      <main id="home">
        <Hero />
        <Benefits />
        <Problems />
        <Services />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      {/* <div className=" w-full h-full px-4 absolute flex items-center justify-center bg-black/50 backdrop-blur">
        <h1 className=" font-semibold text-5xl lg:text-6xl text-white">
          NOS ESTAMOS RENOVANDO
        </h1>
      </div> */}
    </div>
  )
}
