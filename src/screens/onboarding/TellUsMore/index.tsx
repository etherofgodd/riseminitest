import {AuthStackScreenProps} from "@/types/navigationTypes";
import AppScreen from "@/components/AppScreen";
import PhoneInput from "react-native-phone-number-input";
import {KeyboardAvoidingView, Linking, Platform, Pressable, TouchableOpacity, View} from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from 'moment';
import {AppAuthHeader} from "@/components/AppAuthHeader";
import {tellUsMoreStyles} from "@/screens/onboarding/TellUsMore/tellUsMoreStyles";

import AppForm from "@/components/Forms/AppForm";
import {loginScreenStyles} from "@/screens/onboarding/Loginscreen/loginScreenStyles";
import {AppFormField} from "@/components/Forms/FormField";
import SubmitButton from "@/components/Forms/SubmitButton";
import {useRef, useState} from "react";
import colors from "@/utils/colors";
import {fontPixel} from "@/utils/normalize";
import AppText from "@/components/AppText";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {validationSchema} from "@/screens/onboarding/TellUsMore/validationSchema";
import {IAuthFormTypes, IRegisterRequest} from "@/types/authTypes";
import {useAppDispatch, useAppSelector} from "@/hooks/useAppStore";
import {clearMessage, setMessage} from "@/store/appState";
import {registerApiRequest} from "@/apis/register";
import {useApi} from "@/hooks/useApi";


function calcAge(dateString: Date) {
    return moment(new Date()).diff(dateString, 'year', true);
}

export default function Index({navigation, route}: AuthStackScreenProps<"MoreInfoScreen">) {
    const [dateValue, setDateValue] = useState(new Date());
    const phoneInput = useRef<PhoneInput>(null);
    const [formattedValue, setFormattedValue] = useState<string>("");
    const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const {password, email} = useAppSelector(state => state.authState);

    const {request, loading} = useApi(registerApiRequest)
    const appDispatch = useAppDispatch();

    const hideDatePicker = () => {
        setIsDatePickerVisible(false);
    };

    const textFormatter = dateValue ? `${dateValue.getDate()}/${dateValue.getMonth() + 1}/${dateValue.getFullYear()}` : "Choose Date";

    const handleConfirm = (date: Date) => {
        setDateValue(date);
        hideDatePicker();
    };

    const [value, setValue] = useState("");

    const onSubmit = async (value: IAuthFormTypes) => {
        if (calcAge(dateValue) < 18) {
            appDispatch(setMessage({
                activeState: true,
                message: "You must be 18 and above",
                messageType: "INFO"
            }));
            return
        }
        let phoneNumber = formattedValue.slice(4);
        let phoneCountryCode = formattedValue.slice(0, 4).slice(1);
        let data: IRegisterRequest = {
            password: password,
            email_address: email,
            date_of_birth: `${dateValue.getFullYear()}-${(dateValue.getMonth() + 1).toString().padStart(2, '0')}-${dateValue.getDate()}`,
            first_name: value.firstName!,
            last_name: value.lastName!,
        }

        if(value.nickName){
            data = {
                ...data,
                username: value.nickName
            }
        }

        if(value.phoneNumber){
            data = {
                ...data,
                phone_number: formattedValue
            }
        }

        const {response} = await request(data);

        if (response.ok) {
            navigation.navigate("AuthSuccessScreen", {
                message: "You just created your Rise account",
                subMessage: "Welcome to Rise, let’s take you home",
                actionType: "REGISTER"
            });
        } else {
            appDispatch(setMessage({
                activeState: true,
                message: response.data?.message || "Oops! Something happened. Please try again.",
                messageType: "ERROR"
            }))
        }


    }
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            keyboardVerticalOffset={0}
            style={{flex: 1}}
        >
            <AppScreen>
                <View style={tellUsMoreStyles.ctn}>
                    <AppAuthHeader
                        title={"Tell Us More About You"}
                        subTitle={"Please use your name as it appears on your ID."}
                        onPress={navigation.goBack}
                    />

                    {
                        errorMessage && <AppText
                            style={tellUsMoreStyles.errorTxt}
                        >
                            {errorMessage}
                        </AppText>
                    }
                    <AppForm
                        initialValues={{
                            firstName: "",
                            lastName: "",
                            nickName: "",
                            dob: new Date().toDateString()
                        }}
                        onSubmit={onSubmit}
                        validationSchema={validationSchema}
                    >
                        <View
                            style={loginScreenStyles.body}
                        >
                            <AppFormField
                                fieldName={"firstName"}
                                fieldTitle={"Legal First Name"}
                                autoCorrect={false}
                            />

                            <AppFormField
                                fieldName={"lastName"}
                                fieldTitle={"Legal Last Name"}
                                autoCorrect={false}
                            />

                            <AppFormField
                                fieldName={"nickName"}
                                fieldTitle={"Nick name"}
                                autoCorrect={false}
                            />

                            {/* ideally this would have been a self housing field, but i got two emails and had to clarify the status of my application so i was low on time.*/}

                            <View
                                style={tellUsMoreStyles.inputCtn}
                            >
                                <AppText
                                    style={tellUsMoreStyles.inputTxt}
                                >
                                    Phone Number
                                </AppText>

                                <PhoneInput
                                    ref={phoneInput}
                                    defaultValue={value}
                                    containerStyle={{marginLeft: 10}}
                                    placeholder="08011222112"
                                    textContainerStyle={{backgroundColor: colors.white}}
                                    onChangeText={(text) => {
                                        setValue(text);
                                    }}
                                    onChangeFormattedText={(text) => {
                                        setFormattedValue(text);
                                    }}
                                    textInputProps={
                                        {
                                            returnKeyType: "done",
                                            maxLength: 11,
                                            placeholderTextColor: colors.offWhite,
                                        }}

                                    countryPickerProps={{
                                        countryCodes: ["NG", "GH", "RW"]
                                    }}
                                    defaultCode="NG"
                                    layout="first"
                                />
                            </View>

                            <View
                                style={[tellUsMoreStyles.inputCtn, {justifyContent: 'center'}]}
                            >
                                <AppText
                                    style={tellUsMoreStyles.inputTxt}
                                >
                                    Date of Birth
                                </AppText>

                                <TouchableOpacity
                                    onPress={() => setIsDatePickerVisible(true)}
                                    style={tellUsMoreStyles.dob}
                                >
                                    <AppText>
                                        {textFormatter}
                                    </AppText>
                                    <MaterialCommunityIcons
                                        name={"calendar-month"}
                                        color={colors.teal}
                                        size={fontPixel(20)}
                                    />
                                </TouchableOpacity>
                            </View>
                            <SubmitButton title={"Continue"} loading={loading}/>
                        </View>
                    </AppForm>

                    <AppText
                        style={tellUsMoreStyles.tandc}
                    >
                        By clicking Continue, you agree to our
                        <AppText
                            style={tellUsMoreStyles.tandcTxt}
                            onPress={() => Linking.openURL("https://risevest.com/terms-of-use")}
                        >
                            {" "} Terms of Service
                        </AppText> and
                        <AppText
                            onPress={() => Linking.openURL("https://risevest.com/privacy-policy")}

                            style={tellUsMoreStyles.tandcTxt}
                        >
                            {" "} Privacy Policy.
                        </AppText>

                    </AppText>
                </View>
            </AppScreen>
            <DateTimePickerModal
                accentColor={colors.teal}
                textColor={colors.teal}
                buttonTextColorIOS={colors.teal}
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
                date={dateValue}
                maximumDate={new Date(Date.now())}
            />
        </KeyboardAvoidingView>
    )
}
