import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Cpu, Workflow, Waypoints, LineChart } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    icon: <Cpu className="h-8 w-8 text-accent" />,
    title: 'Automatización e IA a medida',
    description: 'Elimina tareas repetitivas y toma decisiones basadas en datos.',
  },
  {
    icon: <Workflow className="h-8 w-8 text-accent" />,
    title: 'Optimización de procesos',
    description: 'Más productividad con menos esfuerzo en tus flujos de trabajo.',
  },
  {
    icon: <Waypoints className="h-8 w-8 text-accent" />,
    title: 'Integración de tecnología',
    description: 'Digitalización sin fricciones para toda tu operación ERP/WMS.',
  },
  {
    icon: <LineChart className="h-8 w-8 text-accent" />,
    title: 'Estrategia y planificación',
    description: 'Un camino claro y operativo para escalar sin límites.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-32">
      <div className="container mx-auto">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-headline text-3xl sm:text-4xl font-bold tracking-tight text-primary md:text-5xl">
            Tecnología que potencia tu negocio y libera tu potencial.
          </h2>
          <p className="mt-6 text-base md:text-lg leading-relaxed md:leading-8 text-foreground/80">
            Deja atrás los procesos manuales y el desorden. Implementamos soluciones inteligentes para maximizar eficiencia y escalabilidad.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <Card key={index} className="flex flex-col text-center items-center justify-start p-4 md:p-6 transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
              <CardHeader className="items-center p-0">
                {service.icon}
                <CardTitle className="mt-4 font-headline text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-0 mt-2">
                <CardDescription className="flex-grow">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-16 text-center">
          <Button asChild size="lg">
            <Link href="#contact">
              Descubre cómo multiplicar tu eficiencia <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
