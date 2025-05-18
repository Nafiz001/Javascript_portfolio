import React from "react";

const AnimatedDivider = () => (
  <svg className="divider-svg" viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient
        id="dividerGradient"
        x1="0"
        y1="0"
        x2="1440"
        y2="60"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#00d4ff" />
        <stop offset="0.5" stopColor="#ff0096" />
        <stop offset="1" stopColor="#ffd700" />
      </linearGradient>
    </defs>
    <path>
      <animate
        attributeName="d"
        dur="6s"
        repeatCount="indefinite"
        values="M0,30 Q360,60 720,30 T1440,30;M0,40 Q360,10 720,40 T1440,40;M0,30 Q360,60 720,30 T1440,30"
      />
    </path>
    <path
      d="M0,30 Q360,60 720,30 T1440,30"
      stroke="url(#dividerGradient)"
      strokeWidth="6"
      fill="none"
    />
  </svg>
);

export default AnimatedDivider;
