import { View, Image, StyleSheet } from 'react-native';
import { banner1 } from '../assets/images/index';

export const Banner = () => (
    <View>
        <Image source={banner1} style={styles.image} />
    </View>
);

const styles = StyleSheet.create({
    image: {
        width: 380,
        height: 300,
        resizeMode: 'contain',
    }
})

