import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
        <div 
            aria-hidden="true" 
            className="absolute inset-0 bg-gradient-to-br from-background via-background/80 to-background/30 backdrop-blur-sm z-10"
        ></div>
        <Image
            src="/images/background-office.webp"
            alt="Dueño de negocio relajado en su oficina viendo métricas en un monitor, gracias a la automatización de TechFlow"
            fill
            className="object-cover opacity-30"
            data-ai-hint="office relaxation"
            priority
        />
        <div className="container relative z-20">
            <div className="mx-auto max-w-4xl text-center">
                <h1 className="font-headline text-4xl font-bold tracking-tight text-primary sm:text-5xl lg:text-6xl">
                    Libera tu tiempo y escala tu negocio con tecnología y automatización inteligente.
                </h1>
                <p className="mt-6 text-base leading-7 sm:text-lg sm:leading-8 text-foreground/80">
                    Optimiza cada proceso, reduce costos y toma decisiones estratégicas con IA y automatización avanzada.
                </p>
                <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-4">
                    <Button asChild size="lg">
                        <Link href="#contact">
                            Agenda una consulta gratuita
                        </Link>
                    </Button>
                    <Button asChild variant="link" size="lg" className="text-accent">
                        <Link href="#services">
                            Descubre cómo <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    </section>
  );
}
