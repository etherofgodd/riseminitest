import {StyleSheet, View} from "react-native";
import {fontPixel, pixelSizeVertical} from "@/utils/normalize";
import AppText from "@/components/AppText";
import colors from "@/utils/colors";


type PlanSectionListProp = {
    title: string;
    value: string;
}
export const PlanSectionList = ({value, title}: PlanSectionListProp) => {

    return (
        <View
            style={styles.ctn}
        >
            <AppText
                style={styles.title}
            >
                {title}
            </AppText>
            <AppText
                style={styles.value}
            >
                {value}
            </AppText>
        </View>
    )
}


const styles = StyleSheet.create({
    ctn: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottomWidth: 1,
        paddingBottom: pixelSizeVertical(10),
        marginBottom: pixelSizeVertical(10),
        borderColor: "#71879C1A"
    },
    title: {
        lineHeight: fontPixel(22),
        fontWeight: "400",
        color: "#71879C"
    },
    value: {
        color: colors.neutral,
        fontWeight: "400",
        lineHeight: fontPixel(20)
    }
})
