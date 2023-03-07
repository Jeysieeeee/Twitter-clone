import * as React from "react"
import Svg, { Path } from "react-native-svg"

interface AppleProps{
    width: number;
    height: number;
}
const AppleIcon = ({width, height} :AppleProps) => (
    <Svg  width={50} height={50}>
    <Path
      style={{
        fill: 'black',
        stroke: "#000",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeMiterlimit: 10,
      }}
      d="M44.529 34.75c-1.081 2.393-1.598 3.464-2.986 5.579-1.94 2.954-4.678 6.64-8.064 6.665-3.012.025-3.789-1.965-7.876-1.932-4.087.02-4.939 1.969-7.954 1.938-3.386-.031-5.978-3.352-7.92-6.3C4.3 32.429 3.727 22.736 7.082 17.579c2.374-3.657 6.13-5.805 9.657-5.805 3.592 0 5.85 1.974 8.82 1.974 2.882 0 4.637-1.979 8.791-1.979 3.142 0 6.464 1.712 8.838 4.666-7.766 4.255-6.504 15.347 1.341 18.315zM31.197 8.468c1.511-1.94 2.657-4.677 2.242-7.468-2.466.168-5.349 1.743-7.034 3.782-1.526 1.857-2.791 4.615-2.298 7.283 2.69.087 5.474-1.517 7.09-3.597z"
    />
  </Svg>
)

export default AppleIcon
