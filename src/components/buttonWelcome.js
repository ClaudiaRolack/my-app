import { Pressable, Text, StyleSheet } from "react-native"
import { colors } from "../config/colors"

export const Button = ({onPress, children}) => {

    return (
        <Pressable onPress={onPress}>
            <Text style={styles.button}>{children}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.beige,
        borderRadius: 12,
        padding: 7,
        color: colors.mossgreen,
        fontWeight: 'bold',
    },
})