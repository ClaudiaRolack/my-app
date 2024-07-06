import { StatusBar } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Welcome } from "./src/screens/welcome.js";
import { Home } from "./src/screens/home.js";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
import { ItemListCategories } from "./src/screens/itemListCategories.js";

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
        <StatusBar backgroundColor='white' style='dark' />
        <Home />
      </SafeAreaProvider>
    </>
  );
}