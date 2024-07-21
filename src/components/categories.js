import { View, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { CategoryItem } from "../components/categoryItem.js";
import { ROUTE } from "../navigator/routes.js";
import { useDispatch, useSelector } from "react-redux";
import { setCategorySelected } from "../features/shop/shopSlice.js";

export const Categories = () => {
    const { navigate } = useNavigation() 
    const categories = useSelector((state) => state.shop.dataCategories)
    const dispatch = useDispatch()

    const handlePress = categoryId => {
        dispatch(setCategorySelected(categoryId.id))
        navigate(ROUTE.ITEM_LIST_CATEGORIES)
    }

    return (
        <View>
            <FlatList
                data={categories}
                horizontal
                renderItem={({ item }) => <CategoryItem name={item.name} image={item.image} onPress={() => handlePress(item)} />}
                keyExtractor={item => item.id.toString()}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}