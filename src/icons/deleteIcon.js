import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { colors } from "../config/colors"

export const DeleteIcon = (props) => (
  <Svg
    width={24}
    height={24}
    fill={colors.mossgreen}
    viewBox="0 -960 960 960"
    {...props}
  >
    <Path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
  </Svg>
)
