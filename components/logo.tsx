type LogoProps = {
  variant: 'light' | 'dark';
  className?: string;
};

export function Logo({ variant, className }: LogoProps) {
  const isDark = variant === 'dark';
  const textColor = isDark ? 'text-white' : 'text-navy';
  const subColor = isDark ? 'text-white/70' : 'text-navy/60';

  return (
    <div className={`flex items-center gap-2.5 ${className ?? ''}`}>
      <svg
        width="44"
        height="44"
        viewBox="0 0 44 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
        role="img"
        aria-label="Flymigo Travels"
      >
        <circle cx="22" cy="22" r="20" fill="white" />
        <path d="M22 2 A20 20 0 0 1 22 42" stroke="#f97316" strokeWidth="3" fill="none" />
        <path d="M22 2 A20 20 0 0 0 22 42" stroke="#0B1F3A" strokeWidth="3" fill="none" />
        <path
          d="M29.5 10.5 L24 16.5 L14 14 L12.5 15.5 L20.5 20 L17.5 23 L14.5 22 L13.5 23 L17 25.5 L19.5 29 L20.5 28 L19.5 25 L22.5 22 L27 30 L28.5 28.5 L26 18.5 L32 13 Z"
          fill="#0B1F3A"
        />
        <circle cx="23.5" cy="17" r="1.5" fill="#f97316" />
      </svg>
      <div className="flex flex-col leading-none">
        <span className="font-display text-xl font-bold tracking-wide">
          <span className={textColor}>Fly</span>
          <span className="text-orange-500">migo</span>
        </span>
        <span className={`text-[9px] font-semibold tracking-[0.25em] uppercase ${subColor}`}>
          — Travels —
        </span>
      </div>
    </div>
  );
}
