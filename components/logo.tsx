import Image from "next/image";

type LogoProps = {
  variant: "light" | "dark";
  className?: string;
};

export function Logo({ className }: LogoProps) {
  return (
    <div className={`flex items-center ${className ?? ""}`}>
      <Image
        src="/images/flymigo-logo.jpeg3.PNG"
        alt="Flymigo Travels"
        width={65}
        height={65}
        priority
        className="h-16 w-auto object-contain"
      />
    </div>
  );
}