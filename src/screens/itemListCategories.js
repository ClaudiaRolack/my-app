import { View, Text, FlatList, StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import { dataProducts } from "../data/dataProducts.js";
import { dataCategories } from "../data/dataCategories.js";
import { ProductItem } from "../components/productItem.js";
import { SearchInput } from "../components/searchInput.js";
import { useNavigation, useRoute } from "@react-navigation/native";
import { ROUTE } from "../navigator/routes.js";

export const ItemListCategories = () => {
    const { params } = useRoute();
    const { navigate, setOptions } = useNavigation();
    const [textToSearch, setTextToSearch] = useState('');
    const [productsFiltered, setProductsFiltered] = useState([]);



    useEffect(() => {
        if (params && params.categoryId) {
            const filteredByCategory = dataProducts.filter(product => product.categoryId === params.categoryId);
            setProductsFiltered(filteredByCategory);
        }
    }, [params]);

    useEffect(() => {
        if (params && params.categoryId) {
            const filteredByCategory = dataProducts.filter(product => product.categoryId === params.categoryId);
            const productsFilteredByText = filteredByCategory.filter(product =>
                product.name.toLowerCase().includes(textToSearch.toLowerCase().trim())
            );
            setProductsFiltered(productsFilteredByText);
        }
    }, [textToSearch, params]);

    useEffect(() => {
        const category = dataCategories.find(category => category.id === params.categoryId);
        const categoryName = category ? category.name : '';
        setOptions({ title: categoryName })
    })

    const navigateToItemDetails = productId => navigate(ROUTE.ITEM_DETAIL, { productId });

    return (
        <View style={styles.ItemListCategories}>
            <SearchInput
                onChangeText={setTextToSearch}
                value={textToSearch}
                placeholder='Buscar aquí...'
            />
            <FlatList
                contentContainerStyle={styles.list}
                data={productsFiltered}
                renderItem={({ item }) => <ProductItem {...item} onPress={() => navigateToItemDetails(item.id)} />}
                keyExtractor={item => item.id.toString()}
                numColumns={2}
                columnWrapperStyle={styles.columnWrapper}
            />
            {productsFiltered.length === 0 ? (<Text>No se ha encontrado "{textToSearch}"</Text>) : null}
        </View>
    );
}

const styles = StyleSheet.create({
    ItemListCategories: {
        gap: 10,
        padding: 16,
        backgroundColor: '#fff',
        flex: 1,
    },
    categoryName: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        padding: 5,
    },
    list: {
        alignItems: 'center',
    },
    columnWrapper: {
        justifyContent: 'space-between',
        gap: 30,
    },
});