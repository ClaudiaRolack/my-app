import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Cart } from "../screens/cart.js";
import { ROUTE } from "./routes.js";


const { Navigator: StackNavigator, Screen: StackScreen } = createNativeStackNavigator()

export const CartStack = () => {

    return (
        <StackNavigator
            screenOptions={{
                headerShadowVisible: false,
                headerTitleAlign: 'center',
            }}
        >
            <StackScreen
                name={ROUTE.CART}
                component={Cart}
                options= {{
                    headerTitle: 'Carrito',
                }}
            />
        </StackNavigator>
    )
}