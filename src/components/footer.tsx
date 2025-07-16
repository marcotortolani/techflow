import { Logo } from '@/components/logo';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-secondary/50 border-t">
      <div className="container mx-auto py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <Logo />
          <p className="text-sm text-center text-muted-foreground">
            &copy; {currentYear} TechFlow Consulting. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
