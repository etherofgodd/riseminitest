import {TouchableOpacity, View} from "react-native";
import {fontPixel} from "@/utils/normalize";
import AppText from "@/components/AppText";
import colors from "@/utils/colors";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import React from "react";
import {AppButton} from "@/components/AppButton";
import {screenTileStyles} from "@/components/onboarding_tiles/ScreenTile/screenOneTileStyles";


type ScreenTileProp = {
    disabled?: boolean;
    title: string;
    subTitle: string;
    onPressLeft?: () => void;
    onPressRight?: () => void;
    lastTile?: boolean;
    color: string;
    onPressLogin?: () => void;
    onPressCreate?: () => void;
}
export const ScreenTile = ({
                               lastTile,
                               title,
                               subTitle,
                               onPressRight,
                               onPressLeft,
                               disabled,
                               color,
                               onPressLogin,
                               onPressCreate
                           }: ScreenTileProp) => {
    return (
        <View
            style={screenTileStyles.ctn}
        >
            <AppText
                style={[screenTileStyles.title, {
                    color: color
                }]}
            >
                {title}
            </AppText>
            <AppText
                style={screenTileStyles.subTitle}
            >
                {subTitle}
            </AppText>

            {
                lastTile ? (
                    <View
                        style={screenTileStyles.lastView}
                    >

                        <AppButton
                            title={"Sign Up"}
                            onPress={onPressCreate}
                        />

                        <AppButton
                            onPress={onPressLogin}
                            title={"Sign In"}
                            inverted
                        />

                    </View>

                ) : (
                    <View
                        style={screenTileStyles.mainView}
                    >
                        <TouchableOpacity
                            disabled={disabled}
                            onPress={onPressLeft}
                            style={
                                [screenTileStyles.leftBtn, {
                                    opacity: disabled ? 0.3 : 1
                                }]
                            }
                        >
                            <MaterialCommunityIcons
                                name={"arrow-left"}
                                color={disabled ? colors.neutral : color}
                                size={fontPixel(17)}
                            />
                        </TouchableOpacity>


                        <TouchableOpacity
                            onPress={onPressRight}
                            style={screenTileStyles.rightBtn}
                        >
                            <AppText
                                style={[screenTileStyles.rightTxt, {
                                    color: color
                                }]}
                            >
                                Next
                            </AppText>
                            <MaterialCommunityIcons
                                name={"arrow-right"}
                                color={color}
                                size={fontPixel(17)}
                            />
                        </TouchableOpacity>
                    </View>
                )
            }

        </View>
    )
}
