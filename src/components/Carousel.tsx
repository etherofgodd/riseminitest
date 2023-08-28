import AppText from "@/components/AppText";

import React, {FC, useRef, useState} from "react";
import {
    View,
    StyleSheet,
    Animated,
    Dimensions,
    FlatList,
    ViewToken
} from "react-native";
import {fontPixel, heightPixel, normalise, pixelSizeHorizontal, pixelSizeVertical, widthPixel} from "@/utils/normalize";
import colors from "@/utils/colors";
import {ScreenTile} from "src/components/onboarding_tiles/ScreenTile";
import {useNavigation} from "@react-navigation/native";
import {AppTabParamList, AuthStackScreenProps} from "@/types/navigationTypes";

// import { footerTexts } from "./data";

interface props {
    animatedValue: Animated.Value;
    bannerData: JSX.Element[];
}

type viewConfigProp = { viewableItems: ViewToken[]; changed: ViewToken[] };

const PaginationDots: FC<{
    color: Animated.AnimatedInterpolation<string | number>;
    width: Animated.AnimatedInterpolation<number>;
}> = ({color, width}) => {
    return (
        <Animated.View
            style={[
                styles.dots, {
                    backgroundColor: color,
                    width,
                }
            ]}
        />
    );
};


function Carousel({animatedValue, bannerData}: props) {
    /*@ts-ignore  */ // we are using tsIgnore here and in to gain access to the navigation hook, and it's not properly typed ---> expo :/
    const navigation = useNavigation<AuthStackScreenProps<"OnboardingScreen">>();

    const {width} = Dimensions.get("window");
    const [currentIndex, setCurrentIndex] = useState(0);
    const flatListRef = useRef<Animated.FlatList>(null);

    const viewableItemsChanged = useRef(({viewableItems}: viewConfigProp) => {
        setCurrentIndex(viewableItems[0]?.index || 0);
    }).current;

    const viewConfig = useRef({
        itemVisiblePercentThreshold: 30,
        waitForInteraction: true,
    }).current;

    const scrollToIndex = (index: number) => {
        if (flatListRef.current) {
            flatListRef.current.scrollToIndex({
                index: index,
                animated: true,
            });
            setCurrentIndex(index);
        }
    };

    return (
        <View style={{
            backgroundColor:
                currentIndex === 1 ?
                    "#fdf5f9" :
                    currentIndex === 2 ?
                        "#f6fffe" :
                        "#fffaf8",
            flex: 1
        }}>

            <View>
                <Animated.FlatList
                    onScroll={
                        Animated.event(
                            [{nativeEvent: {contentOffset: {x: animatedValue}}}],
                            {useNativeDriver: false}
                        )
                    }
                    bounces={false}
                    ref={flatListRef}
                    pagingEnabled
                    contentContainerStyle={{
                        marginTop: pixelSizeVertical(95)
                    }}
                    horizontal
                    snapToInterval={width}
                    viewabilityConfig={viewConfig}
                    showsHorizontalScrollIndicator={false}
                    data={bannerData}
                    keyExtractor={(_, index) => index.toString()}
                    renderItem={({item}) => (
                        <View style={{width: width, flex: 1}}>{item}</View>
                    )}
                    onViewableItemsChanged={viewableItemsChanged}
                    scrollEventThrottle={32}
                />
                <View
                    style={{
                        justifyContent: "center",
                        alignItems: "center",
                        marginTop: pixelSizeVertical(18),
                    }}
                >
                    <FlatList
                        horizontal
                        snapToInterval={width}
                        showsHorizontalScrollIndicator={false}
                        data={bannerData}
                        keyExtractor={(_, index) => index.toString()}
                        renderItem={({index}) => {
                            const colorOutput = currentIndex == 0 ? [
                                colors.offWhite,
                                colors.orange,
                                colors.offWhite,
                            ] : currentIndex == 1 ? [
                                colors.offWhite,
                                colors.indigo,
                                colors.offWhite,
                            ] : [
                                colors.offWhite,
                                colors.teal,
                                colors.offWhite,
                            ];

                            const inputRange = [
                                (index - 1) * width,
                                index * width,
                                (index + 1) * width,
                            ];
                            const colorScale = animatedValue.interpolate({
                                inputRange,
                                outputRange: colorOutput,
                                extrapolate: "clamp",
                            });
                            const widthScale = animatedValue.interpolate({
                                inputRange,
                                outputRange: [widthPixel(8), widthPixel(32), widthPixel(8)],
                                extrapolate: "clamp",
                            });

                            return <PaginationDots color={colorScale} width={widthScale}/>;
                        }}
                    />
                </View>
            </View>

            {
                currentIndex === 0 ? (
                    <ScreenTile
                        title={"Quality assets"}
                        subTitle={"Rise invests your money into the best dollar investments around the world."}
                        color={colors.orange}
                        disabled
                        onPressRight={() => scrollToIndex(1)}
                    />
                ) : currentIndex === 1 ? (
                    <ScreenTile
                        title={"Superior Selection"}
                        subTitle={"Our expert team and intelligent algorithms select assets that beat the markets."}
                        color={colors.indigo}
                        onPressRight={() => scrollToIndex(2)}
                        onPressLeft={() => scrollToIndex(0)}
                    />
                ) : (
                    <ScreenTile
                        title={"Better Performance"}
                        subTitle={"You earn more returns, achieve more of your financial goals and protect your money from devaluation.\n"}
                        color={colors.teal}
                        lastTile={true}
                        /*@ts-ignore  */ // improper typing from expo navigation team when using hooks
                        onPressCreate={()=> navigation.navigate("CreateAccountScreen")}
                        /*@ts-ignore  */ // improper typing from expo navigation team when using hooks
                        onPressLogin={()=> navigation.navigate("LoginScreen")}
                    />
                )
            }

        </View>
    );
}

const styles = StyleSheet.create({
    footerHeader: {
        textAlign: "center",
        fontSize: fontPixel(25),
        fontWeight: "700",
        letterSpacing: -1,
        lineHeight: fontPixel(38),
    },
    footerTagline: {
        textAlign: "center",
        color: "#6a7187",
        fontSize: fontPixel(15),
        letterSpacing: 0.2,
    },
    footerTxtCtn: {
        width: widthPixel(327),
        alignSelf: "center",
        paddingHorizontal: pixelSizeHorizontal(20),
        marginTop: pixelSizeVertical(10),
        rowGap: pixelSizeVertical(10),
    },
    dots: {
        height: heightPixel(8),
        borderRadius: heightPixel(20),
        marginHorizontal: normalise(5),
    },
});

export default Carousel;
