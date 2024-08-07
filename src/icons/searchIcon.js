import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { colors } from "../config/colors.js"

export const SearchIcon = (props) => (
    <Svg
        width={25}
        height={25}
        viewBox="0 0 256 256"
    >
        <Path
            fill={colors.gray}
            strokeMiterlimit={10}
            d="M21 3C11.6 3 4 10.6 4 20s7.6 17 17 17c3.355 0 6.471-.98 9.104-2.652L42.379 46.62l4.242-4.242-12.098-12.1A16.912 16.912 0 0 0 38 20c0-9.4-7.6-17-17-17zm0 4c7.2 0 13 5.8 13 13s-5.8 13-13 13S8 27.2 8 20 13.8 7 21 7z"
            fontFamily="none"
            fontSize="none"
            fontWeight="none"
            style={{
                mixBlendMode: "normal",
            }}
            textAnchor="none"
            transform="scale(5.12)"
        />
    </Svg>
)

