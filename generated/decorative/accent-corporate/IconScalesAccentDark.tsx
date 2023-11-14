import * as React from "react";
import type { SVGProps } from "react";
const SvgIconScalesAccentDark = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 64 64"
    {...props}
  >
    <defs>
      <linearGradient
        id="icon-scales-accent-dark_svg__a"
        x1={0}
        x2={24}
        y1={37.5}
        y2={37.5}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#3485fe" />
        <stop offset={1} stopColor="#b3f" />
      </linearGradient>
      <linearGradient
        xlinkHref="#icon-scales-accent-dark_svg__a"
        id="icon-scales-accent-dark_svg__b"
        x1={40}
        x2={64}
      />
    </defs>
    <path
      fill="#fff"
      d="M52 8H36.9a5 5 0 0 0-9.8 0H12L0 31l1.84.76L12 12.48l10.09 19.19L24 31 13.04 10H27.1a5.01 5.01 0 0 0 3.9 3.9V58H16c-.55 0-1 .45-1 1s.45 1 1 1h32c.55 0 1-.45 1-1s-.45-1-1-1H33V13.9a5.01 5.01 0 0 0 3.9-3.9h14.06L40 31l1.87.73L52 12.48l10.17 19.34L64 31 52 8Zm-20 4c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3Z"
    />
    <path
      fill="url(#icon-scales-accent-dark_svg__a)"
      d="M0 33c0 6.63 5.37 11 12 11s12-4.37 12-11v-2H0v2Zm22 0c0 5.52-4.47 8.99-9.99 8.99-5.52 0-9.99-3.47-9.99-8.99h19.99Z"
    />
    <path
      fill="url(#icon-scales-accent-dark_svg__b)"
      d="M40 31v2c0 6.63 5.37 11 12 11s12-4.37 12-11v-2H40Zm12 11c-5.52 0-9.99-3.47-9.99-8.99H62c0 5.52-4.47 8.99-9.99 8.99Z"
    />
  </svg>
);
export default SvgIconScalesAccentDark;
