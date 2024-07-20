import { View, Text, FlatList, StyleSheet } from "react-native";
import { dataOrders } from "../data/dataOrders.js";
import { OrderItem } from "../components/orderItem.js";

export const Orders = () => {
    return (
        <View style={styles.orders}>
            <FlatList
                data={dataOrders}
                renderItem={({ item }) => <OrderItem {...item} />}
                contentContainerStyle={styles.list}
                ListEmptyComponent= {
                    <View style={styles.vacioContainer}>
                        <Text style={styles.vacio}>No tienes ordenes</Text>
                    </View>
                }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    orders:{
        backgroundColor: '#fff',
        minHeight: '100%',
    },
    lis: {
        gap: 32,
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