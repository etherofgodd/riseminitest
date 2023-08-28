import {AuthStackScreenProps} from "@/types/navigationTypes";
import AppScreen from "@/components/AppScreen";
import AppText from "@/components/AppText";
import {AppAuthHeader} from "@/components/AppAuthHeader";
import {Dimensions, View} from "react-native";
import {pixelSizeHorizontal, pixelSizeVertical} from "@/utils/normalize";
import OtpInputField from "@/components/NewOtpKeyboard";
import KeyPad from "@/components/NewOtpKeyboard/KeyPad";
import {useEffect, useState} from "react";
import {useAppDispatch} from "@/hooks/useAppStore";
import {setMessage, setPinDetails} from "@/store/appState";
import {storePin} from "@/utils/storage";


const height = Dimensions.get("screen").height

export default function RetypeCreatePinScreen({navigation, route}: AuthStackScreenProps<"RetypePinScreen">) {
    const [otp, setOtp] = useState("");
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (otp.length === 6) {
            if (otp === route.params.pin) {
                doRequest(otp)
            } else {
                dispatch(setMessage({
                    message: "PINs do not match",
                    messageType: "INFO",
                    activeState: true
                }))
            }
        }
    }, [otp]);

    const doRequest = async (pin: string) => {
        await storePin(pin);
        navigation.navigate("AuthSuccessScreen", {
            message: "You’ve created your PIN",
            subMessage: "Keep your account safe with your secret PIN. Do not share this PIN with anyone.",
            actionType: "PIN"
        })
    }

    return (
        <AppScreen>
            <View
                style={{
                    paddingHorizontal: pixelSizeHorizontal(20),
                    flex: 1
                }}
            >
                <AppAuthHeader
                    title={"Confirm 6-digit PIN"}
                    subTitle={"You’ll use this PIN to sign in and confirm transactions"}
                    onPress={navigation.goBack}
                />

                <OtpInputField
                    internalValue={otp}
                    error={""}
                    lengthInput={6}
                />

                <View
                    style={{
                        marginTop: height / 8
                    }}
                >
                    <KeyPad
                        text={otp}
                        setText={(text) => {
                            setOtp(otp.concat(text));
                        }}
                        handleClear={() => {
                            setOtp(otp.substring(0, otp.length - 1));
                        }}
                        expectedLength={6}
                    />
                </View>


            </View>

        </AppScreen>
    )
}
