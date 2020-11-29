import * as React from "react"
import Svg, { Path } from "react-native-svg"

function CallSVG(props) {
  return (
    <Svg
      width={28}
      height={28}
      viewBox="0 0 35 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M25.515 22.81v-.002a.24.24 0 01.28-.07h.002l7.646 3.278h.002a.26.26 0 01.15.294l-.001.002-1.64 7.101s0 0 0 0a.24.24 0 01-.234.187h0C14.984 33.6 1.4 20.041 1.4 3.28h0a.24.24 0 01.186-.234s0 0 0 0l7.105-1.64h.002a.252.252 0 01.284.143l3.278 7.65a.236.236 0 01-.068.277l-.003.002L8.04 12.87l-.845.692.466.989a26.739 26.739 0 0012.782 12.782l.988.466.692-.846 3.39-4.143z"
        stroke={props.color}
        strokeWidth={2.8}
      />
    </Svg>
  )
}

export default CallSVG
