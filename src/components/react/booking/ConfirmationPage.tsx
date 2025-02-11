import { CheckCircle } from 'lucide-react'

export default function ConfirmationPage() {
  return (
    <div className="min-h-screen w-full flex justify-center items-start bg-primary py-12 md:py-24 lg:py-32">
      <div className="container flex flex-col items-center justify-center gap-8 px-4 text-center md:px-6">
        <div className="space-y-4">
          <div className="flex justify-center">
            <CheckCircle className="h-24 w-24 text-emerald-400" />
          </div>
          <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">
            ¡Cita Agendada con Éxito!
          </h1>
          <p className="mx-auto max-w-[700px] text-lg text-gray-200 md:text-xl">
            Gracias por confiar en TechFlow. Pronto recibirás un correo
            electrónico con los detalles de tu reunión para el diagnóstico
            gratuito.
          </p>
        </div>
        <div className="space-y-4">
          <p className="text-sm text-gray-200">
            Mientras tanto, te invitamos a seguir explorando cómo podemos
            ayudarte a transformar tu inmobiliaria
          </p>
          <a
            href="/"
            className="inline-flex h-10 items-center justify-center rounded-md bg-emerald-500 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-emerald-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
          >
            Seguir Conociendo TechFlow
          </a>
        </div>
      </div>
    </div>
  )
}
