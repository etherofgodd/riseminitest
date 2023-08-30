import {createNativeStackNavigator} from "react-native-screens/native-stack";
import {HomeStackParamList, PlanStackParamList} from "@/types/navigationTypes";
import {
    CreatePlanScreen,
    HomeScreen,
    MainPlanScreen,
    PlanIdScreen,
    PlanScreen,
    PreviewScreen,
    SuccessScreen
} from "@/screens";


const Stack = createNativeStackNavigator<PlanStackParamList>();


export const PlanStackNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                navigationBarHidden: true,
            }}
            initialRouteName="MainPlanScreen"
        >
            <Stack.Screen
                name="MainPlanScreen"
                component={MainPlanScreen}
            />

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

            <Stack.Screen
                name="PreviewScreen"
                component={PreviewScreen}
            />

            <Stack.Screen
                name="SuccessScreen"
                component={SuccessScreen}
            />

            <Stack.Screen
                name="PlanIdScreen"
                component={PlanIdScreen}
            />

        </Stack.Navigator>
    )
}
