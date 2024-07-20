import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import { formatPrice } from "../utils/price";
import { DeleteIcon } from "../icons/deleteIcon.js";

export const CartItem = ({ id, image, name, quantity, price, onDelete }) => {
    return (
        <View style={styles.cartItem} >
            <Image style={styles.image} source={image} resizeMode="contain" />
            <View style={styles.info} >
                <Text>{name}</Text>
                <Text>Cantidad: {quantity}</Text>
                <Text>Precio: {formatPrice(price)}</Text>
            </View>
            <Pressable style={styles.delete} onPress={() => onDelete(id)}>
                <DeleteIcon />
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    cartItem: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        padding: 13,
    },
    image: {
        height: 96,
        width: 120,
    },
    info: {
        gap: 10,
    },
    delete: {
        width: 24,
        borderRadius: 100,
    },
})