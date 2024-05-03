import { SVGProps } from 'react';

function ErrorFace(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="5em"
      height="5em"
      viewBox="0 0 24 24"
      {...props}
      className={`text-appGray400 ${props?.className}`}
    >
      <g stroke="currentColor" strokeLinecap="round" strokeWidth="2">
        <path
          fill="currentColor"
          strokeDasharray="60"
          strokeDashoffset="60"
          d="M12 3a9 9 0 110 18 9 9 0 010-18z"
        >
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            dur="0.5s"
            values="60;0"
          ></animate>
          <animate
            fill="freeze"
            attributeName="fill-opacity"
            begin="1.2s"
            dur="0.15s"
            values="0;0.3"
          ></animate>
        </path>
        <path
          fill="none"
          strokeDasharray="14"
          strokeDashoffset="14"
          d="M8 16c.5-1 1.79-2 4-2s3.5 1 4 2"
        >
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="1s"
            dur="0.2s"
            values="14;0"
          ></animate>
        </path>
      </g>
      <g fill="currentColor">
        <ellipse cx="9" cy="9.5" rx="1" ry="1.5">
          <animate
            fill="freeze"
            attributeName="fill-opacity"
            begin="0.6s"
            dur="0.2s"
            values="0;1"
          ></animate>
        </ellipse>
        <ellipse cx="15" cy="9.5" rx="1" ry="1.5">
          <animate
            fill="freeze"
            attributeName="fill-opacity"
            begin="0.8s"
            dur="0.2s"
            values="0;1"
          ></animate>
        </ellipse>
      </g>
    </svg>
  );
}

export default ErrorFace;
