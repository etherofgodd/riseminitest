import {PlanStackScreenProps} from "@/types/navigationTypes";
import AppScreen from "@/components/AppScreen";
import AppText from "@/components/AppText";
import {PlanHeader} from "@/components/Plan/AppHeader";
import {View} from "react-native";
import {fontPixel, pixelSizeVertical, widthPixel} from "@/utils/normalize";
import colors from "@/utils/colors";
import {formatText} from "@/utils/inputFormatter";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {AppButton} from "@/components/AppButton";
import {previewScreenStyles} from "@/screens/dashboard/Plan/PreviewScreen/previewScreenStyesl";
import {ICreatePlan} from "@/types/plan";
import {useApi} from "@/hooks/useApi";
import {createPlanApiRequest} from "@/apis/plan";
import {useAppDispatch} from "@/hooks/useAppStore";
import {setMessage} from "@/store/appState";

export default function Index({navigation, route}: PlanStackScreenProps<"PreviewScreen">) {

    const dueDate = new Date(route.params.maturity_date);

    const {request, loading} = useApi(createPlanApiRequest);

    const dispatch = useAppDispatch()
    const onAgreePressed = async () => {
        const data: ICreatePlan = {
            maturity_date: route.params.maturity_date,
            plan_name: route.params.plan_name,
            target_amount: route.params.target_amount
        };

        const {response} = await request(data);

        if (!response.ok) {
            dispatch(setMessage({
                activeState: true,
                message: response.data?.message || "Can't create plan at the moment.",
                messageType: "ERROR"
            }))
        } else {
            navigation.navigate("SuccessScreen", {
                message: "You just created a plan",
                id: response.data.id
            })
        }
    }

    return (
        <AppScreen>

            <View style={{padding: pixelSizeVertical(20)}}>
                <PlanHeader
                    title={"Review"}
                    buttonType={2}
                    onPress={navigation.goBack}
                />

                <View
                    style={previewScreenStyles.header}
                >
                    <AppText
                        style={previewScreenStyles.title}
                    >
                        {route.params.plan_name}
                    </AppText>
                    <AppText
                        style={previewScreenStyles.principalAmout}
                    >
                        ${formatText(route.params.target_amount.toString())}
                    </AppText>
                    <AppText
                        style={previewScreenStyles.year}
                    >
                        by {dueDate.toDateString()}
                    </AppText>
                </View>
                <View
                    style={previewScreenStyles.view}
                >
                    <View style={previewScreenStyles.noteOne}>
                        <View style={previewScreenStyles.dotOne}/>
                        <AppText
                            style={previewScreenStyles.dotOneTxt}
                        >
                            Investments • ${formatText(route.params.totalInvestment.toString())}
                        </AppText>
                    </View>

                    <View style={previewScreenStyles.noteOne}>
                        <View style={previewScreenStyles.dotTwo}/>
                        <AppText
                            style={previewScreenStyles.dotOneTxt}
                        >
                            Returns • ${formatText(route.params.returns.toString())}
                        </AppText>
                    </View>

                </View>

                <View
                    style={
                        previewScreenStyles.estimate
                    }
                >
                    <AppText
                        style={{
                            color: colors.text,
                            fontWeight: "400"
                        }}
                    >
                        Estimated monthly investment
                    </AppText>
                    <AppText
                        style={previewScreenStyles.estimateTxt}>
                        ${route.params.estimatedMonthlyInvestment}
                    </AppText>
                </View>

                <View
                    style={previewScreenStyles.line}
                />

                <View
                    style={previewScreenStyles.infoView}
                >
                    <MaterialCommunityIcons name={"information-outline"} color={colors.teal} size={fontPixel(24)}/>

                    <View
                        style={{
                            maxWidth: widthPixel(263)
                        }}
                    >
                        <AppText
                            style={previewScreenStyles.infoTxt}
                        >
                            Returns not guaranteed. Investing involves risk. Read our Disclosures.
                        </AppText>
                    </View>
                </View>

                <AppText
                    style={previewScreenStyles.updatetxt}
                >
                    These are your starting settings, they can always be updated.
                </AppText>

                <AppButton
                    title={"Agree & Continue"}
                    onPress={onAgreePressed}
                    loading={loading}
                />

                <AppButton
                    title={"Start over"}
                    inverted
                    style={{marginTop: 10}}
                    onPress={() => navigation.navigate("PlanScreen")}
                />
            </View>

        </AppScreen>
    )
}
