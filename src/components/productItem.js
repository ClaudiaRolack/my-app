import { View, Image, Text, StyleSheet, Pressable } from "react-native";
import { formatPrice } from "../utils/price";

export const ProductItem = ({ image, name, price, onPress }) => (
    <Pressable style={styles.productItem} onPress={onPress} >
        <View style={styles.imageContainer}>
            <Image source={{ uri:image }} style={styles.image} resizeMode="contain" />
        </View>
        <View style={styles.info}>
            <Text style={styles.title}>{name}</Text>
            <Text style={styles.text}>{formatPrice(price)}</Text>
        </View>
    </Pressable>
)

const styles = StyleSheet.create({
    productItem: {
      height: 240,
    },
    imageContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        height: 140,
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
    },
})