import {PlanStackScreenProps} from "@/types/navigationTypes";
import AppScreen from "@/components/AppScreen";
import AppText from "@/components/AppText";

export default function Index ({navigation}: PlanStackScreenProps<"CreatePlanScreen">){


    return(
        <AppScreen>
            <AppText>
                Hello
            </AppText>
        </AppScreen>
    )
}
