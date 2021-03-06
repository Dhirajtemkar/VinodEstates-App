import * as React from "react"
import Svg, { Path } from "react-native-svg"

function RupeesSVG(props) {
  return (
    <Svg
      width={11}
      height={14}
      viewBox="0 0 12 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M11.55 2.286a.44.44 0 00.45-.429V.43A.44.44 0 0011.55 0H.45A.44.44 0 000 .429v1.598a.44.44 0 00.45.428h3.198c1.024 0 1.81.356 2.286.974H.45a.44.44 0 00-.45.428v1.429a.44.44 0 00.45.428h5.953C6.17 7.004 5.167 7.808 3.6 7.808H.45a.44.44 0 00-.45.429v1.893c0 .12.052.234.145.315l6.19 5.441a.463.463 0 00.304.114h3.097c.41 0 .606-.479.305-.743l-5.658-4.975C7.25 10.2 9.3 8.375 9.57 5.714h1.98a.44.44 0 00.45-.428V3.857a.44.44 0 00-.45-.428h-2.2a4.78 4.78 0 00-.535-1.143h2.735z"
        fill={props.color}
      />
    </Svg>
  )
}

export default RupeesSVG
