import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface AuthState {
    email: string;
    password: string;
    data: ICreatePlan
}


const initialState: AuthState = {
    email: '',
    password: '',
    data:{
        target_amount: 0,
         plan_name:"",
        maturity_date:""
    }
}

const authStateSlice = createSlice({
    initialState,
    name: "appStateSlice",
    reducers: {
        setAuthState: (state, action: PayloadAction<AuthState>) => {
            state.email = action.payload.email;
            state.password = action.payload.password
        },
        setPlanState: (state, action: PayloadAction<ICreatePlan>)=> {
            state.data = action.payload
        }
    },
});

export const {setAuthState,setPlanState} = authStateSlice.actions;

export default authStateSlice.reducer;
