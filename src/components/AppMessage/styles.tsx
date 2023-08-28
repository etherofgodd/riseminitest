
import { Dimensions, Platform, StatusBar, StyleSheet, TextStyle, ViewStyle } from 'react-native';
import {fontPixel, pixelSizeHorizontal, pixelSizeVertical} from "@/utils/normalize";
import colors from "@/utils/colors";
const { height } = Dimensions.get("window");

type Style = {
  ctn: ViewStyle;
  txt: TextStyle;
  container: ViewStyle;
  ctnStyle: ViewStyle
};

export const styles = StyleSheet.create<Style>({
  ctn: {
    width: "100%",
    position: "absolute",
    zIndex: 1000000,
    borderBottomRightRadius:  pixelSizeHorizontal(10),
    borderBottomLeftRadius: pixelSizeHorizontal(10),
  },
  ctnStyle:{
    width: "100%",
    paddingHorizontal: pixelSizeHorizontal(10),
    borderBottomRightRadius:  pixelSizeHorizontal(20),
    borderBottomLeftRadius: pixelSizeHorizontal(20),
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    elevation: 1000,
    flexGrow: 1
  },
  txt: {
    color: colors.white,
    fontSize: fontPixel(12),
    fontWeight: "bold",
    flexWrap: "wrap",
    textAlign: "center",
    flex: 1,
    flexShrink: 1,
    paddingVertical: pixelSizeVertical(10)
  },
  container: {
    width: "100%",
    position: "absolute",
    zIndex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    paddingHorizontal: pixelSizeHorizontal(15),
    elevation: 1000,
    paddingVertical: pixelSizeVertical(12),
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
});
