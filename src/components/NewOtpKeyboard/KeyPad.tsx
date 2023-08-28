import React from "react";
import {FlatList, Pressable, StyleSheet, View} from "react-native";
import {data, Keyoutput} from "./keypaddata";
import * as Haptics from "expo-haptics";
import {Ionicons} from "@expo/vector-icons";
import AppText from "../AppText";
import {fontPixel, heightPixel, normalise} from "@/utils/normalize";
import colors from "@/utils/colors";


export interface KeyboardProps {
    text: string;
    setText: (text: string) => void;
    handleClear: () => void;
    expectedLength: number;
}

const Index = ({
                   setText,
                   text,
                   handleClear,
                   expectedLength,
               }: KeyboardProps) => {
    async function handlePress(item: Keyoutput) {
        if (item === 404) return;
        if (item === 400) {
            if (text.length > 0) {
                await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
                return handleClear();
            }
        } else {
            if (text.length < expectedLength) {
                await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
                setText(item.toString());
            }
        }
    }

    return (
        <View style={styles.pinInput}>
            <FlatList
                scrollEnabled={false}
                data={data}
                numColumns={3}

                renderItem={({item, index}) => (
                    <>
                        <Pressable
                            onPress={() => handlePress(item.output)}
                            style={[styles.pinInputCtn,
                                {
                                    marginHorizontal: heightPixel(20), // Horizontal margin around each Pressable
                                    marginBottom: 24,    // Vertical margin between rows of Pressables
                                },
                            ]}
                        >
                            {item.output === 400 ? (
                                <Ionicons name="ios-backspace-outline" color={colors.teal} size={normalise(25)}/>
                            ) : (
                                <AppText style={styles.pinText}>{item.value}</AppText>
                            )}
                        </Pressable>
                    </>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    pinView: {
        // backgroundColor: colors.offWhite,
        // marginVertical: pixelSizeVertical(16),
        // width: "80%",
        // alignSelf: "center",
        // borderRadius: 4,
        // alignItems: "center",
        // justifyContent: "center",
        // padding: normalise(15),
    },
    pinInput: {
        justifyContent: "space-between",
        alignItems: "center",
        alignContent:"center"
    },
    pinInputCtn: {
        height: heightPixel(72),
        width: heightPixel(72),
        borderRadius: heightPixel(72),
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#71879C1A",
    },
    pinText: {
        fontSize: fontPixel(30),
        color: colors.teal,
        textAlign: "justify",
        fontWeight: "600",
        lineHeight: fontPixel(30)
    },
});

export default Index;
