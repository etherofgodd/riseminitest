import {PlanStackScreenProps} from "@/types/navigationTypes";
import AppScreen from "@/components/AppScreen";
import AppText from "@/components/AppText";
import {FlatList, View} from "react-native";
import {fontPixel, pixelSizeVertical} from "@/utils/normalize";

import {PlanCard} from "@/components/PlanCard";
import {CreateAPlan} from "@/components/CreateAPlan";
import {useAppSelector} from "@/hooks/useAppStore";

export default function Index({navigation, route}: PlanStackScreenProps<"MainPlanScreen">) {

    const {plans} = useAppSelector(state => state.planSlice)

    return (
        <AppScreen>

            <View
                style={{
                    padding: 20
                }}
            >
                <AppText
                    style={{
                        alignSelf: "center",
                        fontSize: fontPixel(32),
                        lineHeight: 35,
                        fontWeight: "bold",
                        marginBottom: pixelSizeVertical(30)
                    }}
                >
                    Plans
                </AppText>


                <FlatList
                    data={plans}
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

            </View>

        </AppScreen>
    )
}
