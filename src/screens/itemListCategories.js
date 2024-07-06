import { Text, FlatList, StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { dataProducts } from "../data/dataProducts.js";
import { ProductItem } from "../components/productItem.js";
import { SearchInput } from "../components/searchInput.js";


export const ItemListCategories = () => {
    const [textToSearch, setTextToSearch] = useState('')
    const [productsFiltered, setProductsFiltered] = useState(dataProducts)

    useEffect(() => {
        const productsFiltered = dataProducts.filter(product => product.name.toLowerCase().includes(textToSearch.toLowerCase().trim()))
        setProductsFiltered(productsFiltered)
    }, [textToSearch])

    return (
        <SafeAreaView style={styles.ItemListCategories}>
            <SearchInput
                onChangeText={setTextToSearch}
                value={textToSearch}
                placeholder='Buscar aquí...'
            />
            <FlatList
                contentContainerStyle={styles.list}
                data={productsFiltered}
                renderItem={({ item }) => <ProductItem {...item} />}
                key={item => item.id}
                numColumns={2}
                columnWrapperStyle={styles.columnWrapper}
            />
            { productsFiltered.length === 0 ? (<Text>No se ha encontrado "{textToSearch}"</Text>) : null }

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