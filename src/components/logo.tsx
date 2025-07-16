import { cn } from "@/lib/utils"

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("font-headline text-xl md:text-2xl font-bold text-primary", className)}>
      TechFlow<span className="text-accent">.</span>
    </div>
  )
}
