import { View ,StyleSheet, Text } from "react-native";
import { Categories } from "../components/categories.js";
import { Header } from "../components/header.js";
import { Banner } from "../components/banner.js";

export const Home = () => {

    return (
        <View style={styles.home}>
            <Banner />
            <Text style={styles.title}>Categorías</Text>
            <Categories />
        </View>
    )
}

const styles = StyleSheet.create({
    home: {
        backgroundColor: '#fff',
        flex: 1,
        paddingHorizontal: 16,
        paddingVertical: 5,
        gap: 10,
    },
    title: {
        fontSize: 18,
        padding: 10,
    },
})
