import * as React from "react";
import type { SVGProps } from "react";
const SvgIconArrowDownFromLineAccentLight = (
  props: SVGProps<SVGSVGElement>
) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={64} height={64} {...props}>
    <defs>
      <linearGradient
        id="icon-arrow-down-from-line-accent-light_svg__a"
        x1={3}
        x2={61}
        y1={65}
        y2={65}
        gradientTransform="matrix(1 0 0 -1 0 66)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#e57200" />
        <stop offset={1} stopColor="#b3f" />
      </linearGradient>
    </defs>
    <path
      fill="url(#icon-arrow-down-from-line-accent-light_svg__a)"
      d="M60 2H4c-.55 0-1-.45-1-1s.45-1 1-1h56c.55 0 1 .45 1 1s-.45 1-1 1Z"
    />
    <path d="M52.71 42.29a.996.996 0 0 0-1.41 0L33.01 60.58V11c0-.55-.45-1-1-1s-1 .45-1 1v49.59L12.72 42.3a.996.996 0 1 0-1.41 1.41l20 20c.09.09.2.17.33.22.12.05.25.08.38.08s.26-.03.38-.08.23-.12.33-.22l20-20a.996.996 0 0 0 0-1.41h-.02Z" />
  </svg>
);
export default SvgIconArrowDownFromLineAccentLight;
