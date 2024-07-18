import { View, Text, StyleSheet } from "react-native"

export const Header = () => (
    <View>
        <Text style={styles.text}>Áurea</Text>
    </View>
)


const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        fontFamily: 'MajorMonoDisplay',
        paddingBottom: 10,
    },
})

