const clientLogos = [
  { name: 'InnovateCorp' },
  { name: 'QuantumLeap' },
  { name: 'ApexIndustries' },
  { name: 'StellarSolutions' },
  { name: 'SynergyGroup' },
  { name: 'MomentumLLC' },
  { name: 'Zenith' },
  { name: 'Vortex Inc' },
];

export default function Clients() {
  return (
    <section id="clients" className="py-16 sm:py-24 bg-secondary/50">
      <div className="container mx-auto">
        <h2 className="text-center font-headline text-2xl sm:text-3xl font-bold text-primary md:text-4xl px-4">
          Las empresas más eficientes ya dieron el paso, ¿qué esperás?
        </h2>
        <div className="relative mt-12 overflow-x-hidden">
          <div className="flex animate-scroll-infinite">
            {[...clientLogos, ...clientLogos].map((client, index) => (
              <div key={index} className="flex-shrink-0 w-32 md:w-48 mx-4 md:mx-8">
                <div className="flex items-center justify-center h-20 text-xl md:text-2xl font-bold text-muted-foreground/60 grayscale hover:grayscale-0 transition-all duration-300">
                  {client.name}
                </div>
              </div>
            ))}
          </div>
          <div className="absolute inset-y-0 left-0 w-8 md:w-16 bg-gradient-to-r from-secondary/50 to-transparent"></div>
          <div className="absolute inset-y-0 right-0 w-8 md:w-16 bg-gradient-to-l from-secondary/50 to-transparent"></div>
        </div>
      </div>
    </section>
  );
}
