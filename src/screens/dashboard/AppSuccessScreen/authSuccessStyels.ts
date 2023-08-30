import {StyleSheet} from "react-native";
import {fontPixel, heightPixel, pixelSizeVertical, widthPixel} from "@/utils/normalize";
import colors from "@/utils/colors";

export const authSuccessStyles = StyleSheet.create({
    ctn: {
        flex: 1,
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: pixelSizeVertical(20)
    },
    half: {
        flexDirection: "column",
        alignItems: "center",
        marginTop: pixelSizeVertical(130),
        maxWidth: widthPixel(200)
    },
    img: {
        height: heightPixel(90),
        width: heightPixel(90),
        borderRadius: heightPixel(90),
        resizeMode: "contain",
        marginBottom: pixelSizeVertical(36)
    },
    title: {
        textAlign: "center",
        color: colors.neutral,
        fontWeight: "400",
        fontSize: fontPixel(20),
        lineHeight: fontPixel(26)
    },
    subTitle: {
        color: colors.text,
        textAlign: "center",
        lineHeight: fontPixel(22),
        fontSize: fontPixel(15),
        marginTop: pixelSizeVertical(10),
        fontWeight: "400"
    },
    btn: {
        width: "100%",
        marginBottom: pixelSizeVertical(65)
    }
})
