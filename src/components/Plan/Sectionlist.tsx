import {StyleSheet, View} from "react-native";
import {fontPixel, heightPixel, pixelSizeHorizontal, pixelSizeVertical, widthPixel} from "@/utils/normalize";
import AppText from "@/components/AppText";
import colors from "@/utils/colors";
import {AntDesign} from "@expo/vector-icons";


type SectionlistProp = {
    iconName: keyof typeof AntDesign.glyphMap;
    title: string;
    subTitle: string;
}
export const Sectionlist = ({iconName, title, subTitle}: SectionlistProp) => {

    return (

        <View style={styles.ctn}>

            <View
                style={styles.icon}
            >
                <AntDesign
                    name={iconName}
                    size={fontPixel(25)}
                    color={colors.teal}
                />
            </View>


            <View
                style={
                    {
                        width: widthPixel(269)
                    }
                }
            >
                <AppText
                    style={styles.title}
                >
                    {title}
                </AppText>
                <AppText
                    style={styles.subTitle}
                >
                    {subTitle}
                </AppText>
            </View>


        </View>

    )
}

const styles = StyleSheet.create({
    ctn: {
        flexDirection: "row",
        gap: pixelSizeHorizontal(20),
        marginBottom: pixelSizeVertical(24)
    },
    icon: {
        height: heightPixel(40),
        width: widthPixel(40),
        backgroundColor: "#71879C1A",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: heightPixel(25)
    },
    title: {
        fontWeight: "700",
        fontSize: fontPixel(15),
        lineHeight: fontPixel(20),
        color: colors.neutral
    },
    subTitle: {
        fontWeight: "400",
        fontSize: fontPixel(13),
        lineHeight: fontPixel(19),
        color: colors.text
    }
})
