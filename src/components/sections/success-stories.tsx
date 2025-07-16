"use client";

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"
import { Quote } from 'lucide-react';
import Link from "next/link";

const stories = [
    {
        company: "Ecommerce líder",
        quote: "Reducimos los tiempos de despacho en un 30% y escalamos la capacidad operativa sin contratar más personal."
    },
    {
        company: "Industria manufacturera",
        quote: "Optimización de compras y producción con IA, reduciendo costos en un 20%."
    },
    {
        company: "Empresa de servicios",
        quote: "Automatización de tareas clave, liberando 15 horas semanales del equipo directivo."
    }
];

export default function SuccessStories() {
  return (
    <section id="success-stories" className="py-20 md:py-32 bg-secondary/50">
        <div className="container mx-auto">
            <div className="mx-auto max-w-4xl text-center">
                <h2 className="font-headline text-3xl sm:text-4xl font-bold tracking-tight text-primary md:text-5xl">
                    De caos a control total: Resultados tangibles de nuestros clientes.
                </h2>
            </div>
            <Carousel className="w-full max-w-xs sm:max-w-xl md:max-w-3xl mx-auto mt-16" opts={{loop: true}}>
                <CarouselContent>
                    {stories.map((story, index) => (
                        <CarouselItem key={index}>
                            <div className="p-1">
                                <Card className="bg-background/70">
                                    <CardContent className="flex flex-col items-center justify-center p-6 md:p-12 text-center min-h-[20rem]">
                                        <Quote className="w-8 h-8 md:w-10 md:h-10 text-accent/50 mb-4" />
                                        <blockquote className="text-lg md:text-xl font-medium leading-relaxed text-foreground/90">
                                            "{story.quote}"
                                        </blockquote>
                                        <footer className="mt-6 text-base font-bold text-primary">
                                            — {story.company}
                                        </footer>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="left-0 sm:-left-12" />
                <CarouselNext className="right-0 sm:-right-12" />
            </Carousel>
             <div className="mt-16 text-center">
                <Button asChild size="lg" variant="link" className="text-accent text-base md:text-lg">
                  <Link href="#contact">Quiero resultados así en mi negocio →</Link>
                </Button>
            </div>
        </div>
    </section>
  )
}
