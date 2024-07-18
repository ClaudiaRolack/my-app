import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "../screens/home.js";
import { ItemDetail } from "../screens/itemDetail";
import { ItemListCategories } from "../screens/itemListCategories";
import { Welcome } from "../screens/welcome";
import { ROUTE } from "./routes.js";



const { Navigator: StackNavigator, Screen: StackScreen } = createNativeStackNavigator()

const { Navigator: TabNavigator, Screen: TabScreen } = createBottomTabNavigator()

export const Navigator = () => (
    <NavigationContainer>
        <StackNavigator>
        <StackScreen name={ROUTE.WELCOME} component={Welcome} options={{ headerShown: false }} />
        <StackScreen name={ROUTE.HOME} component={Home} />
        <StackScreen name={ROUTE.ITEM_LIST_CATEGORIES} component={ItemListCategories} />
        <StackScreen name={ROUTE.ITEM_DETAIL} component={ItemDetail} />
    </StackNavigator>
        {/* <TabNavigator>
            <TabScreen name='Home' component={Home} />
            <TabScreen name='Productos' component={ItemListCategories} />
            <TabScreen name='Favoritos' component={Home} />
        </TabNavigator> */}
    </NavigationContainer >
)