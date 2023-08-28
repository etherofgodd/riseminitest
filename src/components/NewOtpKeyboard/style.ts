
import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import colors from "@/utils/colors";
import {fontPixel, heightPixel, pixelSizeHorizontal, pixelSizeVertical, widthPixel} from "@/utils/normalize";

type Style = {
  containerInput: ViewStyle;
  cellView: ViewStyle;
  cellText: TextStyle;
  containerButton: ViewStyle;
  text: TextStyle;
  resendButton: ViewStyle;
  otpText: TextStyle;
  verifyButton: ViewStyle;
};

export const styles = StyleSheet.create<Style>({
  containerInput: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: pixelSizeVertical(15),
  },
  cellView: {
    height: heightPixel(47),
    width: widthPixel(47),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginHorizontal: pixelSizeHorizontal(5),
    borderWidth: 1,
    borderColor: colors.offWhite,
  },
  cellText: {
    textAlign: "center",
    color: colors.teal,
    fontSize: fontPixel(20),
    fontWeight: "500",
  },
  containerButton: {
    flexDirection: "row",
    marginVertical: pixelSizeVertical(30),
    alignItems: "center",
  },
  text: {
    fontSize: fontPixel(12),
    flex: 1,
  },
  resendButton: {
    backgroundColor: "#5D5FEF",
    paddingHorizontal: pixelSizeHorizontal(10),
    borderRadius: 11,
    paddingVertical: pixelSizeVertical(8),
  },
  otpText: {
    fontSize: fontPixel(15),
    color: "white",
  },
  verifyButton: {
    width: "90%",
    alignSelf: "center",
  },
});
