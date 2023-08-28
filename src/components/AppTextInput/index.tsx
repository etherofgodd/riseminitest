import {FC, useState} from "react";
import {View, TextInput, TextInputProps, Animated, TextStyle, ViewStyle, TouchableOpacity} from "react-native";
import colors from "@/utils/colors";
import {fontPixel, heightPixel, pixelSizeHorizontal} from "@/utils/normalize";
import {Ionicons} from "@expo/vector-icons";

interface AppTextInputProp extends TextInputProps {
    fieldTitle: string;
    textInputStyle?: TextStyle;
    viewStyles?: ViewStyle;
    isPassword?: boolean;
    isFocused?: boolean,
    animatedLabelPosition?: Animated.Value
}

export const AppTextInput: FC<AppTextInputProp> = ({
                                                       fieldTitle,
                                                       textInputStyle,
                                                       viewStyles,
                                                       isPassword,
                                                       isFocused,
                                                       animatedLabelPosition,
                                                       ...props
                                                   }) => {

    const [localFocus, setLocalFocus] = useState(false)

    function onBlur (){
        setLocalFocus(false)
    }

    function onFocus(){
        setLocalFocus(true)
    }
    if (!animatedLabelPosition) {
        animatedLabelPosition = new Animated.Value(localFocus||props.value ? 0 : 1)
    }

    const [showPassword, setShowPassword] = useState(false);

    const labelStyle: TextStyle = {
        position: 'absolute',
        left: 10,
        top: animatedLabelPosition?.interpolate({
            inputRange: [0, 1],
            outputRange: [-heightPixel(8), heightPixel(15)],
            extrapolate: "clamp"
        }) as unknown as number,
        fontSize: animatedLabelPosition?.interpolate({
            inputRange: [0, 1],
            outputRange: [fontPixel(10), fontPixel(15)],
        }) as unknown as number,
        color: animatedLabelPosition?.interpolate({
            inputRange: [0, 1],
            outputRange: [colors.teal, '#292F33'],
        }) as unknown as string,
        backgroundColor: colors.white,
        fontWeight: animatedLabelPosition?.interpolate({
            inputRange: [0, 1],
            outputRange: ["700", "700"],
        }) as unknown as "normal" | "bold" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900" | undefined,
        paddingHorizontal: pixelSizeHorizontal(10)
    };

    return (
        <View
            style={[{
                borderWidth: isFocused ? 1.5 : 1,
                borderColor: isFocused ? colors.teal : "#E1E8ED",
                height: heightPixel(55),
                justifyContent: "space-between",
                alignItems: "center",
                borderRadius: heightPixel(5),
                flexDirection: "row",
                paddingHorizontal: pixelSizeHorizontal(15)
            }, viewStyles]}>
            <Animated.Text style={labelStyle}>{fieldTitle}</Animated.Text>
            <TextInput
                secureTextEntry={isPassword && !showPassword}
                style={[{
                    height: "85%",
                    width: "85%"
                }]}
                onFocus={onFocus}
                onBlur={onBlur}
                {...props}
            />

            {
                isPassword && (
                    <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                        <Ionicons
                            name={showPassword ? "eye" : "eye-off"}
                            size={fontPixel(20)}
                            color={colors.teal}
                        />
                    </TouchableOpacity>
                )
            }

        </View>
    )
}
