import * as React from "react"
import Svg, { Path } from "react-native-svg"

export const OrdersIcon = (props) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    viewBox="0 -960 960 960"
    {...props}
  >
    <Path d="M160-160v-516L82-846l72-34 94 202h464l94-202 72 34-78 170v516H160Zm240-280h160q17 0 28.5-11.5T600-480q0-17-11.5-28.5T560-520H400q-17 0-28.5 11.5T360-480q0 17 11.5 28.5T400-440ZM240-240h480v-358H240v358Zm0 0v-358 358Z" />
  </Svg>
)
