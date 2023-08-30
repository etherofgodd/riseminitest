import {StyleSheet, TouchableOpacity, View} from "react-native";
import {fontPixel, heightPixel, pixelSizeVertical, widthPixel} from "@/utils/normalize";
import AppText from "@/components/AppText";
import colors from "@/utils/colors";
import {Ionicons} from "@expo/vector-icons";
import {useState} from "react";
import {formatText} from "@/utils/inputFormatter";


type Prop = {
    balance: number
}
export const HomeBalanceCard = ({balance}: Prop) => {
    const [visible, setVisible] = useState(false)

    return (
        <View
            style={styles.ctn}
        >
            <View
                style={styles.sec1}
            >
                <AppText
                    style={styles.sec1Txt}
                >
                    Total balance
                </AppText>
                <TouchableOpacity onPress={() => setVisible(!visible)}>
                    <Ionicons name={visible ? "eye" : "eye-off"} color={colors.teal}
                              size={fontPixel(15)}/>
                </TouchableOpacity>
            </View>

            <AppText
                style={styles.balance}
            >
                ${!visible ? "***" : formatText(balance ? balance.toString() : "0")}
            </AppText>

            <View
                style={styles.line}
            />

            <View
                style={styles.gains}
            >
                <AppText
                    style={styles.gainsTxt}>
                    Total Gains
                </AppText>
                <AppText
                    style={styles.gainsTxt2}>
                    +0.21%
                </AppText>
            </View>
        </View>
    )
}

//should be outside
const styles = StyleSheet.create({
    ctn: {
        width: "100%",
        height: heightPixel(175),
        backgroundColor: "rgba(255, 255, 255, 0.5);",
        borderRadius: heightPixel(10),
        marginTop: pixelSizeVertical(10),
        alignItems: "center",
        padding: pixelSizeVertical(15)
    },
    sec1: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10
    },
    sec1Txt: {
        color: colors.text
    },
    balance: {
        fontSize: fontPixel(32),
        lineHeight: fontPixel(38.4),
        marginTop: pixelSizeVertical(12)
    },
    line: {
        borderWidth: 1,
        borderColor: colors.offWhite,
        width: widthPixel(197),
        opacity: 0.3,
        marginVertical: pixelSizeVertical(10)
    },
    gains: {
        flexDirection: "row",
        alignItems: "center",
        gap: 4
    },
    gainsTxt: {
        color: colors.text,
        fontSize: fontPixel(15),
        fontWeight: "400"
    },
    gainsTxt2: {
        color: colors.instructive,
        fontSize: fontPixel(16)
    }
})
