import type { SVGProps } from "react";

export function TapTapImpactLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
    >
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="hsl(var(--primary))" />
        <path d="M12 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" fill="hsl(var(--primary-foreground))" />
        <path d="M15.5 15.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" fill="hsl(var(--primary-foreground))" opacity="0.7" />
        <path d="M8.5 15.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" fill="hsl(var(--primary-foreground))" opacity="0.7" />
    </svg>
  );
}
