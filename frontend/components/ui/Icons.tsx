type IconName =
  | "arrow-up-right"
  | "brain"
  | "briefcase"
  | "check"
  | "chevron-right"
  | "code"
  | "compass"
  | "layers"
  | "menu"
  | "rocket"
  | "sparkles"
  | "target"
  | "trending-up"
  | "x";

type IconProps = {
  name: IconName;
  size?: number;
  className?: string;
};

const paths: Record<IconName, React.ReactNode> = {
  "arrow-up-right": (
    <>
      <path d="M7 17 17 7" />
      <path d="M7 7h10v10" />
    </>
  ),
  brain: (
    <>
      <path d="M9.5 4.5a3 3 0 0 0-5.7 1.2A3.5 3.5 0 0 0 4 12.5a3 3 0 0 0 3.5 4.8 3 3 0 0 0 5 0 3 3 0 0 0 3.5-4.8 3.5 3.5 0 0 0 .2-6.8 3 3 0 0 0-5.7-1.2" />
      <path d="M9.5 4.5v15M14.5 4.5v15M4.5 9h5M14.5 9h5M4.5 14h5M14.5 14h5" />
    </>
  ),
  briefcase: (
    <>
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18M10 12v2h4v-2" />
    </>
  ),
  check: <path d="m5 12 4 4L19 6" />,
  "chevron-right": <path d="m9 18 6-6-6-6" />,
  code: (
    <>
      <path d="m8 9-4 3 4 3M16 9l4 3-4 3M14 5l-4 14" />
    </>
  ),
  compass: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="m15.5 8.5-2.2 4.8-4.8 2.2 2.2-4.8 4.8-2.2Z" />
    </>
  ),
  layers: (
    <>
      <path d="m12 3 9 5-9 5-9-5 9-5Z" />
      <path d="m3 12 9 5 9-5M3 16l9 5 9-5" />
    </>
  ),
  menu: (
    <>
      <path d="M4 6h16M4 12h16M4 18h16" />
    </>
  ),
  rocket: (
    <>
      <path d="M14.5 5.5C17 3 21 3 21 3s0 4-2.5 6.5l-4 4L10 9.5l4.5-4Z" />
      <path d="m10 9.5-5 .5-2 2 6 1M14.5 14l-.5 5-2 2-1-6" />
      <circle cx="16.5" cy="7.5" r="1.5" />
      <path d="M8 16s-2 0-3 1c-1 1-1 3-1 3s2 0 3-1c1-1 1-3 1-3Z" />
    </>
  ),
  sparkles: (
    <>
      <path d="m12 3-1.2 4.8L6 9l4.8 1.2L12 15l1.2-4.8L18 9l-4.8-1.2L12 3ZM19 15l-.6 2.4L16 18l2.4.6L19 21l.6-2.4L22 18l-2.4-.6L19 15ZM5 3l-.5 2L2.5 5.5l2 .5L5 8l.5-2 2-.5-2-.5L5 3Z" />
    </>
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v3M22 12h-3M12 22v-3M2 12h3" />
    </>
  ),
  "trending-up": (
    <>
      <path d="M3 17 9 11l4 4 8-9" />
      <path d="M15 6h6v6" />
    </>
  ),
  x: (
    <>
      <path d="m6 6 12 12M18 6 6 18" />
    </>
  ),
};

export function Icon({ name, size = 20, className = "" }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      height={size}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
      viewBox="0 0 24 24"
      width={size}
    >
      {paths[name]}
    </svg>
  );
}
