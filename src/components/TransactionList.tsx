import {StyleSheet, View} from "react-native";
import {fontPixel, heightPixel, pixelSizeVertical, widthPixel} from "@/utils/normalize";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import colors from "@/utils/colors";
import AppText from "@/components/AppText";


type TransactionListProp = {
    transactionType: "IN" | "OUT"
}
export const TransactionList = ({transactionType}: TransactionListProp) => {
    return (

        <View
            style={styles.ctn}
        >

            <View style={styles.firstHalf}>
                <View
                    style={[styles.circle, {
                        backgroundColor: transactionType == "IN" ? "#4CD96426" : "#EB575726"
                    }]}
                >
                    <MaterialCommunityIcons
                        color={transactionType == "IN" ? colors.instructive : "#EB5757"}
                        name={transactionType == "IN" ? "arrow-bottom-left-thin" : "arrow-top-right-thin"}
                        size={fontPixel(16)}
                    />
                </View>

                <View style={
                    {
                        maxWidth: widthPixel(195)
                    }
                }
                >

                    <AppText>
                        Received from Bank Account (BOSUN TONY ADEMOSU)
                    </AppText>
                    <AppText
                        style={styles.date}
                    >
                        Jul 6, 2021
                    </AppText>

                </View>
            </View>

            <View>
                <AppText>+$320.90</AppText>
            </View>


        </View>
    )
}

const styles = StyleSheet.create({
    ctn: {
        marginTop: pixelSizeVertical(20),
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "space-between"
    },
    firstHalf: {flexDirection: "row", gap: heightPixel(11)},
    circle: {
        width: heightPixel(36),
        height: heightPixel(36),
        borderRadius: heightPixel(30),
        backgroundColor: "#4CD96426",
        alignItems: "center",
        justifyContent: "center"
    },
    date: {
        color: colors.text,
        fontWeight: "400",
        lineHeight: fontPixel(19),
        fontSize: fontPixel(13)
    }
})
