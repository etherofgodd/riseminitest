import {StyleSheet} from "react-native";
import {pixelSizeHorizontal, pixelSizeVertical} from "@/utils/normalize";

export const createAccountStyles = StyleSheet.create({
    ctn: {
        paddingHorizontal: pixelSizeHorizontal(20),
        flex: 1
    },
    body: {
        flexDirection: 'column',
        justifyContent: "center",
        gap: pixelSizeVertical(17),
        marginTop: pixelSizeVertical(38)
    }
})
