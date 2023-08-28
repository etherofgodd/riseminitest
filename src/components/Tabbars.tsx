import {Image, View} from "react-native";
import colors from "@/utils/colors";
import {fontPixel, heightPixel, pixelSizeVertical, widthPixel} from "@/utils/normalize";
import AppText from "@/components/AppText";

interface BaseProp {
    label: string;
    size: number;
    color: string;
    focused: boolean;
}

export const HomeTab = ({focused, size, label, color}: BaseProp) => {
    return (
        <View
            style={{
                alignItems: "center",
                marginTop: pixelSizeVertical(5)
            }}
        >
            <Image
                source={focused ? require("../../assets/tabs/active_home.png") : require("../../assets/tabs/inactive_home.png")}
                style={{
                    height: heightPixel(25),
                    width: heightPixel(25),
                    marginBottom: pixelSizeVertical(10)
                }}
            />

            {
                focused ? <View
                        style={
                            {
                                height: heightPixel(13),
                                width: widthPixel(13),
                                borderRadius: heightPixel(15),
                                backgroundColor: "#41BCC4",
                            }}/> :
                    (
                        <AppText style={{
                            color: colors.neutral,
                            fontWeight: "400",
                            lineHeight: fontPixel(15.62),
                            fontSize: fontPixel(12)
                        }}>
                            {label}
                        </AppText>
                    )
            }

        </View>
    )
}

export const PlansTab = ({focused, size, label, color}: BaseProp) => {
    return (
        <View
            style={{
                alignItems: "center",
                marginTop: pixelSizeVertical(5)
            }}
        >
            <Image
                source={focused ? require("../../assets/tabs/active_plan.png") : require("../../assets/tabs/inactive_plan.png")}
                style={{
                    height: heightPixel(25),
                    width: heightPixel(25),
                    marginBottom: pixelSizeVertical(10)
                }}
            />

            {
                focused ? <View
                        style={
                            {
                                height: heightPixel(13),
                                width: widthPixel(13),
                                borderRadius: heightPixel(15),
                                backgroundColor: "#41BCC4"
                            }}/> :
                    (
                        <AppText style={{
                            color: colors.neutral,
                            fontWeight: "400",
                            lineHeight: fontPixel(15.62),
                            fontSize: fontPixel(12)
                        }}>
                            {label}
                        </AppText>
                    )
            }

        </View>
    )
}

export const WalletTab = ({focused, size, label, color}: BaseProp) => {
    return (
        <View
            style={{
                alignItems: "center",
                marginTop: pixelSizeVertical(5)
            }}
        >
            <Image
                source={focused ? require("../../assets/tabs/active_wallet.png") : require("../../assets/tabs/inactive_wallet.png")}
                style={{
                    height: heightPixel(25),
                    width: heightPixel(25),
                    marginBottom: pixelSizeVertical(10)
                }}
            />

            {
                focused ? <View
                        style={
                            {
                                height: heightPixel(13),
                                width: widthPixel(13),
                                borderRadius: heightPixel(15),
                                backgroundColor: "#41BCC4"
                            }}/> :
                    (
                        <AppText style={{
                            color: colors.neutral,
                            fontWeight: "400",
                            lineHeight: fontPixel(15.62),
                            fontSize: fontPixel(12)
                        }}>
                            {label}
                        </AppText>
                    )
            }

        </View>
    )
}


export const FeedTab = ({focused, size, label, color}: BaseProp) => {
    return (
        <View
            style={{
                alignItems: "center",
                marginTop: pixelSizeVertical(5),
                position: "relative"
            }}
        >
            {/*store in a state and update count.*/}

            <View
                style={{
                    position: "absolute",
                    height: heightPixel(18),
                    width: heightPixel(18),
                    borderRadius: heightPixel(10),
                    zIndex: 1000,
                    right: -10,
                    top: -5,
                    backgroundColor: "#F34040",
                    alignItems: "center",
                    justifyContent: "center"
                }}
            >
                <AppText
                    style={{
                        fontSize: fontPixel(12),
                        fontWeight: "400",
                        color: colors.white,
                        lineHeight: fontPixel(15)
                    }}
                >0</AppText>
            </View>


            <Image
                source={focused ? require("../../assets/tabs/active_feed.png") : require("../../assets/tabs/inactive_feed.png")}
                style={{
                    height: heightPixel(25),
                    width: heightPixel(25),
                    marginBottom: pixelSizeVertical(10)
                }}
            />

            {
                focused ? <View
                        style={
                            {
                                height: heightPixel(13),
                                width: widthPixel(13),
                                borderRadius: heightPixel(15),
                                backgroundColor: "#41BCC4"
                            }}/> :
                    (
                        <AppText style={{
                            color: colors.neutral,
                            fontWeight: "400",
                            lineHeight: fontPixel(15.62),
                            fontSize: fontPixel(12)
                        }}>
                            {label}
                        </AppText>
                    )
            }


        </View>
    )
}


export const AccountTab = ({focused, size, label, color}: BaseProp) => {
    return (
        <View
            style={{
                alignItems: "center",
                marginTop: pixelSizeVertical(5)
            }}
        >
            <Image
                source={require("../../assets/tabs/account.png")}
                style={{
                    height: heightPixel(25),
                    width: heightPixel(25),
                    marginBottom: pixelSizeVertical(10)
                }}
            />

            <AppText style={{
                color: focused ? color : colors.neutral,
                fontWeight: "400",
                lineHeight: fontPixel(15.62),
                fontSize: fontPixel(12)
            }}>
                {label}
            </AppText>


        </View>
    )
}
