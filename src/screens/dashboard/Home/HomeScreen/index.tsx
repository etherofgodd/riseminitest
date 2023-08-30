import {HomeStackScreenProps} from "@/types/navigationTypes";
import {FlatList, Image, ScrollView, TouchableOpacity, View} from "react-native";
import {fontPixel, heightPixel, normalise, pixelSizeHorizontal, pixelSizeVertical, widthPixel} from "@/utils/normalize";
import colors from "@/utils/colors";
import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";
import {SafeAreaView} from "react-native-safe-area-context";
import AppText from "@/components/AppText";
import useAuth from "@/hooks/useAuth";
import {AntDesign, MaterialCommunityIcons} from "@expo/vector-icons";
import {useEffect, useState} from "react";
import {homeScreenStyles} from "@/screens/dashboard/Home/HomeScreen/homeScreenStyles";
import {DashboardHeader} from "@/components/DashboardHeader";
import {HomeBalanceCard} from "@/components/HomeBalanceCard";
import {CreateAPlan} from "@/components/CreateAPlan";
import {QuoteBadge} from "@/components/QuoteBadge";
import {useAppDispatch, useAppSelector} from "@/hooks/useAppStore";
import {fetchUserInfo} from "@/store/profileSlice";
import {useApi} from "@/hooks/useApi";
import {getQuotesApiRequest, TQuote} from "@/apis/login";
import {getUserPlans} from "@/store/planSlice";
import {PlanCard} from "@/components/PlanCard";


// home screen stack is not properly typed, this has been resolved in navigation 6
export default function Index({navigation}: HomeStackScreenProps<"HomeScreen">) {
    const dispatch = useAppDispatch();

    const {user} = useAppSelector(state => state.profileSlice);
    const {plans} = useAppSelector(state => state.planSlice)

    const [quoutes, setQuoutes] = useState<TQuote>({
        author: "Carl Sagan",
        quote: "We have no intention of rotating capital out of strong multi-year investments because they’ve recently done well or because ‘growth’ has out performed ‘value’."
    })

    const {request} = useApi(getQuotesApiRequest)

    useEffect(() => {

        const res = navigation.addListener("focus", () => {
            dispatch(fetchUserInfo())
            dispatch(getUserPlans())
            onLoad();
        })

        return res

    }, [navigation])

    const onLoad = async () => {
        const {response} = await request();

        if (response.ok) {
            setQuoutes(response.data || {
                author: "Carl Sagan",
                quote: "We have no intention of rotating capital out of strong multi-year investments because they’ve recently done well or because ‘growth’ has out performed ‘value’."
            })
        }
    }

    console.log("plans", plans)

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
                        <HomeBalanceCard balance={user.total_balance}/>

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
                                    onPress={() => navigation.navigate("Plans", {
                                        screen: "MainPlanScreen",
                                    })}
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
                                    data={plans}
                                    extraData={plans}
                                    showsHorizontalScrollIndicator={false}
                                    horizontal
                                    renderItem={({item, index}) =>
                                        <PlanCard
                                            title={item.plan_name}
                                            price={item.target_amount.toString()}
                                            index={index}
                                            onPress={() => navigation.navigate("Plans", {
                                                screen: "PlanIdScreen",
                                                params: {
                                                    id: item.id
                                                }
                                            })
                                            }
                                        />
                                    }
                                    ListHeaderComponent={
                                        <CreateAPlan
                                            onPress={() => navigation.navigate("Plans", {
                                                screen: "PlanScreen",
                                            })
                                            }
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
                                    name={quoutes.author}
                                    quote={quoutes.quote}
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

