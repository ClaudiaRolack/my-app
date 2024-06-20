import { Pressable, Text, StyleSheet } from "react-native"

export const Button = ({onPress, children}) => {

    return (
        <Pressable onPress={onPress}>
            <Text style={styles.button}>{children}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#EFEADD',
        borderRadius: 12,
        padding: 7,
        color: '#6D7A71',
        fontWeight: 'bold',
    },
})