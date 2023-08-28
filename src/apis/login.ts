import apiClient from "@/apis/client";
import {ILoginRequest, ILoginResponse} from "@/types/authTypes";
import {AppPromise} from "@/hooks/useApi";

export const loginApiRequest = (data: ILoginRequest): AppPromise<ILoginResponse, { message: string; data?: any }> => apiClient.post("/sessions", data)
