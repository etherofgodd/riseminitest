import {ActivityIndicator, TextStyle, TouchableOpacity, View, ViewStyle} from "react-native";
import AppText from "@/components/AppText";
import colors from "@/utils/colors";
import {appButtonStyles} from "@/components/AppButton/appButtonStyles";
import {fontPixel} from "@/utils/normalize";


type AppButtonProps = {
    title: string;
    onPress?: (data?: any) => void;
    style?: ViewStyle;
    textStyle?: TextStyle;
    disabled?: boolean;
    loading?: boolean;
    inverted?: boolean
}
export const AppButton = ({loading, disabled, onPress, textStyle, style, title, inverted}: AppButtonProps) => {
    return (
        <TouchableOpacity
            onPress={onPress && !loading ? onPress : () => console.log("Tapped")}
            style={[
                appButtonStyles.ctn,
                style,
                {
                    backgroundColor: inverted ? "#71879C1A" : colors.teal,
                    borderColor: colors.teal,
                    borderWidth: inverted ? 1 : 0,
                    opacity: disabled ? 0.3 : 1
                },
            ]}
            disabled={disabled}>
            {loading ? (
                <ActivityIndicator size={"small"} color={"white"}/>
            ) : (
                <AppText
                    style={[{
                        color: inverted ? colors.teal : colors.white,
                        fontWeight: "700",
                        fontSize: fontPixel(15)
                    },
                        textStyle]}
                >
                    {title}
                </AppText>
            )}
        </TouchableOpacity>
    )
}
