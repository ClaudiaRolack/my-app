import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ShopStack } from "./shopStack.js";
import { CartStack } from "./cartStack.js";
import { OrdersStack } from "./ordersStack.js";
import { ShopIcon } from "../icons/shopIcon.js";
import { CartIcon } from "../icons/cartIcon.js";
import { OrdersIcon } from "../icons/ordersIcon.js";
import { colors } from "../config/colors.js";

const { Navigator: TabNavigator, Screen: TabScreen } = createBottomTabNavigator()

export const Navigator = () => (
    <NavigationContainer>
        <TabNavigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: colors.mossgreen,
            }}
        >
            <TabScreen
                name='ShopTab'
                component={ShopStack}
                options={{
                    title: 'Tienda',
                    tabBarIcon: ({ color }) => <ShopIcon fill={color} />,
                }}
            />
            <TabScreen
                name='CartTab'
                component={CartStack}
                options={{
                    title: 'Carrito',
                    tabBarIcon: ({ color }) => <CartIcon fill={color} />,
                }}
            />
                        <TabScreen
                name='Orderstab'
                component={OrdersStack}
                options={{
                    title: 'Ordenes',
                    tabBarIcon: ({ color }) => <OrdersIcon fill={color} />,
                }}
            />
        </TabNavigator>
    </NavigationContainer >
)