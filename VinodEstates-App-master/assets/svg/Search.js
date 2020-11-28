import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SearchSVG(props) {
  return (
    <Svg
      width={26}
      height={27}
      viewBox="0 0 28 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M27.62 22.479l-5.454-5.063a1.365 1.365 0 00-.93-.355h-.89c1.509-1.793 2.406-4.047 2.406-6.5C22.752 4.728 17.66 0 11.376 0S0 4.727 0 10.562c0 5.834 5.092 10.56 11.376 10.56 2.641 0 5.07-.832 7-2.233v.827c0 .325.137.635.383.864l5.453 5.062a1.38 1.38 0 001.854 0l1.548-1.437c.514-.477.514-1.249.005-1.726zM11.375 17.06c-3.867 0-7-2.905-7-6.5 0-3.59 3.128-6.499 7-6.499 3.867 0 7 2.905 7 6.5 0 3.59-3.128 6.499-7 6.499z"
        fill={props.color}
      />
    </Svg>
  )
}

export default SearchSVG
