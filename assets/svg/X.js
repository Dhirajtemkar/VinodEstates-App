import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function XSVG(props) {
  return (
    <Svg
      width={22}
      height={28}
      viewBox="0 0 28 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#prefix__clip0)">
        <Path
          d="M19.307 20l7.96-7.818a2.427 2.427 0 000-3.475L25.498 6.97a2.535 2.535 0 00-3.538 0L14 14.787 6.04 6.97a2.535 2.535 0 00-3.538 0L.732 8.707a2.427 2.427 0 000 3.475L8.693 20l-7.96 7.818a2.427 2.427 0 000 3.475l1.77 1.738c.977.959 2.561.959 3.538 0L14 25.212l7.96 7.819c.977.959 2.561.959 3.538 0l1.77-1.738a2.427 2.427 0 000-3.475L19.307 20z"
          fill="#474643"
        />
      </G>
      <Defs>
        <ClipPath id="prefix__clip0">
          <Path fill="#fff" d="M0 0h28v40H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default XSVG
