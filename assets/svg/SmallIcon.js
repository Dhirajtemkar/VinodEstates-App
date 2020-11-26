import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SmallIcon(props) {
  return (
    <Svg
      width={150}
      height={123}
      viewBox="0 0 150 123"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        transform="matrix(.84356 .53704 -.32322 .94632 39 52)"
        stroke="#fff"
        strokeWidth={10}
        d="M0-5h25.3"
      />
      <Path
        stroke="#fff"
        strokeWidth={10}
        d="M37 30V18M33.57 22.436L62.08 5.181"
      />
      <Path
        d="M60.42 0l30.573 24.785V60.36L60.421 79.98V0zM18.877 55.14L42.895 42.7v48l-24.018 12.815V55.14z"
        fill="#fff"
      />
      <Path d="M2.264 116.743l105.504-68.108" stroke="#fff" strokeWidth={10} />
      <Path
        d="M106.413 43.444l31.854 23.62v39.364l-31.854-20.495V43.444z"
        fill="#fff"
      />
      <Path
        d="M106.098 87.344L148 113.971M75.4 110.347l32.795-20.906"
        stroke="#fff"
        strokeWidth={10}
      />
      <Path
        fill="#fff"
        d="M36.864 107.473h6.491v6.47h-6.491zM45.951 107.473h6.491v6.47h-6.491zM36.864 116.53h6.491V123h-6.491zM45.951 116.53h6.491V123h-6.491z"
      />
      <Path
        transform="rotate(33.818 -132.433 114.998) skewX(-.176)"
        stroke="#fff"
        strokeWidth={10}
        d="M0-5h47.66"
      />
    </Svg>
  )
}

export default SmallIcon
