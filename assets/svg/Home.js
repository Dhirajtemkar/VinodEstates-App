import * as React from "react"
import Svg, { Path } from "react-native-svg"

function HomeSVG(props) {
  return (
    <Svg
      width={28}
      height={25}
      viewBox="0 0 28 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M13.629 6.486L4.667 14.96v9.147c0 .237.082.464.228.631a.73.73 0 00.55.262l5.447-.016a.731.731 0 00.547-.263.965.965 0 00.226-.63v-5.342c0-.236.083-.464.228-.631a.73.73 0 01.55-.262h3.111a.73.73 0 01.55.262.964.964 0 01.228.631v5.338c0 .117.02.234.058.343a.912.912 0 00.169.29c.072.083.158.15.252.195a.692.692 0 00.299.068l5.445.017a.73.73 0 00.55-.262.965.965 0 00.227-.631v-9.153l-8.96-8.468a.547.547 0 00-.371-.151.547.547 0 00-.372.15zm14.156 5.76L23.72 8.4V.67a.723.723 0 00-.17-.474.548.548 0 00-.413-.196h-2.722a.548.548 0 00-.413.196.723.723 0 00-.17.474v4.052L15.48.612A2.157 2.157 0 0013.998 0c-.54 0-1.065.216-1.482.61L.212 12.246a.66.66 0 00-.144.202.745.745 0 00-.042.51c.022.085.06.163.108.231l1.24 1.73a.609.609 0 00.176.166.529.529 0 00.445.05.564.564 0 00.2-.125L13.63 4.197a.547.547 0 01.372-.15c.135 0 .266.053.372.15L25.806 15.01a.565.565 0 00.2.124.512.512 0 00.445-.048.607.607 0 00.177-.165l1.24-1.73a.706.706 0 00.107-.232.763.763 0 00-.045-.511.658.658 0 00-.145-.202z"
        fill={props.color}
      />
    </Svg>
  )
}

export default HomeSVG