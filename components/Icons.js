/*
  Line icons matching the site's mono/terminal feel. Stroke-based at 24x24
  so they stay crisp at any size and inherit currentColor.
*/

const base = {
  width: "100%",
  height: "100%",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": "true",
};

export const Icons = {
  growth: (props) => (
    <svg {...base} {...props}>
      <path d="M3 17l5.5-5.5 3.5 3.5L21 6" />
      <path d="M15 6h6v6" />
    </svg>
  ),
  product: (props) => (
    <svg {...base} {...props}>
      <path d="M12 3l8 4.5-8 4.5-8-4.5L12 3z" />
      <path d="M4 12l8 4.5 8-4.5" />
      <path d="M4 16.5L12 21l8-4.5" />
    </svg>
  ),
  community: (props) => (
    <svg {...base} {...props}>
      <circle cx="9" cy="8" r="3" />
      <path d="M3 20c0-3.3 2.7-5 6-5s6 1.7 6 5" />
      <path d="M16 5.2a3 3 0 010 5.6" />
      <path d="M18 15.2c2 .7 3 2.3 3 4.8" />
    </svg>
  ),
  research: (props) => (
    <svg {...base} {...props}>
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="M15.2 15.2L21 21" />
      <path d="M7.5 10.5h6M10.5 7.5v6" />
    </svg>
  ),
  tech: (props) => (
    <svg {...base} {...props}>
      <rect x="2.5" y="4" width="19" height="16" rx="2" />
      <path d="M6.5 9.5l3 2.5-3 2.5" />
      <path d="M12 15h5" />
    </svg>
  ),
  business: (props) => (
    <svg {...base} {...props}>
      <rect x="2.5" y="7" width="19" height="13" rx="2" />
      <path d="M8.5 7V5.5A1.5 1.5 0 0110 4h4a1.5 1.5 0 011.5 1.5V7" />
      <path d="M2.5 12.5h19" />
      <path d="M10.5 12.5v2h3v-2" />
    </svg>
  ),
  journey: (props) => (
    <svg {...base} {...props}>
      <circle cx="5.5" cy="18.5" r="2.5" />
      <circle cx="18.5" cy="5.5" r="2.5" />
      <path d="M8 18.5h5a3.5 3.5 0 000-7H11a3.5 3.5 0 010-7h5" />
    </svg>
  ),
  writing: (props) => (
    <svg {...base} {...props}>
      <path d="M4 20l4-1 10-10a2.1 2.1 0 00-3-3L5 16l-1 4z" />
      <path d="M13.5 6.5l3 3" />
    </svg>
  ),
};

export function Icon({ name, className = "" }) {
  const Cmp = Icons[name];
  if (!Cmp) return null;
  return (
    <span className={className}>
      <Cmp />
    </span>
  );
}
