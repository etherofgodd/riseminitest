import AppScreen from "@/components/AppScreen";
import {AuthStackScreenProps} from "@/types/navigationTypes";

import {TouchableOpacity, View} from "react-native";
import {AppAuthHeader} from "@/components/AppAuthHeader";
import {pixelSizeVertical} from "@/utils/normalize";

import {AppFormField} from "@/components/Forms/FormField";
import SubmitButton from "@/components/Forms/SubmitButton";
import AppForm from "@/components/Forms/AppForm";
import {validationSchema} from "@/screens/onboarding/Loginscreen/validationSchema";
import AppText from "@/components/AppText";
import colors from "@/utils/colors";
import {useAppDispatch} from "@/hooks/useAppStore";
import {IAuthFormTypes, ILoginRequest} from "@/types/authTypes";
import {loginScreenStyles} from "@/screens/onboarding/Loginscreen/loginScreenStyles";
import {setMessage} from "@/store/appState";
import {useApi} from "@/hooks/useApi";
import {loginApiRequest} from "@/apis/login";
import useAuth from "@/hooks/useAuth";

export default function ({navigation}: AuthStackScreenProps<"LoginScreen">) {

    const {loading, request} = useApi(loginApiRequest);
    const {logIn} = useAuth();

    const dispatch = useAppDispatch();


    const onSubmit = async (values: IAuthFormTypes) => {
        const loginData: ILoginRequest = {
            password: values.password!,
            email_address: values.emailAddress!
        }

        const {response} = await request(loginData);

        if (!response.ok) {
            dispatch(setMessage({
                activeState: true,
                message: response.data?.message || "Oops! Something happened, Please try again.",
                messageType: "ERROR"
            }))
        } else {
            await logIn({
                token: response.data?.token || ""
            })
        }


    }
    return (
        <AppScreen>
            <View
                style={loginScreenStyles.ctn}
            >
                <View>
                    <AppAuthHeader
                        onPress={navigation.goBack}
                        title={"Welcome back"}
                        subTitle={"Let’s get you logged in to get back to building your dollar-denominated investment portfolio."}
                    />

                    <AppForm
                        initialValues={{
                            emailAddress: "",
                            password: ""
                        }}
                        onSubmit={onSubmit}
                        validationSchema={validationSchema}
                    >
                        <View
                            style={loginScreenStyles.body}
                        >
                            <AppFormField
                                fieldName={"emailAddress"}
                                fieldTitle={"Email address"}
                                keyboardType={"email-address"}
                                autoCapitalize={"none"}
                                autoCorrect={false}
                            />
                            <AppFormField
                                fieldName={"password"}
                                fieldTitle={"Password"}
                                isPassword
                                autoCapitalize={"none"}
                                autoCorrect={false}
                            />
                            <SubmitButton
                                title={"Sign In"}
                                loading={loading}
                            />

                            <TouchableOpacity
                                style={loginScreenStyles.forgotBd}
                            >
                                <AppText
                                    style={loginScreenStyles.forgotTxt}
                                >
                                    I forgot my password
                                </AppText>
                            </TouchableOpacity>
                        </View>
                    </AppForm>
                </View>
                <TouchableOpacity
                    style={{
                        marginBottom: pixelSizeVertical(40)
                    }}
                    onPress={() => navigation.navigate("CreateAccountScreen")}
                >
                    <AppText
                        style={loginScreenStyles.noAcctTxt}
                    >
                        Don't have an account?
                        <AppText style={{color: colors.teal}}> Sign up </AppText></AppText>
                </TouchableOpacity>

            </View>
        </AppScreen>
    )
}
