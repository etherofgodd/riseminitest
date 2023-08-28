import React, {FC} from "react";
import {View} from "react-native";

import AppText from "../../AppText";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {styles} from "./style";
import {useFormikContext} from "formik";
import colors from "@/utils/colors";
import {fontPixel, normalise} from "@/utils/normalize";

interface itemProp {
    text: string;
    valid: boolean;
}

const ValidationItem: FC<itemProp> = ({text, valid}) => {
    return (
        <View style={styles.validationBox}>
            <MaterialCommunityIcons
                name={valid ? "check-circle" : "checkbox-blank-circle-outline"}
                color={colors.teal}
                size={normalise(16)}
            />
            <AppText
                style={{
                    color: !valid ? colors.black : colors.teal,
                    fontSize: fontPixel(13),
                }}
            >
                {text}
            </AppText>
        </View>
    );
};

function Index() {
    const {values} = useFormikContext<
        Record<string, string> & { password: string; }
    >();

    const password = values.password;

    return (
        <View style={styles.container}>
            <View style={styles.bodyCtn}>
                <View style={styles.column}>
                    <ValidationItem text="Minimum of 8 characters" valid={password.length >= 8}/>
                    <ValidationItem
                        text="One UPPERCASE character"
                        valid={!!password.match(/[A-Z]/)}
                    />
                    <ValidationItem
                        text="One special character (e.g: !@#$%^&*?)"
                        valid={!!password.match(/[^a-zA-Z0-9]/)}
                    />
                </View>

            </View>
        </View>
    );
}

export function PinValidationBox() {
    const {values} = useFormikContext<
        Record<string, string> & { pin: string }
    >();

    const pin = values.pin;

    return (
        <View style={styles.container}>
            <AppText style={styles.headerText}>PIN must contain:</AppText>
            <View style={styles.bodyCtn}>
                <View style={styles.column}>
                    <ValidationItem text="4 numbers" valid={pin.length == 4}/>
                    <ValidationItem
                        text="No letters"
                        valid={!!pin.match(/^[^a-zA-Z]*$/)}
                    />
                    <ValidationItem
                        text="No special character"
                        valid={!!pin.match(/^[a-zA-Z0-9]*$/)}
                    />
                </View>
            </View>
        </View>
    );
}

export default Index;
