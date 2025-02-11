import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'

/* ACTUAL DISEÑO */
export default function WorkingProgress() {
  const handleRedirect = (href: string) => {
    window.location.href = href
  }
  return (
    <section className="relative min-h-[600px] w-full bg-white px-4 py-12 md:px-6">
      <div className="mx-auto max-w-4xl flex flex-col items-center ">
        <h2 className="text-4xl font-bold text-center lg:text-left text-primary">
          Estamos trabajando
        </h2>
        <img
          src="/work-progress-woman-working.webp"
          alt="Working Progress Woman Illustration "
        />

        <p className=" mt-6 text-center text-xl">
          Pronto estaremos listos para agendarte
        </p>
      </div>
      <div className=" mx-auto mt-12 flex justify-center">
        <Button
          size="lg"
          className="bg-primary hover:bg-primary/80"
          onClick={() => handleRedirect('/#home')}
        >
          Volver al inicio
          <ArrowLeft className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </section>
  )
}
