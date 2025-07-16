import { Button } from '@/components/ui/button';
import { CircleDollarSign, Bot, Scaling, ThumbsUp } from 'lucide-react';
import Link from 'next/link';

const benefits = [
    {
        icon: <CircleDollarSign className="h-8 w-8 md:h-10 md:w-10 text-accent" />,
        title: "Ahorro de costos operativos",
        description: "Más rentabilidad con procesos optimizados."
    },
    {
        icon: <Bot className="h-8 w-8 md:h-10 md:w-10 text-accent" />,
        title: "Automatización con IA",
        description: "Toma decisiones en segundos con datos precisos."
    },
    {
        icon: <Scaling className="h-8 w-8 md:h-10 md:w-10 text-accent" />,
        title: "Escalabilidad sin fricción",
        description: "Tu empresa crece sin desbordarte."
    },
    {
        icon: <ThumbsUp className="h-8 w-8 md:h-10 md:w-10 text-accent" />,
        title: "Implementación sin dolores de cabeza",
        description: "Nos encargamos de todo por vos."
    },
];

export default function Benefits() {
  return (
    <section id="benefits" className="py-20 md:py-32">
        <div className="container mx-auto">
            <div className="mx-auto max-w-4xl text-center">
                <h2 className="font-headline text-3xl sm:text-4xl font-bold tracking-tight text-primary md:text-5xl">
                    Menos esfuerzo, más resultados: Así es el negocio del futuro.
                </h2>
            </div>
            <div className="mt-16 mx-auto max-w-5xl grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2">
                {benefits.map((benefit, index) => (
                    <div key={index} className="flex gap-4 md:gap-6 items-start">
                        <div className="flex-shrink-0 mt-1">{benefit.icon}</div>
                        <div>
                            <h3 className="text-xl font-bold font-headline text-primary">{benefit.title}</h3>
                            <p className="mt-1 text-base text-foreground/80">{benefit.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="mt-16 text-center">
                <Button asChild size="lg">
                    <Link href="#contact">
                        Optimiza tu empresa hoy
                    </Link>
                </Button>
            </div>
        </div>
    </section>
  )
}
