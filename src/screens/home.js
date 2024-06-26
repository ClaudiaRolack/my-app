import { SafeAreaView } from 'react-native-safe-area-context'
import { StyleSheet, Text } from 'react-native'
import { Categories } from '../components/categories.js'
import { Header } from '../components/header.js' 

export const Home = () => {

    return (
        <SafeAreaView style={styles.safeArea}>
            <Header />
            <Text style={styles.title}>Categorías</Text>
            <Categories />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    safeArea: {
        backgroundColor: '#fff',
        flex: 1,
        padding: 16,
        gap: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
})
