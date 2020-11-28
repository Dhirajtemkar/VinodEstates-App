import * as React from "react"
import Svg, { Path } from "react-native-svg"

function BackSVG(props) {
  return (
    <Svg
      width={15}
      height={25}
      viewBox="0 0 18 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M.477 13.834L13.677.483a1.617 1.617 0 012.306 0l1.54 1.557c.635.643.636 1.685.002 2.33L7.064 15l10.46 10.63a1.662 1.662 0 01-.002 2.33l-1.54 1.557a1.617 1.617 0 01-2.305 0L.477 16.166a1.662 1.662 0 010-2.332z"
        fill="#fff"
      />
    </Svg>
  )
}

export default BackSVG
