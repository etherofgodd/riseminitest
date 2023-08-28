import {StyleSheet, TextStyle, ViewStyle} from "react-native";
import {fontPixel, pixelSizeVertical} from "@/utils/normalize";
import colors from "@/utils/colors";

type AppAuthStyleProp = {
    subTitle: TextStyle;
    title: TextStyle;
    ctn: ViewStyle;
}
export const appAuthStyle = StyleSheet.create<AppAuthStyleProp>({
    ctn: {
        marginTop: pixelSizeVertical(15)
    },
    title: {
        fontWeight: '500',
        fontSize: fontPixel(20),
        lineHeight: fontPixel(26),
        marginTop: pixelSizeVertical(40)
    },
    subTitle: {
        color: colors.softNeutral,
        fontSize: fontPixel(14),
        lineHeight: fontPixel(22),
        marginTop: pixelSizeVertical(10),
        fontWeight: "400"
    }
})
