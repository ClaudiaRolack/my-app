import { View, FlatList } from "react-native"
import { dataCategories } from "../data/dataCategories.js"
import { CategoryItem } from "./categoryItem.js"

export const Categories = () => {

    return (
        <View>
            <FlatList
                data={dataCategories}
                //contentContainerStyle={StyleSheet.list}
                horizontal
                renderItem={({ item }) => <CategoryItem name={item.name} image={item.image} />}
            />
        </View>
    )
}