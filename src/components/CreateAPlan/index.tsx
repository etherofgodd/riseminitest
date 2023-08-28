import {TouchableOpacity, View} from "react-native";
import {fontPixel, heightPixel, pixelSizeHorizontal, pixelSizeVertical, widthPixel} from "@/utils/normalize";
import colors from "@/utils/colors";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import AppText from "@/components/AppText";


type CreateAPlanProp = {
    onPress: ()=> void;
}
export const CreateAPlan = ({onPress}: CreateAPlanProp)=> {

    return (
        <TouchableOpacity
            onPress={onPress}
            style={{
                height: heightPixel(243),
                width: widthPixel(188),
                borderRadius: heightPixel(12),
                backgroundColor: colors.offWhiteLight,
                alignItems: "center",
                justifyContent: "center",
                marginRight: pixelSizeHorizontal(20)
            }}
        >
            <View
                style={{
                    backgroundColor: "rgba(64, 187, 195, 0.15)",
                    height: heightPixel(43),
                    width: widthPixel(43),
                    alignItems: "center",
                    justifyContent: 'center',
                    borderRadius: 43
                }}
            >
                <MaterialCommunityIcons name={"plus"} size={fontPixel(20)}
                                        color={colors.teal}/>
            </View>
            <AppText
                style={{
                    width: widthPixel(121.44),
                    textAlign: "center",
                    fontWeight: "700",
                    fontSize: fontPixel(14),
                    lineHeight: fontPixel(18),
                    marginTop: pixelSizeVertical(10)
                }}
            >
                Create an investment plan
            </AppText>
        </TouchableOpacity>
    )
}
