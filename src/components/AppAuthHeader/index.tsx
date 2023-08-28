import {TouchableOpacity, View} from "react-native";
import {fontPixel, pixelSizeVertical} from "@/utils/normalize";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import colors from "@/utils/colors";
import AppText from "@/components/AppText";
import {appAuthStyle} from "@/components/AppAuthHeader/appAuthStyle";


type AppAuthHeaderProp = {
    onPress?: () => void;
    title: string;
    subTitle: string
}
export const AppAuthHeader = ({onPress,subTitle,title}: AppAuthHeaderProp) => {
    return (
        <View
            style={appAuthStyle.ctn}
        >
            <TouchableOpacity
                onPress={onPress}
            >
                <MaterialCommunityIcons
                    name={"arrow-left"}
                    color={colors.teal}
                    size={fontPixel(20)}
                />
            </TouchableOpacity>


            <AppText
                style={appAuthStyle.title}
            >
                {title}
            </AppText>

            <AppText
                style={appAuthStyle.subTitle}
            >
                {subTitle}
            </AppText>
        </View>
    )
}
