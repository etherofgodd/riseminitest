import React, {FC} from "react";
import {TouchableOpacity, View} from "react-native";
import AppText from "../AppText";
import {styles} from "./style";
import colors from "@/utils/colors";

interface Props {
    internalValue: string;
    lengthInput: number;
    error?: string
}

const OtpInputField: FC<Props> = ({internalValue, lengthInput, error}) => {
    return (
        <View>
            <View style={styles.containerInput}>
                {Array(lengthInput)
                    .fill(0)
                    .map((_, index) => (
                        <TouchableOpacity
                            // activeOpacity={0.5}
                            style={[styles.cellView,
                                {
                                    borderColor:
                                        (internalValue && internalValue.length > 0 && internalValue[index]) ?
                                            colors.teal :
                                            colors.offWhite
                                }
                            ]}
                            key={index}
                        >
                            <AppText style={styles.cellText}>
                                {internalValue && internalValue.length > 0
                                    ? (internalValue[index] && "*")
                                    : ""}
                            </AppText>
                        </TouchableOpacity>
                    ))}
            </View>

        </View>

    );
};

export default OtpInputField;
