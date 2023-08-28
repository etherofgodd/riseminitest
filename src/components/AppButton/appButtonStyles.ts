import {StyleSheet, ViewStyle} from "react-native";
import {heightPixel} from "@/utils/normalize";

type AppButtonStyles = {
    ctn: ViewStyle;
}


export const appButtonStyles = StyleSheet.create<AppButtonStyles>({
    ctn: {
        width: "100%",
        height: heightPixel(52),
        borderRadius: heightPixel(5),
        alignItems: "center",
        justifyContent: "center"
    }
})
