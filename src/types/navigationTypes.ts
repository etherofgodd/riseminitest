import {NativeStackNavigationProp, NativeStackScreenProps} from "react-native-screens/native-stack";
import {CompositeNavigationProp, NavigatorScreenParams, RouteProp} from "@react-navigation/native";
import {BottomTabNavigationProp} from "@react-navigation/bottom-tabs";
import {IPreviewData} from "@/types/plan";

export type AuthStackParamList = {
    OnboardingScreen: undefined;
    LoginScreen: undefined;
    CreateAccountScreen: undefined;
    MoreInfoScreen: undefined;
    CreatePinScreen: undefined;
    RetypePinScreen: {
        pin: string
    };
    AuthSuccessScreen: {
        message: string;
        subMessage: string;
        actionType: "REGISTER" | "PIN"
    }
};


/// PLAN Screens

export type PlanStackParamList = {
    PlanScreen: undefined;
    CreatePlanScreen: undefined;
    PreviewScreen: IPreviewData;
    SuccessScreen: {
        message: string
    };
    MainPlanScreen: undefined
    PlanIdScreen:{
        id: string
    }
}

type PlanScreenNavigationProp<Screen extends keyof PlanStackParamList> =
    CompositeNavigationProp<
        NativeStackNavigationProp<PlanStackParamList, Screen>,
        BottomTabNavigationProp<AppTabParamList>
    >;

type PlanStackScreenRouteProp<Screen extends keyof PlanStackParamList> =
    RouteProp<PlanStackParamList, Screen>;

export type PlanStackScreenProps<Screen extends keyof PlanStackParamList> = {
    navigation: PlanScreenNavigationProp<Screen>;
    route: PlanStackScreenRouteProp<Screen>;
};

// HOME

export type HomeStackParamList = {
    HomeScreen: undefined;
};

type HomeScreenNavigationProp<Screen extends keyof HomeStackParamList> =
    CompositeNavigationProp<
        NativeStackNavigationProp<HomeStackParamList, Screen>,
        BottomTabNavigationProp<AppTabParamList>
    >;

type HomeStackScreenRouteProp<Screen extends keyof HomeStackParamList> =
    RouteProp<HomeStackParamList, Screen>;

export type HomeStackScreenProps<Screen extends keyof HomeStackParamList> = {
    navigation: HomeScreenNavigationProp<Screen>;
    route: HomeStackScreenRouteProp<Screen>;
};


// navigation on navigation is not properly typed

type AuthScreenNavigationProp<Screen extends keyof AuthStackParamList> =
    CompositeNavigationProp<
        NativeStackNavigationProp<AuthStackParamList, Screen>,
        BottomTabNavigationProp<AppTabParamList>
    >;

type AuthScreenRouteProp<Screen extends keyof AuthStackParamList> = RouteProp<
    AuthStackParamList,
    Screen
>;

export type AuthStackScreenProps<Screen extends keyof AuthStackParamList> =
    NativeStackScreenProps<AuthStackParamList, Screen>;

export type AuthScreenProps<Screen extends keyof AuthStackParamList> = {
    navigation: AuthScreenNavigationProp<Screen>;
    route: AuthScreenRouteProp<Screen>;
};

export type AppTabParamList = {
    Home: NavigatorScreenParams<HomeStackParamList>,
    Plans: NavigatorScreenParams<PlanStackParamList>,
    Account: NavigatorScreenParams<any>,
    Wallet: NavigatorScreenParams<any>,
    Feed: NavigatorScreenParams<any>
};
