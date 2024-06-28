import { View, TextInput, StyleSheet } from "react-native"
import { SearchIcon } from "../icons/searchIcon"
import { colors } from "../config/colors"

export const SearchInput = () => {

    return (
        <View style={styles.searchInput}>
            <SearchIcon />
            <TextInput placeholder="Buscar aquí..." />
        </View>

    )
}

const styles = StyleSheet.create({
    searchInput: {
        flexDirection: 'row',
        borderWidth: 2,
        borderRadius: 8,
        borderColor: colors.gray,
        paddingHorizontal: 16,
        paddingVertical: 4,
        gap: 8,
    },
})