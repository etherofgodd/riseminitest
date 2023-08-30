import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {AppTabParamList} from "@/types/navigationTypes";
import {HomeScreen, PlanScreen} from "@/screens";
import {heightPixel} from "@/utils/normalize";
import colors from "@/utils/colors";
import {AccountTab, FeedTab, HomeTab, PlansTab, WalletTab} from "@/components/Tabbars";
import {HomeStackNavigator} from "@/router/HomeStackNavigator";
import {PlanStackNavigator} from "@/router/PlanStackNavigator";

interface Props {
    routeName?: string
}

const Tab = createBottomTabNavigator<AppTabParamList>();

const MainScreenNavigator = ({routeName}: Props) => {
    const homeFilter = routeName === "HomeScreen";
    const planFilter = routeName === "MainPlanScreen";
    const walletFilter = routeName === "Wallet";
    const feedFilter = routeName === "Feed";
    const accountFilter = routeName === "Account";

    return (
        <Tab.Navigator
            screenOptions={{
                tabBarHideOnKeyboard: true,
                headerShown: false,
                tabBarStyle: {
                    height: heightPixel(90),
                },
                tabBarShowLabel: false,
                tabBarInactiveTintColor: colors.neutral,
                tabBarLabelPosition: "below-icon",
            }}
        >
            <Tab.Screen
                name={"Home"}
                component={HomeStackNavigator}
                options={{
                    tabBarIcon: ({size, focused, color}) =>
                        <HomeTab
                            label={"Home"}
                            color={colors.teal}
                            size={size}
                            focused={focused}
                        />,
                    tabBarStyle: {
                        height: heightPixel(90),
                        display: homeFilter ? "flex" : "none",
                    },
                    unmountOnBlur: false
                }}
            />

            <Tab.Screen
                name={"Plans"}
                component={PlanStackNavigator}
                options={{
                    tabBarIcon: ({size, focused, color}) =>
                        <PlansTab
                            label={"Plans"}
                            color={colors.teal}
                            size={size}
                            focused={focused}
                        />,
                    tabBarStyle: {
                        height: heightPixel(90),
                        display: planFilter ? "flex" : "none",
                    },
                    unmountOnBlur: false
                }}
            />

            <Tab.Screen
                name={"Wallet"}
                component={PlanScreen}
                options={{
                    tabBarIcon: ({size, focused, color}) =>
                        <WalletTab
                            label={"Wallet"}
                            color={colors.teal}
                            size={size}
                            focused={focused}
                        />,
                    tabBarStyle: {
                        height: heightPixel(90),
                        display: walletFilter ? "flex" : "none",
                    },
                    unmountOnBlur: false
                }}
            />

            <Tab.Screen
                name={"Feed"}
                component={FeedTab}
                options={{
                    tabBarIcon: ({size, focused, color}) =>
                        <FeedTab
                            label={"Feed"}
                            color={colors.teal}
                            size={size}
                            focused={focused}
                        />,
                    tabBarStyle: {
                        height: heightPixel(90),
                        display: feedFilter ? "flex" : "none",
                    },
                    unmountOnBlur: false
                }}
            />

            <Tab.Screen
                name={"Account"}
                component={AccountTab}
                options={{
                    tabBarIcon: ({size, focused, color}) =>
                        <AccountTab
                            label={"Account"}
                            color={colors.teal}
                            size={size}
                            focused={focused}
                        />,
                    tabBarStyle: {
                        height: heightPixel(90),
                        display: accountFilter ? "flex" : "none",
                    },
                    unmountOnBlur: false
                }}
            />
        </Tab.Navigator>
    )
}


export default MainScreenNavigator;
