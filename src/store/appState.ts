import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface IAppMessage {
    messageType: MessageType;
    message: string;
    activeState: boolean;
}

export type MessageType = "ERROR" | "SUCCESS" | "NONE" | "INFO";

interface AppState {
    pinDetails: {
        isFilled: boolean;
        pin: string
    },
    message: IAppMessage,
}

const initialState: AppState = {
    pinDetails: {
        isFilled: false,
        pin: ""
    },
    message: {
        activeState: false,
        message: "",
        messageType: "NONE"
    },
};

const appStateSlice = createSlice({
    initialState,
    name: "appStateSlice",
    reducers: {
        setPinDetails(state, action: PayloadAction<AppState["pinDetails"]>) {
            state.pinDetails = action.payload;
        },
        setMessage: (payload, action: PayloadAction<IAppMessage>) => {
            payload.message.activeState = action.payload.activeState;
            payload.message.message = action.payload.message;
            payload.message.messageType = action.payload.messageType;
        },
        clearMessage: (state) => {
            state.message = {
                message: "",
                activeState: false,
                messageType: "NONE"
            };
        },
        clearPinDetails: (state) => {
            state.pinDetails = {
                pin: "",
                isFilled: false
            }
        }

    },
});

export const {setPinDetails, clearMessage, setMessage, clearPinDetails} = appStateSlice.actions;

export default appStateSlice.reducer;
