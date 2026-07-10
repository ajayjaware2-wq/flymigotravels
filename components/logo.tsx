type LogoProps = {
  size?: number;
  className?: string;
};

export function Logo({ size = 52, className }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Flymigo Travels"
    >
      {/* White background circle */}
      <circle cx="60" cy="60" r="58" fill="white" />

      {/* Navy left half-ring */}
      <path
        d="M60 4 A56 56 0 0 0 60 116"
        stroke="#1a2e5a"
        strokeWidth="5"
        fill="none"
        strokeLinecap="round"
      />
      {/* Orange right half-ring */}
      <path
        d="M60 4 A56 56 0 0 1 60 116"
        stroke="#f97316"
        strokeWidth="5"
        fill="none"
        strokeLinecap="round"
      />

      {/* "Fly" text — navy, bold italic */}
      <text
        x="18"
        y="68"
        fontFamily="Arial, sans-serif"
        fontSize="34"
        fontWeight="900"
        fontStyle="italic"
        fill="#1a2e5a"
      >
        Fly
      </text>

      {/* "migo" text — orange, bold italic */}
      <text
        x="56"
        y="68"
        fontFamily="Arial, sans-serif"
        fontSize="34"
        fontWeight="900"
        fontStyle="italic"
        fill="#f97316"
      >
        migo
      </text>

      {/* Swoosh arc from under "Fly" curving up to the plane */}
      <path
        d="M22 72 Q60 56 90 32"
        stroke="#f97316"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
      />

      {/* Plane silhouette at the top-right of the swoosh */}
      <g transform="translate(86,20) rotate(-35)">
        <path
          d="M0 0 L-6 4 L-18 2 L-19.5 4 L-10 7 L-13 10 L-16 9 L-17 10 L-14 12 L-11.5 15.5 L-10.5 14.5 L-12 12 L-9 9 L-1 12 L-0.5 10 L-9 7 L-7 3 Z"
          fill="#1a2e5a"
          transform="scale(1.1)"
        />
      </g>

      {/* "—TRAVELS—" text */}
      <text
        x="60"
        y="92"
        fontFamily="Arial, sans-serif"
        fontSize="11"
        fontWeight="700"
        fill="#1a2e5a"
        textAnchor="middle"
        letterSpacing="3"
      >
        TRAVELS
      </text>
      {/* Orange dashes around TRAVELS */}
      <line x1="18" y1="89" x2="27" y2="89" stroke="#f97316" strokeWidth="2" strokeLinecap="round" />
      <line x1="93" y1="89" x2="102" y2="89" stroke="#f97316" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
