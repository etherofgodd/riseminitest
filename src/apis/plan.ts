import apiClient from "@/apis/client";
import {AppPromise} from "@/hooks/useApi";
import {ICreatePlan, IPlan, IPlanId, IPlanProjection, IPlanProjectionResponse} from "@/types/plan";

export const planProjectionApiRequest = (data: IPlanProjection): AppPromise<IPlanProjectionResponse, {
    message: string;
    data?: any
}> => apiClient.get(`/plans/projection?monthly_investment=${data.monthly_investment}&target_amount=${data.target_amount}&maturity_date=${data.maturity_date}`)
export const createPlanApiRequest = (data: ICreatePlan): AppPromise<any, {
    message: string;
    data?: any
}> => apiClient.post(`/plans`, data)
export const getPlansPlanApiRequest = (): AppPromise<{ item_count: number, items: IPlan[] }, {
    message: string;
    data?: any
}> => apiClient.get(`/plans`)
export const getPlanPlanApiRequest = (id: string): AppPromise<IPlanId, {
    message: string;
    data?: any
}> => apiClient.get(`/plans/${id}`)
