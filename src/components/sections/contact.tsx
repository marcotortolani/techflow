'use client'

import { useActionState, useEffect, useRef, useState } from 'react'
import { useFormStatus } from 'react-dom'
import { submitContactForm, FormState } from '@/app/actions'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { useToast } from '@/hooks/use-toast'
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogDescription,
//   DialogFooter,
// } from '@/components/ui/dialog'
// import { Copy } from 'lucide-react'

const initialState: FormState = {
  message: '',
  success: false,
}

function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <Button
      type="submit"
      size="lg"
      className="w-full text-base md:text-lg"
      disabled={pending}
    >
      {pending ? 'Enviando...' : 'Agenda tu sesión estratégica gratuita'}
    </Button>
  )
}

export default function Contact() {
  const [state, formAction] = useActionState(submitContactForm, initialState)
  const { toast } = useToast()
  const formRef = useRef<HTMLFormElement>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  useEffect(() => {
    if (state.message) {
      if (state.success && state.followUpMessage) {
        setIsDialogOpen(true)
      } else if (!state.success) {
        toast({
          title: 'Error en el formulario',
          description:
            state.message +
            (state.issues ? `\n- ${state.issues.join('\n- ')}` : ''),
          variant: 'destructive',
        })
      }
    }
  }, [state, toast])

  const handleCopy = () => {
    if (state.followUpMessage) {
      navigator.clipboard.writeText(state.followUpMessage)
      toast({
        title: 'Copiado',
        description: 'Mensaje de seguimiento copiado al portapapeles.',
      })
    }
  }

  const closeDialogAndReset = () => {
    setIsDialogOpen(false)
    formRef.current?.reset()
  }

  return (
    <>
      <section id="contact" className="py-20 md:py-32 bg-secondary/50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="max-w-xl">
              <h2 className="font-headline text-3xl sm:text-4xl font-bold tracking-tight text-primary md:text-5xl">
                Cada día sin optimización es dinero perdido.
              </h2>
              <p className="mt-6 text-base md:text-lg leading-relaxed md:leading-8 text-foreground/80">
                La eficiencia no es opcional en el mercado actual. Transformá tu
                empresa ahora y toma la delantera.
              </p>
            </div>
            <div className="w-full max-w-lg mx-auto bg-card p-6 md:p-8 rounded-lg shadow-lg">
              <form ref={formRef} action={formAction} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Nombre completo</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Tu nombre"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="tu@email.com"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Teléfono</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="Tu número de teléfono"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="comment">
                    ¿Cómo podemos ayudarte? (Opcional)
                  </Label>
                  <Textarea
                    id="comment"
                    name="comment"
                    rows={4}
                    placeholder="Contanos sobre tu negocio..."
                  />
                </div>
                <SubmitButton />
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* <Dialog open={isDialogOpen} onOpenChange={closeDialogAndReset}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>¡Mensaje Recibido!</DialogTitle>
            <DialogDescription>
              {state.message} Aquí tienes una sugerencia de mensaje de
              seguimiento generada por IA:
            </DialogDescription>
          </DialogHeader>
          <div className="my-4 p-4 bg-muted rounded-md text-sm text-muted-foreground relative">
            <p className="pr-10">{state.followUpMessage}</p>
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-2 right-2 h-7 w-7"
              onClick={handleCopy}
            >
              <Copy className="h-4 w-4" />
              <span className="sr-only">Copiar mensaje</span>
            </Button>
          </div>
          <DialogFooter>
            <Button onClick={closeDialogAndReset}>Cerrar</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog> */}
    </>
  )
}
