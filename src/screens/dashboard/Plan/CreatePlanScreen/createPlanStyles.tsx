import {Dimensions, StyleSheet} from "react-native";
import {heightPixel} from "@/utils/normalize";
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
    }
})
