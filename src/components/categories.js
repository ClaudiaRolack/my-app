import { View, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { dataCategories } from "../data/dataCategories.js";
import { CategoryItem } from "../components/categoryItem.js";
import { ROUTE } from "../navigator/routes.js";

export const Categories = () => {
    const { navigate } = useNavigation() 

    return (
        <View>
            <FlatList
                data={dataCategories}
                horizontal
                renderItem={({ item }) => <CategoryItem name={item.name} image={item.image} onPress={() => navigate(ROUTE.ITEM_LIST_CATEGORIES, { categoryId: item.id })} />}
                keyExtractor={item => item.id.toString()}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}