import {PlanStackScreenProps} from "@/types/navigationTypes";
import AppText from "@/components/AppText";
import {useApi} from "@/hooks/useApi";
import {getPlanPlanApiRequest} from "@/apis/plan";
import {useAppDispatch} from "@/hooks/useAppStore";
import {setMessage} from "@/store/appState";
import {useEffect, useState} from "react";
import {IPlanId} from "@/types/plan";
import {Dimensions, Image, ScrollView, StyleSheet, TouchableOpacity, View} from "react-native";
import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";
import {fontPixel, heightPixel, pixelSizeHorizontal, pixelSizeVertical, widthPixel} from "@/utils/normalize";
import {SafeAreaView} from "react-native-safe-area-context";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import colors from "@/utils/colors";
import {formatText} from "@/utils/inputFormatter";
import {CommonActions} from "@react-navigation/native";
import {AppButton} from "@/components/AppButton";
import {PlanSectionList} from "@/components/PlanSectionList";
import {TransactionList} from "@/components/TransactionList";


const width = Dimensions.get("window").width
export default function Index({navigation, route}: PlanStackScreenProps<"PlanIdScreen">) {
    const [plan, setPlan] = useState<IPlanId>({
        maturity_date: "",
        created_at: "",
        invested_amount: 0,
        total_returns: 0,
        target_amount: 0,
        plan_name: "",
        id: "",
        returns: [],
        user_id: ""
    })

    const {request} = useApi(getPlanPlanApiRequest)

    const dispatch = useAppDispatch();

    useEffect(() => {
        navigation.addListener("focus", async () => {
            await getIndividualPlanDetails(route.params.id)
        })
    }, [navigation])
    const getIndividualPlanDetails = async (id: string) => {
        const {response} = await request(id);
        if (response.ok) {
            setPlan(response.data!)
        } else {
            dispatch(setMessage({
                messageType: "ERROR",
                message: "Could not load plan",
                activeState: true
            }))
        }
    }

    const [scrollY, setScrollY] = useState(0);

    const handleScroll = (event: any) => {
        setScrollY(event.nativeEvent.contentOffset.y);
    };


    return (
        <View style={styles.container}>
            <ExpoStatusBar
                style={"light"}
                translucent
            />
            <View style={styles.header}>
                <View>
                    <Image
                        source={require("../../../../../assets/app/hero.png")}
                        style={{
                            height: heightPixel(146.94),
                            width,
                            resizeMode: "cover"
                        }}
                    />
                </View>
            </View>
            <SafeAreaView edges={["top"]}>
                <ScrollView
                    contentContainerStyle={styles.scrollContent}
                    showsVerticalScrollIndicator={false}
                    onScroll={handleScroll}
                    scrollEventThrottle={16}
                >
                    <View style={styles.content}>
                        <View style={{
                            alignItems: "center"
                        }}>
                            <AppText
                                style={{
                                    fontSize: fontPixel(15),
                                    fontWeight: "400",
                                    lineHeight: fontPixel(22),
                                    color: colors.text,
                                    marginTop: pixelSizeVertical(20)
                                }}
                            >
                                Plan Balance
                            </AppText>

                            <AppText
                                style={{
                                    fontWeight: "700",
                                    fontSize: fontPixel(24),
                                    lineHeight: fontPixel(26)
                                }}
                            >
                                ${formatText(plan.invested_amount?.toString() || "0")}
                            </AppText>
                            <AppText
                                style={{color: colors.text}}
                            >
                                ~ ₦0.00
                            </AppText>

                            <AppText
                                style={{
                                    fontWeight: "400"
                                }}
                            >
                                Gains
                            </AppText>

                            <AppText
                                style={{
                                    color: "#27BF41",
                                    fontSize: fontPixel(16),
                                    fontWeight: "400"
                                }}
                            >
                                +${formatText(plan.total_returns?.toString())} • +0%
                            </AppText>
                        </View>

                        <View style={{
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-between",
                            marginTop: pixelSizeVertical(23.5)
                        }}>
                            <AppText style={{
                                color: colors.text,
                                fontWeight: "400"
                            }}>{formatText((plan?.invested_amount + plan?.total_returns)?.toString())} achieved</AppText>
                            <AppText style={{
                                color: colors.text,
                                fontWeight: "400"
                            }}>Target {formatText(plan.target_amount?.toString())}</AppText>
                        </View>
                        <View
                            style={
                                {
                                    borderBottomWidth: 5,
                                    borderRadius: heightPixel(5),
                                    borderColor: "#71879C33",
                                    marginVertical: heightPixel(10)
                                }
                            }
                        />

                        <AppButton
                            title={"Fund Plan"}
                            inverted
                            style={{marginVertical: pixelSizeVertical(30)}}/>

                        <PlanSectionList
                            title={"Total earnings"}
                            value={"$" + formatText(plan.total_returns?.toString() || "0")}
                        />

                        <PlanSectionList
                            title={"Current earnings"}
                            value={"$" + formatText(plan.total_returns?.toString() || "0")}
                        />

                        <PlanSectionList
                            title={"Deposit value"}
                            value={"$" + formatText(plan.invested_amount?.toString() || "0")}
                        />

                        <PlanSectionList
                            title={"Balance in Naira (*₦505)"}
                            value={"$" + formatText(plan.invested_amount?.toString() || "0")}
                        />

                        <PlanSectionList
                            title={"Plan created on"}
                            value={(new Date(plan.created_at).toDateString())}
                        />

                        <PlanSectionList
                            title={"Maturity date"}
                            value={(new Date(plan.maturity_date).toDateString())}
                        />

                        <View
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "space-between",
                                marginTop: pixelSizeVertical(30)
                            }}
                        >
                            <AppText
                                style={{
                                    fontSize: fontPixel(18),
                                    fontWeight: "400",
                                }}
                            >
                                Recent transactions
                            </AppText>

                            <AppText
                                style={{
                                    fontWeight: "bold",
                                    color: colors.defaultTeal,
                                    fontSize: fontPixel(15),
                                }}
                            >
                                View All
                            </AppText>
                        </View>

                        <TransactionList transactionType={"IN"}/>
                        <TransactionList transactionType={"OUT"}/>
                        <TransactionList transactionType={"OUT"}/>
                        <TransactionList transactionType={"IN"}/>
                        <TransactionList transactionType={"OUT"}/>
                        <TransactionList transactionType={"IN"}/>
                        <TransactionList transactionType={"IN"}/>
                        <TransactionList transactionType={"OUT"}/>
                        <TransactionList transactionType={"IN"}/>
                        <TransactionList transactionType={"IN"}/>
                        <TransactionList transactionType={"IN"}/>
                        <TransactionList transactionType={"OUT"}/>
                        <TransactionList transactionType={"IN"}/>
                        <TransactionList transactionType={"OUT"}/>
                        <TransactionList transactionType={"IN"}/>
                        <TransactionList transactionType={"OUT"}/>
                        <TransactionList transactionType={"IN"}/>
                        <TransactionList transactionType={"OUT"}/>
                        <TransactionList transactionType={"IN"}/>
                        <TransactionList transactionType={"OUT"}/>
                        <TransactionList transactionType={"IN"}/>

                    </View>
                </ScrollView>
            </SafeAreaView>

            <View
                style={[
                    styles.header,
                    {transform: [{translateY: -scrollY}]},
                ]}
            >
                <View style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width,
                    paddingHorizontal: pixelSizeHorizontal(20),
                    marginTop: pixelSizeVertical(20)
                }}>
                    <TouchableOpacity
                        onPress={() => {
                            const resetAction = CommonActions.reset({
                                index: 0,
                                routes: [{name: 'MainPlanScreen'}],
                            });
                            navigation.dispatch(resetAction);
                        }}
                        style={{
                            height: heightPixel(36),
                            width: heightPixel(36),
                            borderRadius: heightPixel(19),
                            backgroundColor: "#00000066",
                            alignItems: "center",
                            justifyContent: "center",
                        }}>
                        <MaterialCommunityIcons
                            name={"arrow-left"}
                            size={fontPixel(20)}
                            color={colors.white}
                        />
                    </TouchableOpacity>
                    <AppText style={styles.headerText}>{plan.plan_name}</AppText>

                    <TouchableOpacity
                        style={{
                            height: heightPixel(36),
                            width: heightPixel(36),
                            borderRadius: heightPixel(19),
                            backgroundColor: "#00000066",
                            alignItems: "center",
                            justifyContent: "center",
                        }}>
                        <MaterialCommunityIcons
                            name={"dots-vertical"}
                            size={fontPixel(20)}
                            color={colors.white}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    header: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: heightPixel(146.94),
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerText: {
        color: 'white',
        fontSize: fontPixel(24),
        lineHeight: fontPixel(26),
        fontWeight: 'bold',
    },
    scrollContent: {
        marginTop: heightPixel(96.94),
        backgroundColor: colors.white,
        paddingHorizontal: pixelSizeHorizontal(20)
    },
    content: {},
});
