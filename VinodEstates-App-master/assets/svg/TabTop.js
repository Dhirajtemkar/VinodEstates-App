import * as React from "react"
import Svg, { Path } from "react-native-svg"

function TabTopSVG(props) {
  return (
    <Svg
      width={61}
      height={27}
      viewBox="0 0 61 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M30.5 0C43.267 0 61 26.25 61 26.25H0S17.733 0 30.5 0z"
        fill={props.color}
      />
    </Svg>
  )
}

export default TabTopSVG
