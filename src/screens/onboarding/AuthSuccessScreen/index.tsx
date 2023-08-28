import {AuthStackScreenProps} from "@/types/navigationTypes";
import AppScreen from "@/components/AppScreen";
import AppText from "@/components/AppText";
import {Image, View} from "react-native";
import {AppButton} from "@/components/AppButton";
import {authSuccessStyles} from "@/screens/onboarding/AuthSuccessScreen/authSuccessStyels";
import {useAppSelector} from "@/hooks/useAppStore";
import {useApi} from "@/hooks/useApi";
import {loginApiRequest} from "@/apis/login";
import useAuth from "@/hooks/useAuth";

export default function AuthSuccessScreen({navigation, route}: AuthStackScreenProps<"AuthSuccessScreen">) {
    const {email, password} = useAppSelector(state => state.authState);
    const {loading, request: loginRequest} = useApi(loginApiRequest);

    const {logIn} = useAuth();

    async function onOkayPressed() {
        if (route.params.actionType === "PIN") {
            const {response} = await loginRequest({
                password,
                email_address: email
            })

            if (response.ok) {
                await logIn({
                    token: response.data?.token!
                })
            } else {
                navigation.navigate("LoginScreen")
            }
        } else {
            navigation.navigate("CreatePinScreen")
        }
    }


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
                        {route.params.subMessage}
                    </AppText>
                </View>

                <View style={authSuccessStyles.btn}>
                    <AppButton
                        title={"Okay"}
                        onPress={onOkayPressed}
                        loading={loading}
                    />
                </View>

            </View>
        </AppScreen>
    )
}
