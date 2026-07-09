import { Reveal } from '@/components/reveal';
import { cn } from '@/lib/utils';

type Props = {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
  align?: 'center' | 'left';
  dark?: boolean;
  className?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  dark = false,
  className,
}: Props) {
  return (
    <div
      className={cn(
        'flex flex-col gap-4',
        align === 'center' ? 'items-center text-center' : 'items-start text-left',
        className
      )}
    >
      <Reveal>
        <span className="section-eyebrow">
          <span className="h-px w-8 bg-luxury" />
          {eyebrow}
        </span>
      </Reveal>
      <Reveal delay={0.08}>
        <h2
          className={cn(
            'font-display text-3xl font-semibold leading-[1.15] tracking-tight sm:text-4xl lg:text-[2.75rem] text-balance',
            dark ? 'text-white' : 'text-navy'
          )}
        >
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.16}>
          <p
            className={cn(
              'max-w-2xl text-base leading-relaxed sm:text-lg',
              dark ? 'text-white/70' : 'text-muted-foreground',
              align === 'center' && 'mx-auto'
            )}
          >
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
}
