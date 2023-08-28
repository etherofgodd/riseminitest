import 'react-native-gesture-handler';
import Router from "./src/router/router";
import {useFonts} from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import {useCallback, useState} from "react";
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/es/integration/react";
import {persistor, store} from "./src/store";
import {View} from "react-native";
import AppMessagePopUp from "./src/components/AppMessage";
import {SafeAreaProvider} from "react-native-safe-area-context";
import {IUser} from "./src/types/IUser";
import AuthContext from "./src/store/AuthContext";


export default function App() {
    const [user, setUser] = useState<IUser | null>(null);

    const [fontsLoaded] = useFonts({
        'Grotesque-Regular': require('./assets/fonts/BricolageGrotesque-Regular.ttf'),
        'Grotesque-Bold': require('./assets/fonts/BricolageGrotesque-Bold.ttf'),
        'Grotesque-Medium': require('./assets/fonts/BricolageGrotesque-Medium.ttf'),
        'Grotesque-Light': require('./assets/fonts/BricolageGrotesque-Light.ttf'),
        'Grotesque-ExtraBold': require('./assets/fonts/BricolageGrotesque-ExtraBold.ttf'),
        'Grotesque-ExtraLight': require('./assets/fonts/BricolageGrotesque-ExtraLight.ttf'),
        'Grotesque-SemiBold': require('./assets/fonts/BricolageGrotesque-SemiBold.ttf'),
    });

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return null;
    }

    return (
        <SafeAreaProvider>
            <Provider
                store={store}
            >
                <AuthContext.Provider value={{user, setUser}}>
                    <PersistGate loading={<View onLayout={onLayoutRootView}></View>} persistor={persistor}>
                        <Router/>
                        <AppMessagePopUp/>
                    </PersistGate>
                </AuthContext.Provider>
            </Provider>
        </SafeAreaProvider>

    );
}
