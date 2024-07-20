import { Text, StyleSheet, Image, View } from "react-native";
import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { dataProducts } from "../data/dataProducts";
import { useRoute } from "@react-navigation/native";
import { formatPrice } from "../utils/price.js";


export const ItemDetail = () => {
    const { params } = useRoute()
    const { setOptions } = useNavigation();

    const { image, name, price } = dataProducts.find(product => product.id === params.productId)

    useEffect(() => {
        setOptions({ title: name })
    })

    return (
        <View style={styles.itemDetail}>
            <View>
                <View style={styles.imageContainer}>
                    <Image source={image} style={styles.image} resizeMode="contain" />
                </View>
                <View style={styles.info}>
                    <Text style={styles.text}>{formatPrice(price)}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    itemDetail: {
        gap: 32,
        padding: 16,
        backgroundColor: '#fff',
        flex: 1,
    },
    imageContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        height: 250,
        width: 200,
    },
    info: {
        gap: 8,
        paddingHorizontal: 16,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 22,
    },
    text: {
        fontSize: 17,
    }
})