import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function BuySVG(props) {
  return (
    <Svg
      width={105}
      height={105}
      viewBox="0 0 105 105"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#prefix__clip0)" fill={props.color}>
        <Path d="M36.75 72.711h-10.5a1.75 1.75 0 00-1.75 1.75v10.5c0 .967.784 1.75 1.75 1.75h10.5a1.75 1.75 0 001.75-1.75v-10.5a1.75 1.75 0 00-1.75-1.75zM35 83.211h-7v-7h7v7zM61.25 53.461h-17.5a3.5 3.5 0 00-3.5 3.5v7a3.5 3.5 0 003.5 3.5h17.5a3.5 3.5 0 003.5-3.5v-7a3.5 3.5 0 00-3.5-3.5zm0 5.25h-7v-1.75h7v1.75zm-10.5-1.75v1.75h-7v-1.75h7zm-7 5.25h7v1.75h-7v-1.75zm10.5 1.75v-1.75h7v1.75h-7z" />
        <Path d="M96.098 88.582a8.75 8.75 0 00-10.348-6.945V50.685l3.138 3.138a5.463 5.463 0 007.724-7.725l-4.887-4.888H98a5.25 5.25 0 005.25-5.25v-21A5.25 5.25 0 0098 9.711H60.225l-4.026-4.024a5.25 5.25 0 00-7.41 0L8.389 46.099a5.463 5.463 0 007.724 7.725l3.138-3.138v36.693A6.97 6.97 0 007 91.961a7 7 0 00-7 7c0 .967.784 1.75 1.75 1.75h101.5a1.75 1.75 0 001.75-1.75 10.518 10.518 0 00-8.902-10.38zm-15.612-3.549c0-.025.014-.045.014-.072v-10.5a1.75 1.75 0 00-1.75-1.75h-10.5a1.75 1.75 0 00-1.75 1.75v10.5c0 .967.784 1.75 1.75 1.75h10.5c.319-.007.629-.106.895-.282a8.632 8.632 0 00-.895 3.782v.175a8.75 8.75 0 00-6.808 6.825H64.75v-26.25a1.75 1.75 0 00-1.75-1.75H42a1.75 1.75 0 00-1.75 1.75v26.25H29.595a10.523 10.523 0 00-6.845-8.14V48.21h59.5v35.046a8.774 8.774 0 00-1.764 1.776zM77 76.211v7h-7v-7h7zm17.138-27.637a1.965 1.965 0 010 2.775 1.969 1.969 0 01-2.776 0L81.225 41.211h5.55l7.363 7.363zM99.75 14.96v21a1.75 1.75 0 01-1.75 1.75H52.5a1.75 1.75 0 01-1.75-1.75v-21c0-.966.784-1.75 1.75-1.75H98c.966 0 1.75.784 1.75 1.75zM13.638 51.35a1.965 1.965 0 01-2.776 0 1.969 1.969 0 010-2.775L51.275 8.166a1.75 1.75 0 012.46 0l1.546 1.545H52.5a5.25 5.25 0 00-5.25 5.25v2.776L13.638 51.349zM47.25 22.686V35.96c0 2.9 2.35 5.25 5.25 5.25h23.775l3.5 3.5h-54.55L47.25 22.686zM3.97 97.21a3.488 3.488 0 014.561-1.375 1.75 1.75 0 002.342-2.345 3.46 3.46 0 01-.373-1.53 3.486 3.486 0 016.785-1.142c.23.739.937 1.224 1.71 1.172.086.001.171-.01.255-.03a7.015 7.015 0 016.78 5.25H3.97zm39.78 0v-24.5h17.5v24.5h-17.5zm31.8 0a5.208 5.208 0 014.841-3.5c.06.009.235.029.294.03a1.671 1.671 0 001.435-.653c.348-.433.47-1.004.327-1.541a5.23 5.23 0 01-.197-1.336 5.25 5.25 0 0110.5 0c0 .967.784 1.75 1.75 1.75a7.016 7.016 0 016.78 5.25H75.55z" />
        <Path d="M49 77.961h-3.5v3.5h1.75v3.5H45.5v3.5H49a1.75 1.75 0 001.75-1.75v-7a1.75 1.75 0 00-1.75-1.75zM56 34.211h5.25a5.227 5.227 0 003.885-8.75 5.228 5.228 0 00-3.885-8.75H56a1.75 1.75 0 00-1.75 1.75v14c0 .967.784 1.75 1.75 1.75zm5.25-3.5h-3.5v-3.5h3.5a1.75 1.75 0 010 3.5zm-3.5-10.5h3.5a1.75 1.75 0 010 3.5h-3.5v-3.5zM73.5 34.211h1.75c2.9 0 5.25-2.35 5.25-5.25v-12.25H77v12.25a1.75 1.75 0 01-1.75 1.75H73.5a1.75 1.75 0 01-1.75-1.75v-12.25h-3.5v12.25c0 2.9 2.35 5.25 5.25 5.25zM87.5 34.211H91v-8.265l5-8.333-3-1.803-3.75 6.251-3.75-6.251-3 1.803 5 8.333v8.265z" />
      </G>
      <Defs>
        <ClipPath id="prefix__clip0">
          <Path fill={props.color} d="M0 0h105v105H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default BuySVG