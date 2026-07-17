import Image from "next/image";

type LogoProps = {
  variant: "light" | "dark";
  className?: string;
};

export function Logo({ variant, className }: LogoProps) {
  const isDark = variant === "dark";
  const textColor = isDark ? "text-white" : "text-navy";
  const subColor = isDark ? "text-white/70" : "text-navy/60";

  return (
    <div className={`flex items-center gap-3 ${className ?? ""}`}>
      <Image
        src="/images/public/flymigo-logo.jpeg"
        alt="Flymigo Travels"
        width={65}
        height={65}
        className="h-16 w-auto object-contain flex-shrink-0"
        priority
      />

      <div className="flex flex-col leading-none">
        <span className="font-display text-xl font-bold tracking-wide">
          <span className={textColor}>Fly</span>
          <span className="text-orange-500">migo</span>
        </span>

        <span
          className={`text-[9px] font-semibold tracking-[0.25em] uppercase ${subColor}`}
        >
          — Travels —
        </span>
      </div>
    </div>
  );
}