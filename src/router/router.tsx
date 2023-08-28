import {NavigationContainer, NavigationContainerRef} from "@react-navigation/native";
import AuthNavigator from "@/router/AuthNavigator";
import {Ref, useContext, useRef, useState} from "react";
import AuthContext from "@/store/AuthContext";
import MainScreenNavigator from "@/router/MainScreenNavigator";


export default function Router() {
    const {user} = useContext(AuthContext);
    const [routeName, setRouteName] = useState<string>();

    const ref = useRef<NavigationContainerRef | null>(null)


    function userAuthenticated() {
        if (!user) return false;
        const now = Math.floor(Date.now() / 1000);
        return !((now >= user.exp));
    }


    return (
        <NavigationContainer
            ref={ref}
            onReady={() => {
                setRouteName(ref.current?.getCurrentRoute()?.name)
            }}

            onStateChange={() => {
                setRouteName(ref.current?.getCurrentRoute()?.name)
            }}
        >
            {
                true ? (
                    <MainScreenNavigator
                        routeName={routeName}
                    />
                ) : (
                    <AuthNavigator/>
                )
            }

        </NavigationContainer>
    )
}
