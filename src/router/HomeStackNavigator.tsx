import {createNativeStackNavigator} from "react-native-screens/native-stack";
import {HomeStackParamList} from "@/types/navigationTypes";
import {HomeScreen} from "@/screens";


const Stack = createNativeStackNavigator<HomeStackParamList>();


export const HomeStackNavigator = ()=> {
    return(
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                navigationBarHidden: true,
            }}
            initialRouteName="HomeScreen"
        >
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
        </Stack.Navigator>
    )
}
