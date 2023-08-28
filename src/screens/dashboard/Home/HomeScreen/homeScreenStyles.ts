import {Dimensions, StyleSheet} from "react-native";
import colors from "@/utils/colors";
import {fontPixel, heightPixel, pixelSizeHorizontal, pixelSizeVertical, widthPixel} from "@/utils/normalize";

const width = Dimensions.get("screen").width

export const homeScreenStyles = StyleSheet.create({
    ctn: {
        flex: 1,
        position: "relative",
        backgroundColor: colors.white
    },
    floatingImg: {
        width: width,
        height: heightPixel(376),
        resizeMode: "cover"
    },
    innerScreen: {
        paddingHorizontal: pixelSizeHorizontal(20),
        marginTop: pixelSizeVertical(16)
    },
    addMoney: {
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        borderColor: "#71879C33",
        borderRadius: heightPixel(5),
        padding: pixelSizeVertical(15),
        marginTop: pixelSizeVertical(24),
        flexDirection: "row",
        gap: 10
    },
    addMoneyTxt: {
        color: colors.teal,
        fontSize: fontPixel(15),
        fontWeight: "700"
    },
    section2: {
        marginTop: pixelSizeVertical(30)
    },
    create: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    createOne: {
        fontWeight: "400",
        fontSize: fontPixel(18),
        lineHeight: fontPixel(22)
    },
    allView: {
        flexDirection: "row",
        alignItems: "center"
    },
    allViewTxt: {
        color: colors.text,
        fontSize: fontPixel(14),
        fontWeight: "700"
    },
    startTxt: {
        fontSize: fontPixel(15),
        marginTop: pixelSizeVertical(12),
        lineHeight: fontPixel(22),
        color: colors.text
    },
    needHelpView: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,
        height: heightPixel(66),
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: colors.white,
        borderRadius: heightPixel(12),
        marginTop: pixelSizeVertical(30),
        paddingHorizontal: pixelSizeHorizontal(12)
    },
    needHelp1: {
        flexDirection: "row",
        alignItems: "center"
    },
    mark: {
        height: heightPixel(24),
        width: heightPixel(24),
        backgroundColor: "#71879C1A",
        borderRadius: heightPixel(24),
        justifyContent: "center",
        alignItems: "center",
        marginRight: pixelSizeVertical(10)
    },
    needHelpTxt: {
        fontWeight: "400",
        fontSize: fontPixel(15),
        lineHeight: fontPixel(22)
    },
    contactUs: {
        backgroundColor: colors.teal,
        padding: pixelSizeVertical(10),
        borderRadius: pixelSizeVertical(6)
    },
    logo: {
        marginVertical: pixelSizeVertical(32),
        alignSelf: "center",
        height: heightPixel(25),
        width: widthPixel(80)
    }
})
