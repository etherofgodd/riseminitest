import {StyleSheet, TouchableOpacity, View} from "react-native";
import {fontPixel, heightPixel, pixelSizeHorizontal} from "@/utils/normalize";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import colors from "@/utils/colors";
import AppText from "@/components/AppText";


type PlanHeaderProp = {
    title: string;
    buttonType: 1 | 2;
    onPress: () => void
}
export const PlanHeader = ({onPress, title, buttonType}: PlanHeaderProp) => {
    return (
        <View
            style={styles.ctn}
        >
            <TouchableOpacity
                style={styles.btn}
                onPress={onPress}
            >
                {
                    buttonType == 1 ?
                        (
                            <MaterialCommunityIcons
                                size={fontPixel(26)}
                                color={colors.teal}
                                name={"close"}
                            />
                        ) : (
                            <MaterialCommunityIcons
                                size={fontPixel(26)}
                                color={colors.teal}
                                name={"arrow-left"}
                            />
                        )
                }

            </TouchableOpacity>

            <AppText
                style={styles.txt}
            >
                {title}
            </AppText>
        </View>
    )
}

const styles = StyleSheet.create({
    ctn: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        position: "relative"
    },
    btn: {
        height: heightPixel(36),
        width: heightPixel(36),
        borderRadius: heightPixel(20),
        backgroundColor: "#71879C1A",
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        left: pixelSizeHorizontal(0)
    },
    txt: {
        fontSize: fontPixel(24),
        fontWeight: "700",
        lineHeight: fontPixel(26),
        color: colors.black
    }
})
