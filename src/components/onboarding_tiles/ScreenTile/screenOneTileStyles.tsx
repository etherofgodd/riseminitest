import {StyleSheet, TextStyle, ViewStyle} from "react-native";
import {fontPixel, heightPixel, pixelSizeHorizontal, pixelSizeVertical, widthPixel} from "@/utils/normalize";
import colors from "@/utils/colors";

type ScreenTileStylesProp = {
    rightTxt: TextStyle;
    rightBtn: ViewStyle;
    leftBtn: ViewStyle;
    mainView: ViewStyle;
    lastView: ViewStyle;
    subTitle: TextStyle;
    title: TextStyle;
    ctn: ViewStyle;
}

export const screenTileStyles = StyleSheet.create<ScreenTileStylesProp>({
    ctn: {
        paddingHorizontal: pixelSizeHorizontal(20),
        marginTop: pixelSizeVertical(40)
    },
    title: {
        fontSize: fontPixel(20),
        lineHeight: fontPixel(26),
        fontWeight: "500",
    },
    subTitle: {
        marginTop: pixelSizeVertical(12),
        color: colors.neutral,
        fontWeight: "400",
        lineHeight: fontPixel(22)
    },
    lastView: {
        marginTop: pixelSizeVertical(57),
        flexDirection: "column",
        gap: heightPixel(10)
    },
    mainView: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: pixelSizeVertical(57)
    },
    leftBtn: {
        height: heightPixel(48),
        width: widthPixel(43),
        backgroundColor: colors.offWhiteLight,
        borderRadius: heightPixel(5),
        justifyContent: "center",
        alignItems: "center",
    },
    rightBtn: {
        flexDirection: "row",
        alignItems: "center",
        height: heightPixel(48),
        backgroundColor: colors.offWhiteLight,
        width: widthPixel(103),
        justifyContent: "space-between",
        borderRadius: heightPixel(5),
        paddingHorizontal: pixelSizeHorizontal(16)
    },
    rightTxt: {
        fontWeight: "700",
        lineHeight: fontPixel(19.53),
        fontSize: fontPixel(15)
    }
})
