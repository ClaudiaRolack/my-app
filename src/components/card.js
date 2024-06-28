import { View, Image, Text, StyleSheet } from "react-native";

export const Card = ({ image, category, name, price }) => (
    <View style={styles.card}>
        <View style={styles.imageContainer}>
            <Image source={image} style={styles.image} resizeMode="contain" />
        </View>
        <View style={styles.info}>
            <Text style={styles.title}>{name}</Text>
            <Text style={styles.text}>{category}</Text>
            <Text style={styles.text}>${price}</Text>
        </View>
    </View>
)

const styles = StyleSheet.create({
    card: {
      height: 240,
    },
    imageContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        height: 130,
        width: 130,
    },
    info: {
        gap: 4,
        paddingHorizontal: 16,
    },
    title: {
        fontWeight: 'bold',
    },
    text: {
        fontSize: 14,
    }
})