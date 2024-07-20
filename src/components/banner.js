import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { banner1 } from '../assets/images/index';

export const Banner = () => (
    <ImageBackground
        source={banner1}
        resizeMode='cover'
        style={styles.image}
    >
        <View style={styles.banner}>
            <Text style={styles.text}>Vive más</Text>
        </View>
    </ImageBackground>
);

const styles = StyleSheet.create({
    banner: {
        borderRadius: 15,
        paddingHorizontal: 20,
        paddingTop: 130,
        paddingBottom: 20,
        width: '100%',
    },
    text: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
    },
    image: {
        borderRadius: 16,
        overflow: 'hidden',
        padding: 16,
    },
})

