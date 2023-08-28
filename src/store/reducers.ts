import {combineReducers} from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {persistReducer} from "redux-persist";
import appState from "@/store/appState";
import authState from "@/store/authSlice";


const rootReducer = combineReducers({
    appState: appState,
    authState: authState,
});

const persistConfig = {
    key: "root",
    storage: AsyncStorage,
    whitelist: ["appState"],
    blacklist: ["authState"],
    version: 1,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export {persistedReducer};
