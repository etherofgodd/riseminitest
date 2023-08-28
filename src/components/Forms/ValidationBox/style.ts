import colors from "@/utils/colors";
import { StyleSheet } from "react-native";
import {normalise, pixelSizeHorizontal, pixelSizeVertical} from "@/utils/normalize";

export const styles = StyleSheet.create({
  container: {
    // paddingHorizontal: normalise(10),
    // paddingVertical: pixelSizeVertical(13),
    borderRadius: 13,
  },
  headerText: {
    fontWeight: "500",
    color: "#717171",
    marginBottom: pixelSizeVertical(10),
  },
  bodyCtn: { flexDirection: "row", justifyContent: "space-between" },
  column: { rowGap: pixelSizeVertical(8) },
  validationBox: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: pixelSizeHorizontal(8),
  },
});
