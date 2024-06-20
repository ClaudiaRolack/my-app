import { SafeAreaView } from 'react-native-safe-area-context'
import { StyleSheet, View, Text } from 'react-native'
import { Button } from '../components/buttonWelcome.js'

export const Welcome = () => {

  const handlePress = () => {
    console.log('Ingresar');
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.text}>Áurea</Text>
      </View>
      <Button onPress={handlePress}>Ingresar</Button>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#6D7A71',
    flex: 1,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 32,
  },
  container: {
    alignItems: 'center',
    gap: 5,
  },
  text: {
    color: '#fff',
    fontSize: 80,
    fontFamily: 'MajorMonoDisplay'
  },
})