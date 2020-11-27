import * as React from "react"
import Svg, { Path } from "react-native-svg"

function BedroomSVG(props) {
  return (
    <Svg
      width={20}
      height={12}
      viewBox="0 0 24 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M6.6 8c1.654 0 3-1.495 3-3.333s-1.346-3.334-3-3.334-3 1.496-3 3.334S4.946 8 6.6 8zm13.2-5.333h-8.4c-.332 0-.6.298-.6.666v6H2.4V.667C2.4.298 2.132 0 1.8 0H.6C.269 0 0 .298 0 .667v14.666c0 .369.269.667.6.667h1.2c.331 0 .6-.298.6-.667v-2h19.2v2c0 .369.268.667.6.667h1.2c.332 0 .6-.298.6-.667v-8c0-2.577-1.88-4.666-4.2-4.666z"
        fill="#898881"
      />
    </Svg>
  )
}

export default BedroomSVG
