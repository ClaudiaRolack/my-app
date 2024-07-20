import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Welcome } from "../screens/welcome.js";
import { Home } from "../screens/home.js";
import { ItemListCategories } from "../screens/itemListCategories.js";
import { ItemDetail } from "../screens/itemDetail.js";
import { ROUTE } from "./routes.js";

const { Navigator: StackNavigator, Screen: StackScreen } = createNativeStackNavigator()

export const ShopStack = () => (
    <StackNavigator
        screenOptions={{
            headerShadowVisible: false,
            headerTitleAlign: 'center',
        }}
    >
        <StackScreen
            name={ROUTE.WELCOME}
            component={Welcome}
            options={{ headerShown: false }}
        />
        <StackScreen
            name={ROUTE.HOME}
            component={Home}
            options= {{
                headerTitle: 'Áurea',
                headerTitleStyle: {
                    fontSize: 18,
                    fontFamily: 'MajorMonoDisplay',
                },
                headerBackVisible: false,
            }}
        />
        <StackScreen
            name={ROUTE.ITEM_LIST_CATEGORIES}
            component={ItemListCategories}
            options= {{
                headerShown: true,
                headerTitleStyle: {
                    fontSize: 18,
                },
            }}
        />
        <StackScreen
            name={ROUTE.ITEM_DETAIL}
            component={ItemDetail}
            options= {{
                headerShown: true,
                headerTitleStyle: {
                    fontSize: 20,
                    fontWeight: 'bold',
                },
            }}
        />
    </StackNavigator>
)
