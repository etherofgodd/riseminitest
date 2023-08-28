import AppScreen from "@/components/AppScreen";
import AppText from "@/components/AppText";
import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";
import { Image, View } from "react-native";
import { fontPixel, heightPixel, pixelSizeHorizontal, pixelSizeVertical, widthPixel } from "@/utils/normalize";
import colors from "@/utils/colors";
import { AppButton } from "@/components/AppButton";
import { Sectionlist } from "@/components/Plan/Sectionlist";
import { PlanStackScreenProps } from "@/types/navigationTypes";
import { PlanHeader } from "@/components/Plan/AppHeader";


export default function Index({ navigation }: PlanStackScreenProps<"PlanScreen">) {
    return (
        <AppScreen scrollable>
            <ExpoStatusBar
                style={ "dark" }
                translucent={ true }
            />

            <View style={ { flex: 1, padding: pixelSizeHorizontal(20) } }>
                <PlanHeader title={ "Create a plan" } buttonType={ 1 } onPress={ navigation.goBack } />

                <AppText
                    style={ {
                        color: colors.text,
                        alignSelf: "center",
                        marginTop: pixelSizeVertical(25),
                        marginBottom: pixelSizeVertical(60),
                        fontWeight: "400",
                        lineHeight: fontPixel(22)
                    } }
                >
                    Reach your goals faster
                </AppText>

                <Image
                    source={ require("../../../../../assets/app/create_a_plan.png") }
                    style={ {
                        resizeMode: "contain",
                        height: heightPixel(100),
                        width: heightPixel(100),
                        alignSelf: "center"
                    } }

                />

                <View style={ { marginTop: pixelSizeVertical(50) } }>
                    <Sectionlist
                        title={ "Give us a few details" }
                        subTitle={ "Tell us what you want to achieve and we will help you get there" }
                        iconName={ "question" }
                    />
                    <Sectionlist
                        title={ "Turn on auto-invest" }
                        subTitle={ "The easiest way to get your investment working for you is to fund to periodically. " }
                        iconName={ "calendar" }
                    />
                    <Sectionlist
                        title={ "Modify as you progress" }
                        subTitle={ "You are in charge. Make changes to your plan, from adding funds, funding source, adding money to your wallet and more." }
                        iconName={ "setting" }
                    />
                </View>

                <AppButton
                    title={ "Continue" }
                    style={ { marginTop: pixelSizeVertical(70) } }
                    onPress={ () => navigation.navigate("CreatePlanScreen") }
                />

            </View>


        </AppScreen>
    );
}
