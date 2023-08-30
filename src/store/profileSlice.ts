import {ISession, IUser} from "@/types/IUser";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getUserApiRequest, TQuote} from "@/apis/login";

interface InitialState {
    user: ISession;
    loading: boolean;
    error: boolean;
    errorMessage: string;
}

const initialState: InitialState = {
    user: {
        first_name: "",
        exp: 0,
        iat: 0,
        email_address: "",
        id: "",
        last_name: "",
        username: "",
        total_balance: 0,
        total_returns: 0
    },
    error: false,
    errorMessage: "",
    loading: false,
};

export const fetchUserInfo = createAsyncThunk<
    ISession,
    undefined,
    { rejectValue: string }
>("/getUserInfo", async (_, {rejectWithValue}) => {
    try {
        const response = await getUserApiRequest();
        if (response.ok && response.data) {
            return response.data
        } else if (!response.ok) {
            return rejectWithValue(response.data?.message || "Oops! Something happened");
        } else {
            return rejectWithValue("Oops! something unexpected happened happened!");
        }
    } catch (error) {
        return rejectWithValue("Oops! something unexpected happened happened!");
    }
});


export const userSlice = createSlice({
    initialState,
    name: "userSlice",
    reducers: {
        resetUserState() {
            return initialState;
        },
    },
    extraReducers(builder) {
        builder.addCase(fetchUserInfo.rejected, (state, action) => {
            state.error = true;
            state.loading = false;
            state.errorMessage =
                action.payload || "Couldn't fetch profile information";
        });
        builder.addCase(fetchUserInfo.pending, (state) => {
            state.error = false;
            state.errorMessage = "";
            state.loading = true;
        });
        builder.addCase(fetchUserInfo.fulfilled, (state, action) => {
            state.error = false;
            state.loading = false;
            state.errorMessage = "";
            state.user = {...state.user, ...action.payload};
        });
    },
});

export const {resetUserState} = userSlice.actions;

export default userSlice.reducer;
