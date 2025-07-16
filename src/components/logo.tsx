import { cn } from '@/lib/utils'
import { Mountain } from 'lucide-react'

export function Logo({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'font-headline text-xl md:text-2xl font-bold text-primary flex items-center gap-2',
        className
      )}
    >
      <Mountain className="h-6 w-6 -scale-x-100 " strokeWidth={2} />
      <span className="">TechFlow</span>
    </div>
  )
}
