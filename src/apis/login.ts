import apiClient from "@/apis/client";
import {ILoginRequest, ILoginResponse} from "@/types/authTypes";
import {AppPromise} from "@/hooks/useApi";
import {ISession} from "@/types/IUser";

export const loginApiRequest = (data: ILoginRequest): AppPromise<ILoginResponse, any> => apiClient.post("/sessions", data)

export const getUserApiRequest = (): AppPromise<ISession, any> => apiClient.get("/sessions")
export const getQuotesApiRequest = (): AppPromise<TQuote, any> => apiClient.get("/quotes")


export type TQuote = {
    quote: string;
    author: string;
}
