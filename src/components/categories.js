import { View, Text, FlatList, StyleSheet, ActivityIndicator } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { CategoryItem } from "../components/categoryItem.js";
import { ROUTE } from "../navigator/routes.js";
import { useDispatch, useSelector } from "react-redux";
import { setCategorySelected } from "../features/shop/shopSlice.js";
import { useGetCategoriesQuery } from "../services/shopService.js";
import { colors } from "../config/colors.js";

export const Categories = () => {
    const { navigate } = useNavigation()
    const { data, isLoading } = useGetCategoriesQuery()
    const dispatch = useDispatch()

    const handlePress = categoryId => {
        dispatch(setCategorySelected(categoryId.id))
        navigate(ROUTE.ITEM_LIST_CATEGORIES)
    }

    return (
        <View>
            {isLoading ? (
                <View style={styles.categories}>
                    <ActivityIndicator size='small' color={colors.mossgreen} />
                    <Text>Cargando categorías . . .</Text>
                </View>
            ) : (
                <FlatList
                    data={data}
                    horizontal
                    renderItem={({ item }) => <CategoryItem name={item.name} image={{ uri: item.image }} onPress={() => handlePress(item)} />}
                    keyExtractor={item => item.id.toString()}
                    showsHorizontalScrollIndicator={false}
                />
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    categories: {
        flexDirection: 'row',
        gap: 8,
        alignItems: 'center',
    },
}) 