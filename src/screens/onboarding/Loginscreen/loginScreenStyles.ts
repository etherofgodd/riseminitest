import {StyleSheet} from "react-native";
import {fontPixel, pixelSizeHorizontal, pixelSizeVertical} from "@/utils/normalize";
import colors from "@/utils/colors";

export const loginScreenStyles = StyleSheet.create({
    ctn:{
        paddingHorizontal: pixelSizeHorizontal(20),
        flex: 1,
        alignItems: "center",
        justifyContent: "space-between"
    },
    body: {
        flexDirection: 'column',
        justifyContent: "center",
        gap: pixelSizeVertical(17),
        marginTop: pixelSizeVertical(38)
    },
    forgotBd: {
        alignSelf: "center",
        marginTop: pixelSizeVertical(32)
    },
    forgotTxt: {
        color: colors.teal,
        fontSize: fontPixel(15),
        fontWeight: "700",
        lineHeight: fontPixel(20)
    },
    noAcctTxt: {
        color: colors.neutral,
        fontSize: fontPixel(15),
        fontWeight: "700",
        lineHeight: fontPixel(20)
    }
})
