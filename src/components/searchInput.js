import { View, TextInput, StyleSheet } from "react-native"
import { colors } from "../config/colors"
import { SearchIcon } from "../icons/searchIcon"


export const SearchInput = props => (

    <View style={styles.searchInput}>
        <SearchIcon />
        <TextInput {...props} />
    </View>
)

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