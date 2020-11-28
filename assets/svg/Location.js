import * as React from "react"
import Svg, { Path } from "react-native-svg"

function LocationSVG(props) {
  return (
    <Svg
      width={ props.listInfo ? 18 : 12 }
      height={ props.listInfo ? 22 : 16 }
      viewBox="0 0 14 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M6.28 17.637C.984 10.232 0 9.472 0 6.75 0 3.022 3.134 0 7 0s7 3.022 7 6.75c0 2.722-.983 3.482-6.28 10.887a.894.894 0 01-1.44 0zM7 9.562c1.61 0 2.917-1.259 2.917-2.812S8.61 3.937 7 3.937c-1.61 0-2.917 1.26-2.917 2.813C4.083 8.303 5.39 9.563 7 9.563z"
        fill="#898881"
      />
    </Svg>
  )
}

export default LocationSVG
