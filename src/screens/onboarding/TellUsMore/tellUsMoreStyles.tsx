import {StyleSheet} from "react-native";
import {fontPixel, heightPixel, pixelSizeHorizontal, pixelSizeVertical, widthPixel} from "@/utils/normalize";
import colors from "@/utils/colors";

export const tellUsMoreStyles = StyleSheet.create({
    ctn: {
        flex: 1,
        paddingHorizontal: pixelSizeHorizontal(20)
    },
    inputCtn: {
        height: heightPixel(55),
        borderWidth: 1,
        borderColor: "#E1E8ED",
        borderRadius: heightPixel(5),
        position: "relative"
    },
    inputTxt: {
        position: "absolute",
        top: -heightPixel(13),
        zIndex: 100000,
        paddingHorizontal: pixelSizeHorizontal(10),
        backgroundColor: colors.white,
        fontSize: fontPixel(10),
        left: 10,
        color: colors.teal,
        fontWeight: "700"
    },
    dob: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: pixelSizeHorizontal(12),
        height: "100%",
        width: "100%"
    },
    tandc: {
        fontSize: fontPixel(11),
        textAlign: 'center',
        alignSelf: "center",
        fontWeight: "400",
        maxWidth: widthPixel(212),
        lineHeight: fontPixel(16),
        marginTop: pixelSizeVertical(27),
        color: colors.darkText
    },
    tandcTxt: {
        fontSize: fontPixel(11),
        fontWeight: "400",
        lineHeight: fontPixel(16),
        color: colors.defaultTeal
    },
    errorTxt: {
        fontSize: fontPixel(12),
        color: colors.error,
        fontStyle: 'italic'
    }

})
