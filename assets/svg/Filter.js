import * as React from "react"
import Svg, { Path, Rect } from "react-native-svg"

function FilterSVG(props) {
  return (
    <Svg
      width={25}
      height={24}
      viewBox="0 0 30 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        stroke="#898881"
        strokeWidth={3}
        d="M0 4.5h30M0 14.5h30M0 24.5h30"
      />
      <Rect x={18} width={9} height={9} rx={2} fill="#898881" />
      <Rect x={20} y={2} width={5} height={5} rx={1} fill="#E8EBF0" />
      <Rect x={4} y={10} width={9} height={9} rx={2} fill="#898881" />
      <Rect x={6} y={12} width={5} height={5} rx={1} fill="#E8EBF0" />
      <Rect x={16} y={20} width={9} height={9} rx={2} fill="#898881" />
      <Rect x={18} y={22} width={5} height={5} rx={1} fill="#E8EBF0" />
    </Svg>
  )
}

export default FilterSVG
