import {StyleSheet, TextStyle} from "react-native";
import {fontPixel} from "@/utils/normalize";
import colors from "@/utils/colors";

type textSytle = {
    text: TextStyle;
};

export const styles = StyleSheet.create<textSytle>({
    text: {
        lineHeight: fontPixel(24),
        color: colors.black,
        fontWeight: "700",
        fontFamily: "Grotesque-Regular"
    },
});
