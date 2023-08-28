import {Animated, TextInputProps, View} from "react-native";
import {useFormikContext} from "formik";
import {IAuthFormTypes} from "@/types/authTypes";
import {AppTextInput} from "@/components/AppTextInput";
import {Ionicons} from "@expo/vector-icons";
import ErrorMessage from "@/components/ErrorMessage";
import {FC, useState} from "react";


interface props {
    fieldName: keyof IAuthFormTypes;
    onPress?: () => void;
    fieldTitle: string;
    isPassword?: boolean;
}

export const AppFormField: FC<props & TextInputProps> = ({
                                                             isPassword,
                                                             fieldName,
                                                             fieldTitle,
                                                             ...otherProps
                                                         }) => {
    const {values, setFieldValue, setFieldTouched, errors, touched} =
        useFormikContext<IAuthFormTypes>();

    const [isFocused, setIsFocused] = useState(false);
    const animatedLabelPosition = new Animated.Value(isFocused || values[fieldName] ? 0 : 1);

    const handleFocus = async () => {
        await setFieldTouched(fieldName, true);
        setIsFocused(true);
        Animated.timing(animatedLabelPosition, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: false,
        }).start();
    };

    const handleBlur = async () => {
        if (!values[fieldName]) {
            await setFieldTouched(fieldName, false);
            setIsFocused(false);
            Animated.timing(animatedLabelPosition, {
                toValue: 1,
                duration: 1000,
                useNativeDriver: false,
            }).start();
        }
    };
    return (
        <>
            <AppTextInput
                isPassword={isPassword}
                onBlur={handleBlur}
                onFocus={handleFocus}
                isFocused={isFocused}
                onChangeText={(text) => setFieldValue(fieldName, text)}
                value={values[fieldName]}
                onEndEditing={()=> setIsFocused(false)}
                fieldTitle={fieldTitle}
                animatedLabelPosition={animatedLabelPosition}
                {...otherProps}
            />
            <ErrorMessage error={errors[fieldName]} visible={touched[fieldName]}/>
        </>
    )
}
