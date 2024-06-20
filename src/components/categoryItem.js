import { View, Text, StyleSheet, Image } from "react-native"

export const CategoryItem = ({ name, image }) => {
    return (
        <View style={styles.category}>
             <Image source={image} style={styles.image} />
            <Text style={styles.text}>{name}</Text>
        </View>
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
        color: '#6D7A71',
        fontWeight: 'bold',
        textAlign: 'center',
        width: 80,
    },
    image: {
        width: 100,
        height: 140,
    }
})