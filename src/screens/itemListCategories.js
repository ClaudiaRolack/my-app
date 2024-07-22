import { View, Text, FlatList, StyleSheet, ActivityIndicator } from "react-native";
import { useEffect, useState, useCallback } from "react";
import { ProductItem } from "../components/productItem.js";
import { SearchInput } from "../components/searchInput.js";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { ROUTE } from "../navigator/routes.js";
import { useSelector } from "react-redux";
import { useGetProductsByCategoryQuery } from "../services/shopService.js";
import { colors } from "../config/colors.js";

export const ItemListCategories = () => {
    const { navigate, setOptions } = useNavigation()
    const [textToSearch, setTextToSearch] = useState('')
    const categorySelected = useSelector(state => state.shop.categorySelected)
    const dataCategories = useSelector(state => state.shop.dataCategories)
    const { data: products, isLoading } = useGetProductsByCategoryQuery(categorySelected)
    const [productsFiltered, setProductsFiltered] = useState([])

    const navigateToItemDetails = productId => navigate(ROUTE.ITEM_DETAIL, { productId })

    useEffect(() => setProductsFiltered(products), [products])

    const handleSearch = textToSearch => {
        if (!textToSearch) return
        setTextToSearch(textToSearch)
        const filteredProducts = products.filter(product =>
            product.name.toLowerCase().includes(textToSearch.toLowerCase().trim())
        );
        setProductsFiltered(filteredProducts)
    };

    useEffect(() => setProductsFiltered(products), [products])

    useFocusEffect(
        useCallback(() => {
            if (!products || !categorySelected) return
            const selectedCategory = dataCategories.find(cat => cat.id === categorySelected)
            const categoryName = selectedCategory ? selectedCategory.name : ''
            setOptions({ title: categoryName })
        }, [products, setOptions])
    );

    if (isLoading) return <View style={styles.listLoading}>
        <ActivityIndicator size='small' color={colors.mossgreen} />
        <Text>Cargando categorías . . .</Text>
    </View>

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
            {productsFiltered && productsFiltered.length === 0  ? (<Text>No se ha encontrado "{textToSearch}"</Text>) : null}
        </View>
    )
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
    listLoading: {
        flexDirection: 'row',
        alignItems: 'center',
    },
})