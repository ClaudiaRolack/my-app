import { Text, StyleSheet, Image, Pressable } from "react-native"

export const CategoryItem = ({ name, image, onPress }) => {
    return (
        <Pressable style={styles.category} onPress={onPress} >
             <Image source={image} style={styles.image} />
            <Text style={styles.text}>{name}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    category: {
        backgroundColor: '#fff',
        width: 150,
        height: 170,
        alignItems: 'center',
        justifyContent: 'center', 
    },
    text: {
        textAlign: 'center',
        width: 80,
        fontSize: 12,
    },
    image: {
        width: 100,
        height: 140,
        resizeMode: 'contain',
    }
})