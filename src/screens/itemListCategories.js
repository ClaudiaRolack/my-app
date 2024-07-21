import { View, Text, FlatList, StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import { ProductItem } from "../components/productItem.js";
import { SearchInput } from "../components/searchInput.js";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { ROUTE } from "../navigator/routes.js";
import { useSelector } from "react-redux";

export const ItemListCategories = () => {
    const { navigate, setOptions } = useNavigation();
    const [textToSearch, setTextToSearch] = useState('');
    const products = useSelector(state => state.shop.productsFilteredByCategory);
    const category = useSelector(state => state.shop.dataCategories);
    const categorySelected = useSelector(state => state.shop.categorySelected);
    const [productsFiltered, setProductsFiltered] = useState(products);

    const navigateToItemDetails = productId => navigate(ROUTE.ITEM_DETAIL, { productId });

    const handleSearch = textToSearch => {
        setTextToSearch(textToSearch);
        const filteredProducts = products.filter(product =>
            product.name.toLowerCase().includes(textToSearch.toLowerCase().trim())
        );
        setProductsFiltered(filteredProducts);
    };

    useEffect(() => setProductsFiltered(products), [products]);

    useFocusEffect(() => {
        const selectedCategory = category.find(cat => cat.id === categorySelected);
        const categoryName = selectedCategory ? selectedCategory.name : '';
        setOptions({ title: categoryName });
    }, [categorySelected, category, setOptions]);

    return (
        <View style={styles.ItemListCategories}>
            <SearchInput
                onChangeText={handleSearch}
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
    list: {
        alignItems: 'center',
    },
    columnWrapper: {
        justifyContent: 'space-between',
        gap: 30,
    },
});
