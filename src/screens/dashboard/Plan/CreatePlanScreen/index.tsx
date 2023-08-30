import AppScreen from "@/components/AppScreen";
import {PlanHeader} from "@/components/Plan/AppHeader";
import {PlanStackScreenProps} from "@/types/navigationTypes";
import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";
import {fontPixel, heightPixel, pixelSizeHorizontal, pixelSizeVertical} from "@/utils/normalize";
import {Dimensions, LayoutAnimation, NativeModules, Platform, TouchableOpacity, View} from "react-native";
import {useEffect, useState} from "react";
import colors from "@/utils/colors";
import {AppButton} from "@/components/AppButton";
import AppText from "@/components/AppText";
import {createPlanStyles} from "@/screens/dashboard/Plan/CreatePlanScreen/createPlanStyles";
import {AppTextInput} from "@/components/AppTextInput";
import {tellUsMoreStyles} from "@/screens/onboarding/TellUsMore/tellUsMoreStyles";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import {useAppDispatch} from "@/hooks/useAppStore";
import {setPlanState} from "@/store/authSlice";
import {IPlanProjection, IPreviewData} from "@/types/plan";
import {calculateMonthsDifference} from "@/utils/helper";
import {useApi} from "@/hooks/useApi";
import {planProjectionApiRequest} from "@/apis/plan";
import {setMessage} from "@/store/appState";


type TSCREENPHASE = "ONE" | "TWO" | "THREE";
const width = Dimensions.get("window").width
const {UIManager} = NativeModules;

if (Platform.OS === "android") {
    if (UIManager.setLayoutAnimationEnabledExperimental) {
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }
}

export default function Index({navigation}: PlanStackScreenProps<"CreatePlanScreen">) {
    const [step, setStep] = useState<TSCREENPHASE>("ONE");
    const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);
    const currentDate = new Date();
    const nextYear = new Date(currentDate);
    nextYear.setFullYear(currentDate.getFullYear() + 1);
    const [dateValue, setDateValue] = useState(nextYear);

    const {request, loading: planProgesssionLoading} = useApi(planProjectionApiRequest)

    const dispatch = useAppDispatch();

    const textFormatter = dateValue ? `${dateValue.getDate()}/${dateValue.getMonth() + 1}/${dateValue.getFullYear()}` : "Choose Date";
    const [customWidth, setCustomWidth] = useState((width - 40) / 3)
    const [targetName, setTargetName] = useState("");
    const [targetAmount, setTargetAmount] = useState("");


    const hideDatePicker = () => {
        setIsDatePickerVisible(false);
    };
    const handleConfirm = (date: Date) => {
        setDateValue(date);
        hideDatePicker();
    };

    useEffect(() => {
        let part = (width - 40) / 3

        if (step == "ONE") {
            setCustomWidth(part)
            LayoutAnimation.configureNext(
                LayoutAnimation.Presets.easeInEaseOut
            );
        } else if (step == "TWO") {
            setCustomWidth(part + part)
            LayoutAnimation.configureNext(
                LayoutAnimation.Presets.easeInEaseOut
            );
        } else if (step == "THREE") {
            setCustomWidth((width - 40))
            LayoutAnimation.configureNext(
                LayoutAnimation.Presets.easeInEaseOut
            );
        }
    }, [step]);

    const onBtnPressed = async () => {
        if (step == "ONE") {
            return targetName && setStep("TWO")
        } else if (step == "TWO") {
            return targetAmount && setStep("THREE")
        }

        const numOfMonth = calculateMonthsDifference(dateValue);

        const monthlyInvestment = Math.abs(+targetAmount / numOfMonth).toFixed(2)

        const getPlanData: IPlanProjection = {
            maturity_date: `${dateValue.getFullYear()}-${(dateValue.getMonth() + 1).toString().padStart(2, "0")}-${dateValue.getDate()}`,
            target_amount: +targetAmount,
            monthly_investment: +monthlyInvestment,
        }

        const {response: planResponse} = await request(getPlanData);

        let returns: number = 0;
        let totalInvestments = 0

        if (planResponse.ok) {
            returns = Number(planResponse.data?.total_returns) || 0;
            totalInvestments = Number(planResponse.data?.total_invested) || 0
        } else {
            return dispatch(setMessage({
                activeState: true,
                message: planResponse.data?.message || "Error occurred please try later",
                messageType: "ERROR"
            }))
        }

        const data: IPreviewData = {
            maturity_date: `${dateValue.getFullYear()}-${(dateValue.getMonth() + 1).toString().padStart(2, "0")}-${dateValue.getDate()}`,
            plan_name: targetName,
            target_amount: +targetAmount,
            estimatedMonthlyInvestment: +monthlyInvestment,
            returns: returns,
            totalInvestment: totalInvestments
        }
        navigation.navigate("PreviewScreen", data)
    }


    return (
        <AppScreen>
            <ExpoStatusBar
                style={"dark"}
                translucent={true}
            />

            <View style={{flex: 1, padding: pixelSizeHorizontal(20)}}>
                <PlanHeader
                    title={step == "ONE" ? "Goal name" : step == "TWO" ? "Target amount" : "Target date"}
                    buttonType={2}
                    onPress={() => {
                        if (step == "ONE") {
                            navigation.goBack()
                        } else if (step == "TWO") {
                            setStep("ONE")
                        } else {
                            setStep("TWO")
                        }
                    }}
                />

                <AppText style={createPlanStyles.question}
                >
                    Question {step == "ONE" ? 1 : step == "TWO" ? 2 : 3} of 3
                </AppText>

                <View
                    style={createPlanStyles.progress}
                >
                    <View
                        style={[createPlanStyles.animatedSection, {
                            width: customWidth,
                        }]}
                    />
                </View>


                <View
                    style={{
                        marginTop: pixelSizeVertical(54)
                    }}
                >

                </View>

                <AppText
                    style={createPlanStyles.questionType}
                >
                    {step == "ONE" ? "What are you saving for" : step == "TWO" ? "How much do need?" : "When do you want to withdraw?"}
                </AppText>


                {
                    step === "ONE" ? (
                        <AppTextInput
                            fieldTitle={"Title"}
                            onChangeText={setTargetName}
                            value={targetName}
                        />
                    ) : step === "TWO" ?
                        (
                            <AppTextInput
                                fieldTitle={"Amount"}
                                keyboardType={"decimal-pad"}
                                onChangeText={setTargetAmount}
                                value={targetAmount}
                            />
                        ) :
                        (
                            <View
                                style={[tellUsMoreStyles.inputCtn, {justifyContent: 'center'}]}
                            >
                                <AppText
                                    style={tellUsMoreStyles.inputTxt}
                                >
                                    Choose a date
                                </AppText>

                                <TouchableOpacity
                                    onPress={() => setIsDatePickerVisible(true)}
                                    style={tellUsMoreStyles.dob}
                                >
                                    <AppText>
                                        {textFormatter}
                                    </AppText>
                                    <MaterialCommunityIcons
                                        name={"calendar-month"}
                                        color={colors.teal}
                                        size={fontPixel(20)}
                                    />
                                </TouchableOpacity>
                            </View>
                        )
                }


                <AppButton
                    title={"Continue"}
                    onPress={onBtnPressed}
                    loading={planProgesssionLoading}
                    style={{
                        marginTop: pixelSizeVertical(26)
                    }}
                />

            </View>

            <DateTimePickerModal
                accentColor={colors.teal}
                textColor={colors.teal}
                buttonTextColorIOS={colors.teal}
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
                date={dateValue}
                minimumDate={nextYear}
            />
        </AppScreen>
    )
}
