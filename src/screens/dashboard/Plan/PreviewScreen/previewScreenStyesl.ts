import {StyleSheet} from "react-native";
import {fontPixel, heightPixel, pixelSizeHorizontal, pixelSizeVertical} from "@/utils/normalize";
import colors from "@/utils/colors";

export const previewScreenStyles = StyleSheet.create({
    header: {
        alignItems: "center",
        marginTop: pixelSizeVertical(20)
    },
    title: {
        fontSize: fontPixel(12),
        fontWeight: "400",
        lineHeight: fontPixel(16),
        color: colors.text
    },
    principalAmout: {
        fontWeight: "700",
        fontSize: fontPixel(24),
        lineHeight: fontPixel(24),
        marginTop: 10
    },
    year: {
        fontSize: fontPixel(15),
        lineHeight: fontPixel(22),
        color: colors.grey
    },
    view: {
        marginTop: pixelSizeVertical(20),
        flexDirection: "row",
        alignItems: "center",
        alignSelf: "center",
        gap: pixelSizeHorizontal(20)
    },
    noteOne: {
        flexDirection: "row",
        alignItems: "center",
        gap: 6
    },
    dotOne: {
        height: heightPixel(9),
        width: heightPixel(9),
        borderRadius: heightPixel(9),
        backgroundColor: "#94A1AD"
    },
    dotOneTxt: {color: colors.grey, fontSize: fontPixel(12), fontWeight: "400", lineHeight: fontPixel(16)},
    dotTwo: {
        height: heightPixel(9),
        width: heightPixel(9),
        borderRadius: heightPixel(9),
        backgroundColor: colors.teal
    },
    estimate: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: pixelSizeVertical(60)
    },
    estimateTxt: {color: colors.grey, fontSize: fontPixel(14), lineHeight: fontPixel(14)},
    line: {
        width: "100%",
        borderBottomWidth: 1,
        borderColor: colors.offWhite,
        marginVertical: pixelSizeVertical(27)
    },
    infoView: {
        backgroundColor: "#71879C0D",
        height: heightPixel(64),
        padding: heightPixel(10),
        alignItems: "center",
        borderRadius: heightPixel(8),
        flexDirection: "row",
        gap: 17
    },
    infoTxt: {
        lineHeight: heightPixel(22),
        fontSize: fontPixel(15),
        color: "#71879C"
    },
    updatetxt: {
        color: colors.text,
        fontSize: fontPixel(12),
        fontWeight: "400",
        textAlign: "center",
        lineHeight: fontPixel(16),
        marginVertical: pixelSizeVertical(27)
    }
})
