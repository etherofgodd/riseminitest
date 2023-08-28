import {IRegisterRequest} from "@/types/authTypes";
import {AppPromise} from "@/hooks/useApi";
import apiClient from "@/apis/client";

export const registerApiRequest = (data: IRegisterRequest): AppPromise<any, { message: string; data?: any }> => apiClient.post("/users", data)
