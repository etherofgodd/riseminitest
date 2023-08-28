import { StyleSheet, TextStyle } from "react-native";
import colors from "@/utils/colors";
import {fontPixel} from "@/utils/normalize";

type Style = {
  text: TextStyle;
};

export const styles = StyleSheet.create<Style>({
  text: {
    color: colors.error,
    fontSize: fontPixel(12),
    marginLeft: fontPixel(10),
    fontWeight: "200",
    lineHeight: fontPixel(16),
  },
});
