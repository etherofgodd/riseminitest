import AppScreen from "@/components/AppScreen";
import AppText from "@/components/AppText";
import {AuthStackScreenProps} from "@/types/navigationTypes";
import {View} from "react-native";
import {pixelSizeHorizontal, pixelSizeVertical} from "@/utils/normalize";
import {AppAuthHeader} from "@/components/AppAuthHeader";
import {AppTextInput} from "@/components/AppTextInput";
import {useState} from "react";
import AuthForm from "@/components/Forms/AppForm";
import AppForm from "@/components/Forms/AppForm";
import {AppFormField} from "@/components/Forms/FormField";
import SubmitButton from "@/components/Forms/SubmitButton";
import {validationSchema} from "@/screens/onboarding/CreateAccount/validationSchema";
import ValidationBox from "@/components/Forms/ValidationBox";
import {createAccountStyles} from "@/screens/onboarding/CreateAccount/createAccountStyles";
import {IAuthFormTypes} from "@/types/authTypes";
import {useAppDispatch} from "@/hooks/useAppStore";
import {setAuthState} from "@/store/authSlice";

export default function CreateAccountScreen({navigation}: AuthStackScreenProps<"CreateAccountScreen">) {
    const dispatch = useAppDispatch();
    const onSubmit = async (value: IAuthFormTypes) => {
        const data: IAuthFormTypes = value;
        dispatch(setAuthState({
            email: data.emailAddress!,
            password: data.password!
        }))
        navigation.navigate("MoreInfoScreen");
    }
    return (
        <AppScreen>
            <View
                style={createAccountStyles.ctn}
            >
                <AppAuthHeader
                    onPress={navigation.goBack}
                    title={"Create an account"}
                    subTitle={"Start building your dollar-denominated \n" +
                        "investment portfolio"}
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
                        style={createAccountStyles.body}
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

                        <ValidationBox/>

                        <SubmitButton
                            title={"Sign Up"}
                        />
                    </View>
                </AppForm>
            </View>
        </AppScreen>
    )
}
