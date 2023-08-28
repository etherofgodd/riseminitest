import {createNativeStackNavigator} from "react-native-screens/native-stack";
import {AuthStackParamList} from "@/types/navigationTypes";
import {
    AuthSuccessScreen,
    CreateAccountScreen,
    CreatePinScreen,
    LoginScreen,
    OnboardingScreen,
    RetypeCreatePinScreen,
    TellUsMoreScreen
} from "@/screens";

const Stack = createNativeStackNavigator<AuthStackParamList>();

const AuthNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                navigationBarHidden: true,
            }}
        >
            <Stack.Screen name="OnboardingScreen" component={OnboardingScreen}/>
            <Stack.Screen name="LoginScreen" component={LoginScreen}/>
            <Stack.Screen name="CreateAccountScreen" component={CreateAccountScreen}/>
            <Stack.Screen name="MoreInfoScreen" component={TellUsMoreScreen}/>
            <Stack.Screen
                options={{
                    stackAnimation: "fade"
                }}
                name="AuthSuccessScreen"
                component={AuthSuccessScreen}
            />
            <Stack.Screen
                options={{
                    stackAnimation: "fade"
                }}
                name="CreatePinScreen"
                component={CreatePinScreen}
            />
            <Stack.Screen
                options={{
                    stackAnimation: "fade"
                }}
                name="RetypePinScreen"
                component={RetypeCreatePinScreen}
            />
        </Stack.Navigator>
    );
};


export default AuthNavigator
