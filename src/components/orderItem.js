import { View, Text, StyleSheet } from "react-native";
import { formatPrice } from "../utils/price";
import { formatDate } from "../utils/date";

export const OrderItem = ({ createdAt, totalPrice }) => {
    return (
        <View style={styles.OrderItem}>
            <Text>{formatDate(createdAt)}</Text>
            <Text>{formatPrice(totalPrice)}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    OrderItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 16,
    },
})