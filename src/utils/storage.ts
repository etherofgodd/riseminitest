import * as SecureStore from "expo-secure-store";
import jwt_decode from "jwt-decode";
import {ILoginCredentials, IUser} from "@/types/IUser";
import jwtDecode from "jwt-decode";


const TOKEN_KEY = "AUTHTOKEN";
const USER_CREDENTIALS = "USERCREDENTIALS";
const USER_DETAILS = "USERDETAILS";
const USER_PIN = "USERPIN";

export const storeLoginCredentials = async (
    emailAddress: string,
    password: string
) => {
    const data: ILoginCredentials = {
        emailAddress,
        password,
    };

    try {
        await SecureStore.setItemAsync(USER_CREDENTIALS, JSON.stringify(data));
    } catch (error) {
        return error;
    }
};

export const removeLoginCredentials = async () => {
    try {
        await SecureStore.deleteItemAsync(USER_CREDENTIALS);
        console.log('user cleared');
    } catch (error) {
        return error;
    }
};

export const storePin = async (pin: string) => {
    try {
        await SecureStore.setItemAsync(USER_PIN, pin);
    } catch (error) {
        return error;
    }
};

export const clearUserPin = async () => {
    try {
        await SecureStore.deleteItemAsync(USER_PIN);
        console.log('Pin deleted');
    } catch (error) {
        return error;
    }
};

export async function getPin(): Promise<string> {
    try {
        const _pin = await SecureStore.getItemAsync(USER_PIN);
        const pin: string = _pin ? JSON.parse(_pin) : "";
        return pin;
    } catch (error) {
        console.error(error);
        return "";
    }
}

export const getLoginCredentials =
    async (): Promise<ILoginCredentials | null> => {
        try {
            const data = await SecureStore.getItemAsync(USER_CREDENTIALS);
            let res: ILoginCredentials;
            if (data) {
                res = JSON.parse(data);
                return res;
            }
            return null;
        } catch (error) {
            return null;
        }
    };

export interface ITokens {
    token: string
}

const storeToken = async (authTokens: ITokens): Promise<void> => {
    try {
        await SecureStore.setItemAsync(TOKEN_KEY, JSON.stringify(authTokens));
    } catch (error) {
        console.log("Error from storing the tokens ", error);
    }
};

const getToken = async (): Promise<ITokens | null> => {
    try {
        const response = await SecureStore.getItemAsync(TOKEN_KEY);
        if (response) {
            return JSON.parse(response);
        } else {
            return null;
        }
    } catch (error) {
        return null;
    }
};

const getUser = async (): Promise<IUser | null> => {
    const token = await getToken();
    return token ? jwt_decode<IUser>(token.token) : null;
};

export const isTokenExpired = async (token: string): Promise<boolean> => {
    const decodedToken = jwt_decode<IUser>(token);
    let expiredDate = new Date(decodedToken.exp * 1000);
    const moment = new Date();
    return moment < expiredDate;
};

const removeToken = async (): Promise<void> => {
    try {
        await SecureStore.deleteItemAsync(TOKEN_KEY);
    } catch (error) {
    }
};


export async function getValidToken() {
    const token = await getToken();
    if (!token) return null;

    const tokenExpired = validateToken(token);
    const {token: accessToken} = token;
    if (tokenExpired) {
        return accessToken;
    } else {
        // make call to refresh token
    }

    // tempSolution
    return accessToken;
}

function validateToken(token: ITokens) {
    const decodedToken = jwtDecode<IUser>(token.token);
    const now = Math.floor(Date.now() / 1000);
    return now >= decodedToken.exp;
}

export {getToken, getUser, removeToken, storeToken};
