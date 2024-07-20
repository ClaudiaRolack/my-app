import { View, StyleSheet, Text, TextInput, Pressable } from "react-native";
import { Categories } from "../components/categories.js";
import { Banner } from "../components/banner.js";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount, reset } from "../features/counter/counterSlice.js";

export const Home = () => {

    const [quantity, serQuantity] = useState(0)

    const count = useSelector(state => state.counter.value)

    const dispatch = useDispatch({ decrement })

    const handleDecrement = () => {
        dispatch(decrement())
    } 

    const handleIncrement = () => {
        dispatch(increment())
    }

    const handleIncrementByAmount = () => {
        dispatch(incrementByAmount(quantity))
    }

    const handleReset = () => {
        dispatch(reset())
    }

    return (
        <View style={styles.home}>
            <Banner />
            <Text style={styles.title}>Categorías</Text>
            <Categories />
            <View>
                <View style={styles.row}>
                    <Pressable onPress={ handleDecrement }>
                        <Text>
                            -
                        </Text>
                    </Pressable>
                    <Text>
                        {count}
                    </Text>
                    <Pressable onPress={ handleIncrement }>
                        <Text>
                            +
                        </Text>
                    </Pressable>
                </View>
                <View>
                    <TextInput
                        style={styles.input}
                        onChangeText={text => serQuantity(Number(text))}
                        value={quantity}
                        inputMode='numeric'
                    />
                    <Pressable onPress={handleIncrementByAmount}>
                        <Text>
                            Add
                        </Text>
                    </Pressable>
                </View>
                <Pressable onPress={handleReset}>
                    <Text>
                        Reset
                    </Text>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    home: {
        backgroundColor: '#fff',
        flex: 1,
        paddingHorizontal: 16,
        paddingVertical: 5,
        gap: 10,
    },
    title: {
        fontSize: 18,
        padding: 10,
    },
    row: {
        flexDirection: 'row',
    },
    input: {
        width: 160,
        height: 40, 
        borderColor: 'gray', 
        borderWidth: 1
    },
})
