import {Dimensions, StyleSheet} from "react-native";
import {fontPixel, heightPixel, pixelSizeVertical} from "@/utils/normalize";
import colors from "@/utils/colors";

const width = Dimensions.get("window").width

export const createPlanStyles = StyleSheet.create({
    progress:{
        height: heightPixel(10),
        width: width - 40,
        backgroundColor: "#71879C1A",
        borderRadius: 5,
        overflow: "hidden"
    },
    animatedSection: {
        height: "100%",
        backgroundColor: colors.teal
    },
    question: {
        marginTop: pixelSizeVertical(37),
        marginBottom: pixelSizeVertical(21),
        color: colors.text,
        fontWeight: "400",
        lineHeight: fontPixel(22)
    },
    questionType: {
        fontSize: fontPixel(17),
        fontWeight: "700",
        lineHeight: fontPixel(22),
        marginBottom: pixelSizeVertical(20)
    }
})
