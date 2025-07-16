import Header from '@/components/header';
import Hero from '@/components/sections/hero';
import Clients from '@/components/sections/clients';
import Services from '@/components/sections/services';
import SuccessStories from '@/components/sections/success-stories';
import Benefits from '@/components/sections/benefits';
import Contact from '@/components/sections/contact';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <Clients />
        <Services />
        <SuccessStories />
        <Benefits />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
