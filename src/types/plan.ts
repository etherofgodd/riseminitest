export interface ICreatePlan {
    "plan_name": string;
    "target_amount": number;
    "maturity_date": string;
}

export interface IPreviewData extends ICreatePlan {
    totalInvestment: number;
    returns: number;
    estimatedMonthlyInvestment: number
}


export interface IPlanProjectionResponse {
    "total_invested": number,
    "total_returns": string | null;
}


export interface IPlanProjection {
    monthly_investment: number;
    target_amount: number;
    maturity_date: string
}

export interface IPlan {
    "id": string;
    "created_at": string;
    "plan_name": string;
    "invested_amount": number;
    "total_returns": number;
    "target_amount": number,
    "maturity_date": string,
    "user_id": string
}

export interface IPlanId {
    "id": string;
    "created_at": string
    "plan_name": string;
    "invested_amount": number;
    "total_returns": number;
    "target_amount": number;
    "maturity_date": string,
    "user_id": string,
    "returns": any[]
}
