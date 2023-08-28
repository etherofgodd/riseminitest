import {AuthStackScreenProps} from "@/types/navigationTypes";
import AppScreen from "@/components/AppScreen";
import AppText from "@/components/AppText";
import {AppAuthHeader} from "@/components/AppAuthHeader";
import {Dimensions, View} from "react-native";
import {pixelSizeHorizontal, pixelSizeVertical} from "@/utils/normalize";
import OtpInputField from "@/components/NewOtpKeyboard";
import KeyPad from "@/components/NewOtpKeyboard/KeyPad";
import {useEffect, useState} from "react";


const height = Dimensions.get("screen").height

export default function CreatePinScreen({navigation}: AuthStackScreenProps<"CreatePinScreen">) {
    const [otp, setOtp] = useState("");

    useEffect(() => {
        if (otp.length === 6) {
            navigation.navigate("RetypePinScreen", {
                pin: otp
            })
        }
    }, [otp]);

    return (
        <AppScreen>
            <View
                style={{
                    paddingHorizontal: pixelSizeHorizontal(20),
                    flex: 1
                }}
            >
                <AppAuthHeader
                    title={"Create a 6-digit PIN"}
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
