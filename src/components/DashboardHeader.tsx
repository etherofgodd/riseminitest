import {StyleSheet, TouchableOpacity, View} from "react-native";
import AppText from "@/components/AppText";
import {fontPixel, heightPixel, pixelSizeHorizontal, widthPixel} from "@/utils/normalize";
import colors from "@/utils/colors";
import {MaterialCommunityIcons} from "@expo/vector-icons";

export const DashboardHeader = ({name}: { name: string }) => {
    return (
        <View style={styles.ctn}>

            <View>
                <AppText
                    style={styles.title}
                >
                    {`Good ${getTimeOfDay()}`}</AppText>
                <AppText
                    style={styles.name}
                >
                    {name}
                </AppText>
            </View>

            <View style={styles.infoView}>
                <TouchableOpacity
                    style={styles.info}
                >
                    <AppText
                        style={styles.infoTxt}>
                        Earn 3% bonus</AppText>
                </TouchableOpacity>

                <MaterialCommunityIcons name={"bell"} color={colors.teal} size={fontPixel(25)}/>
            </View>


        </View>

    )
}


const styles = StyleSheet.create({
    ctn: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    title: {
        fontSize: fontPixel(15),
        fontWeight: "400",
        color: colors.grey,
        lineHeight: fontPixel(22)
    },
    name: {
        fontSize: fontPixel(20),
        fontWeight: "400"
    },
    infoView: {
        flexDirection: "row",
        alignItems: "center"
    },
    info: {
        height: heightPixel(30),
        width: widthPixel(111),
        backgroundColor: colors.teal,
        borderRadius: heightPixel(16),
        alignItems: "center",
        justifyContent: "center",
        marginRight: pixelSizeHorizontal(20)
    },
    infoTxt: {
        color: colors.white,
        fontSize: fontPixel(12),
        fontWeight: "400",
        lineHeight: fontPixel(15)
    }

})

export function getTimeOfDay() {
    const currentDate = new Date();
    const hours = currentDate.getHours();

    return hours < 12
        ? "morning ☀️"
        : hours > 12 && hours <= 16
            ? "afternoon 🌕"
            : "evening  🌒";
}
