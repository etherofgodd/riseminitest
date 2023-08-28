import {HomeStackScreenProps} from "@/types/navigationTypes";
import {FlatList, Image, ScrollView, TouchableOpacity, View} from "react-native";
import {fontPixel, heightPixel, normalise, pixelSizeHorizontal, pixelSizeVertical, widthPixel} from "@/utils/normalize";
import colors from "@/utils/colors";
import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";
import {SafeAreaView} from "react-native-safe-area-context";
import AppText from "@/components/AppText";
import useAuth from "@/hooks/useAuth";
import {AntDesign, MaterialCommunityIcons} from "@expo/vector-icons";
import {useState} from "react";
import {homeScreenStyles} from "@/screens/dashboard/Home/HomeScreen/homeScreenStyles";
import {DashboardHeader} from "@/components/DashboardHeader";
import {HomeBalanceCard} from "@/components/HomeBalanceCard";
import {CreateAPlan} from "@/components/CreateAPlan";
import {QuoteBadge} from "@/components/QuoteBadge";


// home screen stack is not properly typed, this has been resolved in navigation 6
export default function Index({navigation}: HomeStackScreenProps<"HomeScreen">) {
    const {user} = useAuth();

    const [visible, setVisible] = useState(false)
    return (
        <View
            style={homeScreenStyles.ctn}
        >
            <View style={{position: "absolute"}}>
                <Image
                    source={require("../../../../../assets/app/glossy_bg.png")}
                    style={homeScreenStyles.floatingImg}
                />
            </View>

            <SafeAreaView edges={["top"]} style={{flex: 1}}>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    style={{flexGrow: 1, paddingBottom: normalise(20),}}
                >
                    <View
                        style={homeScreenStyles.innerScreen}
                    >

                        <DashboardHeader name={user?.first_name || "user"}/>
                        <HomeBalanceCard/>

                        <TouchableOpacity
                            style={homeScreenStyles.addMoney}
                        >
                            <MaterialCommunityIcons name={"plus"} size={20} color={colors.teal}/>
                            <AppText
                                style={
                                    homeScreenStyles.addMoneyTxt
                                }
                            >
                                Add Money
                            </AppText>
                        </TouchableOpacity>

                        <View
                            style={
                                homeScreenStyles.section2
                            }
                        >
                            <View
                                style={homeScreenStyles.create}
                            >
                                <AppText
                                    style={homeScreenStyles.createOne}
                                >
                                    Create a plan
                                </AppText>

                                <TouchableOpacity
                                    style={homeScreenStyles.allView}
                                >
                                    <AppText
                                        style={homeScreenStyles.allViewTxt}
                                    >
                                        View all plans
                                    </AppText>
                                    <MaterialCommunityIcons
                                        name={"chevron-right"}
                                        color={colors.text}
                                        size={fontPixel(20)}
                                    />
                                </TouchableOpacity>
                            </View>
                            <AppText
                                style={homeScreenStyles.startTxt}
                            >
                                Start your investment journey by creating a plan
                            </AppText>

                            <View
                                style={{
                                    marginTop: pixelSizeVertical(20)
                                }}
                            >


                                <FlatList
                                    data={[1]}
                                    horizontal
                                    renderItem={() =>
                                        <View>
                                            <AppText>oom</AppText>
                                        </View>}

                                    ListHeaderComponent={
                                        <CreateAPlan
                                            onPress={() => navigation.navigate("Plans", {
                                                screen: "PlanScreen",
                                            })}
                                        />
                                    }
                                />

                                <TouchableOpacity
                                    style={homeScreenStyles.needHelpView}
                                >
                                    <View
                                        style={homeScreenStyles.needHelp1}
                                    >
                                        <View
                                            style={homeScreenStyles.mark}
                                        >
                                            <AntDesign
                                                name={"question"}
                                                color={colors.defaultTeal}
                                                size={fontPixel(24)}
                                            />
                                        </View>
                                        <AppText
                                            style={homeScreenStyles.needHelpTxt}
                                        >
                                            Need help?
                                        </AppText>
                                    </View>

                                    <View
                                        style={homeScreenStyles.contactUs}
                                    >
                                        <AppText style={{color: colors.white, fontWeight: "400"}}>
                                            Contact Us
                                        </AppText>
                                    </View>
                                </TouchableOpacity>


                                <QuoteBadge
                                 name={"Sagan"}
                                 quote={"skmdodm"}
                                />


                                <Image
                                    source={require("../../../../../assets/app/rise_logo.png")}
                                    style={homeScreenStyles.logo}
                                />
                            </View>


                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>

            <ExpoStatusBar
                style={"dark"}
                translucent={true}
            />
        </View>

    )
}

