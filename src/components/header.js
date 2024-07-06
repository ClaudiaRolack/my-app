import { View, Text, StyleSheet } from "react-native"

export const Header = () => {

    return(
        <View>
            <Text style={styles.text}>Áurea</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        fontFamily: 'MajorMonoDisplay',
    },
})

