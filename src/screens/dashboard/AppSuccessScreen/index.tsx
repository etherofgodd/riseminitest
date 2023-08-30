import {PlanStackScreenProps} from "@/types/navigationTypes";
import AppScreen from "@/components/AppScreen";
import AppText from "@/components/AppText";
import {Image, View} from "react-native";
import {AppButton} from "@/components/AppButton";
import {authSuccessStyles} from "@/screens/onboarding/AuthSuccessScreen/authSuccessStyels";
import useAuth from "@/hooks/useAuth";


export default function AppSuccessScreen({navigation, route}: PlanStackScreenProps<"SuccessScreen">) {

    const {user} = useAuth()
    return (
        <AppScreen>
            <View
                style={authSuccessStyles.ctn}
            >
                <View
                    style={authSuccessStyles.half}
                >
                    <Image
                        style={authSuccessStyles.img}
                        source={require("../../../../assets/auth/success_logo.png")}
                    />

                    <AppText
                        style={authSuccessStyles.title}
                    >
                        {route.params.message}
                    </AppText>

                    <AppText
                        style={authSuccessStyles.subTitle}
                    >
                        Well done, {user?.first_name}
                    </AppText>

                </View>

                <View style={authSuccessStyles.btn}>
                    <AppButton
                        title={"View Plan"}
                        onPress={() => navigation.navigate("PlanIdScreen", {
                            id: route.params.id
                        })}
                    />
                </View>

            </View>
        </AppScreen>
    )
}
