import { View, FlatList, StyleSheet } from "react-native";
import { dataProducts } from "../data/dataProducts.js";
import { Card } from "../components/card.js";
import { SafeAreaView } from "react-native-safe-area-context";
import { SearchInput } from "../components/searchInput.js";

export const ItemListCategories = () => {
    const numColumns = 2;

    return (
        <SafeAreaView style={styles.ItemListCategories}>
            <SearchInput />
            <View >
                <FlatList
                    contentContainerStyle={styles.list}
                    data={dataProducts}
                    renderItem={({ item }) => <Card {...item} />}
                    numColumns={numColumns}
                    key={numColumns}
                    columnWrapperStyle={styles.columnWrapper} />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    ItemListCategories: {
        gap: 30,
        padding: 16,
    },
    list: {
        alignItems: 'center'
    },
    columnWrapper: {
        justifyContent: 'space-between',
        marginBottom: 10,
        gap: 30
    }
})