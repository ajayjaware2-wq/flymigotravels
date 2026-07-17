import Image from "next/image";

type LogoProps = {
  variant: "light" | "dark";
  className?: string;
};

export function Logo({ className }: LogoProps) {
  return (
    <div className={`flex items-center ${className ?? ""}`}>
      <Image
        src="/images/flymigo-logo.jpeg3.jpeg.png"
        alt="Flymigo Travels"
        width={96}
        height={96}
        priority
        className="h-24 w-24 rounded-full object-cover"
      />
    </div>
  );
}