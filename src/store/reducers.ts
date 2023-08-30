import {combineReducers} from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {persistReducer} from "redux-persist";
import appState from "@/store/appState";
import authState from "@/store/authSlice";
import profileSlice from "@/store/profileSlice";
import planSlice from "@/store/planSlice";


const rootReducer = combineReducers({
    appState: appState,
    authState: authState,
    profileSlice: profileSlice,
    planSlice: planSlice,
});

const persistConfig = {
    key: "root",
    storage: AsyncStorage,
    whitelist: ["appState", "profileSlice", "planSlice"],
    blacklist: ["authState"],
    version: 1,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export {persistedReducer};
