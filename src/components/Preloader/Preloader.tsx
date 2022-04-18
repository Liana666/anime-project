import "./Preloader.css";

export const Preloader = () => {
  return (
    <div className="preloader">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="237px"
        height="237px"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
      >
        <circle
          cx="50"
          cy="50"
          r="0"
          fill="none"
          stroke="#f62f7c"
          stroke-width="5"
        >
          <animate
            attributeName="r"
            repeatCount="indefinite"
            dur="1.2048192771084336s"
            values="0;37"
            keyTimes="0;1"
            keySplines="0 0.2 0.8 1"
            calcMode="spline"
            begin="0s"
          ></animate>
          <animate
            attributeName="opacity"
            repeatCount="indefinite"
            dur="1.2048192771084336s"
            values="1;0"
            keyTimes="0;1"
            keySplines="0.2 0 0.8 1"
            calcMode="spline"
            begin="0s"
          ></animate>
        </circle>
        <circle
          cx="50"
          cy="50"
          r="0"
          fill="none"
          stroke="#ce0e59"
          stroke-width="5"
        >
          <animate
            attributeName="r"
            repeatCount="indefinite"
            dur="1.2048192771084336s"
            values="0;37"
            keyTimes="0;1"
            keySplines="0 0.2 0.8 1"
            calcMode="spline"
            begin="-0.6024096385542168s"
          ></animate>
          <animate
            attributeName="opacity"
            repeatCount="indefinite"
            dur="1.2048192771084336s"
            values="1;0"
            keyTimes="0;1"
            keySplines="0.2 0 0.8 1"
            calcMode="spline"
            begin="-0.6024096385542168s"
          ></animate>
        </circle>
      </svg>
    </div>
  );
};
