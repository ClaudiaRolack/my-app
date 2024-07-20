import { View, Text, FlatList, StyleSheet } from "react-native";
import { dataCart } from "../data/dataCart.js";
import { CartItem } from "../components/cartItem";
import { formatPrice } from "../utils/price.js";
import { useState } from "react";

export const Cart = () => {

    const [cart, setCart] = useState(dataCart)

    const totalPrice = cart.reduce((acc, { price, quantity }) => { return acc + quantity * price }, 0)

    const handleDelete = (id) => {
        setCart(cart.filter((item) => item.id !== id))
    }

    return (
        <View style={styles.cart} >
            <FlatList
                data={cart}
                renderItem={({ item }) => <CartItem {...item} onDelete={handleDelete} />}
                contentContainerStyle={{ gap: 32 }}
                ListEmptyComponent= {
                    <View style={styles.vacioContainer}>
                        <Text style={styles.vacio}>Tu carrito esta vacío</Text>
                    </View>
                }
            />
            <View style={styles.total}>
                <Text style={styles.totalText}>Total:</Text>
                <Text style={styles.totalText}>{formatPrice(totalPrice)}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cart: {
        minHeight: '100%',
        backgroundColor: '#fff',
    },
    total: {
        flexDirection: 'row',
        paddingLeft: 50,
        paddingBottom: 30,
    },
    totalText: {
        fontSize: 18,
        fontWeight: 'bold',
        padding: 10,
    },
    vacioContainer: {
        height: 300,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    vacio: {
        padding: 16,
        fontSize: 30,
        fontWeight: 'bold',
    },
})