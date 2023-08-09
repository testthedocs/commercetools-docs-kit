import * as React from 'react';
import type { SVGProps } from 'react';
const SvgPackage = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    style={{
      width: '100%',
      height: '100%',
      transform: 'translate3d(0,0,0)',
      contentVisibility: 'visible',
    }}
    viewBox="0 0 500 500"
    {...props}
  >
    <defs>
      <clipPath id="package_svg__f">
        <path d="M0 0h500v500H0z" />
      </clipPath>
      <clipPath id="package_svg__d">
        <path d="M0 0h500v500H0z" />
      </clipPath>
      <filter
        id="package_svg__a"
        width="100%"
        height="100%"
        x="0%"
        y="0%"
        filterUnits="objectBoundingBox"
      >
        <feComponentTransfer in="SourceGraphic">
          <feFuncA tableValues="1.0 0.0" type="table" />
        </feComponentTransfer>
      </filter>
      <filter
        id="package_svg__h"
        width="300%"
        height="300%"
        x="-100%"
        y="-100%"
      >
        <feGaussianBlur result="filter_result_0" stdDeviation="52.5 52.5" />
      </filter>
      <mask id="package_svg__e" mask-type="alpha">
        <g filter="url(#package_svg__a)">
          <use href="#package_svg__b" />
        </g>
      </mask>
      <mask id="package_svg__g" mask-type="alpha">
        <use href="#package_svg__c" />
      </mask>
      <g
        id="package_svg__c"
        clipPath="url(#package_svg__d)"
        style={{
          display: 'block',
        }}
      >
        <path
          fillOpacity={0}
          stroke="#121331"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={12}
          d="M114.018-47.641-34.5-97.5s-.218 50.993.394 108c.606 56.5.369 101.266.369 101.266L114 161.5s.018-67 .009-106.5.009-102.641.009-102.641zm.024-.031L262-97.5s.164 60.004-.418 115.002-.343 94.264-.343 94.264L114 161.5s.042-64 .021-107 .021-102.172.021-102.172zM261.75-97.5l-147.25-48-148 46.788"
          style={{
            display: 'block',
          }}
          transform="matrix(.9 0 0 .9 147.4 269.35)"
        />
        <g
          style={{
            display: 'block',
          }}
        >
          <path
            fill="red"
            d="M299.311 209.509s-.108 25.191-.18 40.041c-.081 14.85-.162 33.651-.162 33.651l19.503 13.905 18-26.451s.234-18.405.081-37.755c-.153-19.35.072-35.415.072-35.415L206.17 152.026l-39.528 12.42 132.669 45.063z"
          />
          <path
            fillOpacity={0}
            stroke="#121331"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={10.8}
            d="M299.313 209.505s-.106 25.195-.185 40.045c-.078 14.85-.155 33.65-.155 33.65l19.498 13.908 18.003-26.453s.23-18.407.078-37.756c-.152-19.349.073-35.415.073-35.415l-130.453-45.457-39.534 12.416 132.675 45.062z"
          />
        </g>
      </g>
    </defs>
    <g
      clipPath="url(#package_svg__f)"
      mask="url(#package_svg__g)"
      style={{
        display: 'block',
      }}
    >
      <g
        filter="url(#package_svg__h)"
        transform="rotate(-94 262.075 8.435) scale(2.4)"
      >
        <path
          fill="#4AE0EB"
          d="M0-250c137.975 0 250 112.025 250 250S137.975 250 0 250-250 137.975-250 0-137.975-250 0-250z"
          className="package_svg__design"
        />
        <path
          fill="#CA5EED"
          d="M113.242-295.384c97.478 0 176.5 79.022 176.5 176.5s-79.022 176.5-176.5 176.5c-43.948 0-74.396-34.057-105.29-60.631-37.631-32.369-71.21-62.338-71.21-115.869 0-97.478 79.022-176.5 176.5-176.5z"
          className="package_svg__design"
        />
      </g>
    </g>
  </svg>
);
export default SvgPackage;