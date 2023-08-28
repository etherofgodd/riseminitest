import {Animated, Dimensions, Easing, TouchableOpacity} from "react-native";
import React, {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "@/hooks/useAppStore";
import {SafeAreaView} from "react-native-safe-area-context";


import {styles} from "./styles";
import {clearMessage} from "@/store/appState";
import colors from "@/utils/colors";
import AppText from "@/components/AppText";

const AppMessagePopUp = () => {
    const {message} = useAppSelector((state) => state.appState);
    const value = new Animated.Value(0);
    const dispatch = useAppDispatch();
    const {height} = Dimensions.get("window");

    useEffect(() => {
        if (message?.activeState) {
            Animated.sequence([
                Animated.timing(value, {
                    toValue: 1,
                    duration: 500,
                    easing: Easing.ease,
                    useNativeDriver: true,
                }),

                Animated.timing(value, {
                    toValue: 0,
                    duration: 4000,
                    easing: Easing.ease,
                    useNativeDriver: true,
                }),
            ]).start((res) => {
                if (res.finished) {
                    dispatch(clearMessage());
                }
            });
        }
    }, [message]);

    const range = height / 10;

    const translateY = value.interpolate({
        inputRange: [0, range],
        outputRange: [0, range],
    });

    const opacity = value;

    return message?.activeState ? (
        <SafeAreaView
            style={
                [
                    styles.ctn,
                    {
                        backgroundColor: message.messageType === "ERROR"
                            ? colors.error
                            : message.messageType === "SUCCESS"
                                ? colors.teal
                                : message.messageType === "INFO"
                                    ? colors.orange
                                    : "#fff",
                    }
                ]}
            edges={["top"]}
        >
            <Animated.View
                style={[
                    styles.ctnStyle,
                    {
                        backgroundColor:
                            message.messageType === "ERROR"
                                ? colors.error
                                : message.messageType === "SUCCESS"
                                    ? colors.lightTeal
                                    : message.messageType === "INFO"
                                        ? colors.orange
                                        : "#fff",
                        opacity,
                        transform: [{translateY}],
                    },
                ]}
            >
                <TouchableOpacity onPress={() => {
                    dispatch(clearMessage());
                }} style={{width: "100%", height: "100%"}}
                >
                    <AppText style={styles.txt}>{message.message}</AppText>
                </TouchableOpacity>
            </Animated.View>
        </SafeAreaView>
    ) : null;
};

export default AppMessagePopUp;
