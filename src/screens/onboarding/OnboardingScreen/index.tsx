import {AuthStackScreenProps} from "@/types/navigationTypes";
import {Animated, Image, View} from "react-native";
import {useMemo, useRef} from "react";
import {heightPixel} from "@/utils/normalize";
import Carousel from "@/components/Carousel";
import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";


export default function Index({}: AuthStackScreenProps<"OnboardingScreen">) {


    const data = useMemo(
        () => [
            <View style={{alignItems: "center"}}>
                <Image
                    style={[{
                        height: heightPixel(300),
                        width: heightPixel(300)
                    },
                    ]}
                    source={require("../../../../assets/auth/index_1.png")}
                    resizeMode="contain"
                />
            </View>,
            <View style={{alignItems: "center"}}>
                <Image
                    style={[{
                        height: heightPixel(300),
                        width: heightPixel(300)
                    },
                    ]}
                    source={require("../../../../assets/auth/index_2.png")}
                    resizeMode="contain"
                />
            </View>,
            <View style={{alignItems: "center"}}>
                <Image
                    style={[{
                        height: heightPixel(300),
                        width: heightPixel(300)
                    },]}
                    source={require("../../../../assets/auth/index_3.png")}
                    resizeMode="contain"
                />
            </View>,
        ],
        []
    );

    const animatedValue = useRef(new Animated.Value(0)).current;


    return (
        <>
            <Carousel
                animatedValue={animatedValue}
                bannerData={data}
            />
            <ExpoStatusBar
                style={"dark"}
            />
        </>

    )

}
