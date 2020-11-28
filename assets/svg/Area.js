import * as React from "react"
import Svg, { Path } from "react-native-svg"

function AreaSVG(props) {
  return (
    <Svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M9.803 14.952c-.16-.033-.908.096-1.621-.289a.293.293 0 00-.279.516c.061.033.122.063.183.09-.598.262-1.08.736-1.363 1.437-.267-.655-.726-1.154-1.363-1.438.65-.29 1.101-.797 1.363-1.438.056.139.108.235.11.239a.293.293 0 00.522-.267c-.001-.003-.356-.651-.314-1.513a.319.319 0 00-.262-.354.323.323 0 00-.372.246c-.02.091.131 1.674-1.017 2.408-.748.476-1.597.328-1.755.364-.334.076-.334.554 0 .63.157.035 1.022-.113 1.77.374 1.11.724.988 2.264.995 2.333 0 .361.516.443.63.09.039-.12-.123-1.648.973-2.398.722-.495 1.618-.376 1.773-.394.357-.04.389-.56.027-.636zM19.686 9.235c-.536-.059-4.354.477-6.023-3.026-.877-1.843-.652-3.514-.7-3.724a.36.36 0 00-.391-.28.357.357 0 00-.324.345v.76c-.132 2.615-1.321 4.84-3.82 5.623-1.442.452-2.694.257-2.928.308-.374.085-.377.623.004.708.327.07 2.787-.33 4.697 1.257a.293.293 0 00.374-.451c-.655-.544-1.44-.933-2.34-1.16 2.367-.595 3.819-2.284 4.375-4.65C13.16 7.296 14.6 9 16.993 9.593c-2.368.593-3.84 2.28-4.387 4.64-.203-.865-.543-1.693-1.053-2.415a.293.293 0 00-.478.337c.18.255.341.533.48.826.829 1.739.682 3.508.694 3.678.031.436.742.458.72-.08-.04-.972.035-4.264 2.694-5.825 1.793-1.053 3.79-.746 4.055-.806.402-.09.358-.669-.032-.713zM6.419 4.416c-.199-.042-1.763.235-2.462-1.174-.328-.662-.305-1.397-.3-1.49a.323.323 0 00-.634-.108c-.021.092.13 1.674-1.018 2.408-.721.46-1.563.342-1.722.36-.356.04-.385.554-.032.635.17.038 1.017-.116 1.769.374.801.522.968 1.48.995 2.01.004.304-.01.339.015.413a.324.324 0 00.308.226c.16 0 .291-.119.317-.265.018-.1-.06-.862.311-1.6a.293.293 0 00-.524-.263c-.037.074-.071.15-.103.229-.267-.656-.726-1.155-1.364-1.44.65-.29 1.102-.796 1.364-1.437.261.646.71 1.15 1.362 1.439a2.68 2.68 0 00-.191.093.293.293 0 10.279.516c.691-.374 1.447-.272 1.603-.29.358-.04.386-.56.027-.636z"
        fill="#898881"
      />
    </Svg>
  )
}

export default AreaSVG