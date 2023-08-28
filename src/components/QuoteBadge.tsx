import {StyleSheet, View} from "react-native";
import {fontPixel, heightPixel, pixelSizeVertical, widthPixel} from "@/utils/normalize";
import colors from "@/utils/colors";
import AppText from "@/components/AppText";
import {MaterialCommunityIcons} from "@expo/vector-icons";


type QuoteBadgeProp = {
    name: string;
    quote: string;
}
export const QuoteBadge = ({quote,name}: QuoteBadgeProp) => {
    return (
        <View
            style={styles.ctn}
        >
            <AppText
                style={styles.headerTxt}
            >
                TODAY’S QUOTE
            </AppText>

            <View
                style={styles.line}
            />

            <AppText
                style={styles.subHeader}
            >
                {quote}
            </AppText>


            <View
                style={
                    styles.footer
                }
            >
                <AppText
                    style={styles.name}
                >
                    {name}
                </AppText>
                <View
                    style={styles.share}
                >
                    <MaterialCommunityIcons
                        name={"share-variant"}
                        color={colors.white}
                        size={fontPixel(22)}
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    ctn: {
        width: "100%",
        borderRadius: heightPixel(15),
        padding: pixelSizeVertical(20),
        backgroundColor: colors.teal,
        marginTop: pixelSizeVertical(34)
    },
    headerTxt: {
        fontWeight: "700",
        fontSize: fontPixel(14),
        lineHeight: fontPixel(19),
        color: colors.white
    },
    line: {
        borderBottomWidth: 1,
        borderColor: colors.white,
        width: widthPixel(28),
        marginVertical: pixelSizeVertical(20)
    },
    subHeader: {
        fontWeight: "400",
        fontSize: fontPixel(15),
        lineHeight: fontPixel(22),
        color: colors.white
    },
    footer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: pixelSizeVertical(10)
    },
    name: {
        fontWeight: "700",
        fontSize: fontPixel(15),
        lineHeight: fontPixel(22),
        color: colors.white
    },
    share: {
        height: heightPixel(42),
        width: heightPixel(42),
        borderRadius: heightPixel(42),
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FFFFFF33"
    }
})
