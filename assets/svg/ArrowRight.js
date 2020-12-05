import * as React from "react"
import Svg, { Path } from "react-native-svg"

function ArrowRightSVG(props) {
  return (
    <Svg
      width={38}
      height={24}
      viewBox="0 0 38 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M37.06 13.06a1.5 1.5 0 000-2.12l-9.545-9.547a1.5 1.5 0 10-2.122 2.122L33.88 12l-8.486 8.485a1.5 1.5 0 102.122 2.122l9.546-9.546zM0 13.5h36v-3H0v3z"
        fill="#C6C2CB"
      />
    </Svg>
  )
}

export default ArrowRightSVG
