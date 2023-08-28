import {createNativeStackNavigator} from "react-native-screens/native-stack";
import {HomeStackParamList, PlanStackParamList} from "@/types/navigationTypes";
import {CreatePlanScreen, HomeScreen, PlanScreen} from "@/screens";


const Stack = createNativeStackNavigator<PlanStackParamList>();


export const PlanStackNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                navigationBarHidden: true,
            }}
            initialRouteName="PlanScreen"
        >
            <Stack.Screen
                name="PlanScreen"
                component={PlanScreen}
                options={{
                    stackAnimation: "slide_from_bottom"
                }}
            />

            <Stack.Screen
                name="CreatePlanScreen"
                component={CreatePlanScreen}
            />
        </Stack.Navigator>
    )
}
