import { Text, StyleSheet, Image, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { dataProducts } from "../data/dataProducts";
import { useRoute } from "@react-navigation/native";

export const ItemDetail = () => {
    const { params } = useRoute()

    const { image, name, price } = dataProducts.find(product => product.id === params.productId)

    return (
        <SafeAreaView style={styles.itemDetail}>
            <View>
                <Image source={image} />
                <Text>{name}</Text>
                <Text>${price}</Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    itemDetail: {
        gap: 32,
        padding: 16,
    },
})