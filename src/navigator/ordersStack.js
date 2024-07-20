import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ROUTE } from "./routes.js";
import { Orders } from "../screens/orders.js";

const { Navigator: StackNavigator, Screen: StackScreen } = createNativeStackNavigator()

export const OrdersStack = () => {

    return (
        <StackNavigator
            screenOptions={{
                headerShadowVisible: false,
                headerTitleAlign: 'center',
            }}
        >
            <StackScreen
                name={ROUTE.ORDERS}
                component={Orders}
                options= {{
                    headerTitle: 'Ordenes',
                }}
            />
        </StackNavigator>
    )
}