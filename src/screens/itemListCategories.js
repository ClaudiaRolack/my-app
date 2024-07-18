import { Text, FlatList, StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { dataProducts } from "../data/dataProducts.js";
import { ProductItem } from "../components/productItem.js";
import { SearchInput } from "../components/searchInput.js";
import { useNavigation, useRoute } from "@react-navigation/native";
import { ROUTE } from "../navigator/routes.js";

export const ItemListCategories = () => {
    const { params } = useRoute();
    const { navigate } = useNavigation();
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

    const navigateToItemDetails = productId => navigate(ROUTE.ITEM_DETAIL, { productId });

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
                renderItem={({ item }) => <ProductItem {...item} onPress={() => navigateToItemDetails(item.id)} />}
                keyExtractor={item => item.id.toString()}
                numColumns={2}
                columnWrapperStyle={styles.columnWrapper}
            />
            {productsFiltered.length === 0 ? (<Text>No se ha encontrado "{textToSearch}"</Text>) : null}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    ItemListCategories: {
        gap: 30,
        padding: 16,
    },
    list: {
        alignItems: 'center',
    },
    columnWrapper: {
        justifyContent: 'space-between',
        marginBottom: 10,
        gap: 30,
    },
});
