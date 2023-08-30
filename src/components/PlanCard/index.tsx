import {Image, StyleSheet, TouchableOpacity, View} from "react-native";
import {fontPixel, heightPixel, pixelSizeHorizontal, widthPixel} from "@/utils/normalize";
import AppText from "@/components/AppText";
import colors from "@/utils/colors";
import {formatText} from "@/utils/inputFormatter";
import {MaterialCommunityIcons} from "@expo/vector-icons";


type PlanCardProp = {
    index: number;
    title: string;
    price: string;
    onPress: () => void;
}
export const PlanCard = ({price, index, title, onPress}: PlanCardProp) => {
    return (

        <TouchableOpacity
            onPress={onPress}
            style={styles.ctn}
        >
            <Image
                source={index % 2 == 1 ? require("../../../assets/app/icon_1.png") : require("../../../assets/app/icon_2.png")}
                style={styles.img}
            />

            <View
                style={styles.info}
            >
                <AppText
                    numberOfLines={1}
                    style={styles.title}
                >
                    {title}
                </AppText>
                <AppText
                    numberOfLines={1}
                    style={styles.amount}
                >
                    ${formatText(price)}
                </AppText>
            </View>

            <MaterialCommunityIcons
                name={"arrow-right"}
                style={styles.icon}
                color={colors.white}
                size={22}
            />

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    ctn: {
        position: "relative",
        overflow: "hidden",
        width: widthPixel(158),
        height: heightPixel(243),
        marginRight: pixelSizeHorizontal(20)
    },
    img: {
        position: "absolute",
        width: widthPixel(158),
        height: heightPixel(243),
        borderRadius: heightPixel(15),
        zIndex: 100
    },
    info: {
        position: "absolute",
        zIndex: 1000,
        left: 17,
        bottom: 20,
    },
    title: {
        color: colors.white,
        fontSize: fontPixel(14),
        fontWeight: "400",
        lineHeight: 22
    },
    amount: {
        color: colors.white,
        fontSize: fontPixel(18),
        fontWeight: "400",
        lineHeight: 22
    },
    icon: {
        position: "absolute",
        bottom: heightPixel(30),
        zIndex: 1100,
        right: pixelSizeHorizontal(10)
    }
})
