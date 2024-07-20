import { SafeAreaProvider } from "react-native-safe-area-context";
import { useEffect } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { Navigator } from "./src/navigator/navigator.js";

SplashScreen.preventAutoHideAsync();

export default function App() {

  const [fontsLoaded, fontError] = useFonts({
    'MajorMonoDisplay': require('./src/assets/fonts/MajorMonoDisplay-Regular.ttf'),
  });

  useEffect(() => {
    const onLayoutRootView = async () => {
      if (fontsLoaded || fontError) {
        await SplashScreen.hideAsync()
      }
    }
    onLayoutRootView()
  }, [fontsLoaded, fontError])

  if (!fontsLoaded && !fontError) return null;

  return (
    <>
      <SafeAreaProvider>
        <Navigator />
      </SafeAreaProvider>
    </>
  );
}