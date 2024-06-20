import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Welcome } from './src/screens/welcome.js';
import { Home } from './src/screens/home.js';
import { useFonts } from 'expo-font';
import { useCallback } from 'react';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

export default function App() {
  
  const [fontsLoaded, fontError] = useFonts({
    'MajorMonoDisplay': require('./src/assets/fonts/MajorMonoDisplay-Regular.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }
  
  return (
    <>
      <SafeAreaProvider>
           <StatusBar backgroundColor='black' style='dark' />
           {/* <Welcome /> */}
      </SafeAreaProvider>
    </>
  );
}