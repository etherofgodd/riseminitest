import {IPlan} from "@/types/plan";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getPlansPlanApiRequest} from "@/apis/plan";

interface InitialState {
    plans: IPlan[];
    loading: boolean;
    error: boolean;
    errorMessage: string;
}

const initialState: InitialState = {
    plans: [],
    error: false,
    errorMessage: "",
    loading: false,
};

export const getUserPlans = createAsyncThunk<
    IPlan[],
    undefined,
    { rejectValue: string }
>("/getUserPlans", async (_, {rejectWithValue}) => {
    try {
        const response = await getPlansPlanApiRequest();
        if (response.ok && response.data) {
            return response.data.items
        } else if (!response.ok) {
            return rejectWithValue(response.data?.message || "Oops! Something happened");
        } else {
            return rejectWithValue("Oops! something unexpected happened happened!");
        }
    } catch (error) {
        return rejectWithValue("Oops! something unexpected happened happened!");
    }
});


const planSlice = createSlice({
    initialState,
    name: "planSlice",
    reducers: {},
    extraReducers(builder) {
        builder.addCase(getUserPlans.rejected, (state, action) => {
            state.error = true;
            state.loading = false;
            state.errorMessage =
                action.payload || "Couldn't fetch plans information";
        });
        builder.addCase(getUserPlans.pending, (state) => {
            state.error = false;
            state.errorMessage = "";
            state.loading = true;
        });
        builder.addCase(getUserPlans.fulfilled, (state, action) => {
            state.error = false;
            state.loading = false;
            state.errorMessage = "";
            state.plans = action.payload;
        });
    },
});


export default planSlice.reducer;
