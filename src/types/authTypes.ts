export interface IAuthFormTypes {
    emailAddress?: string;
    password?: string;
    firstName?: string;
    lastName?: string;
    nickName?: string;
    phoneNumber?: string;
    dob?: string;
}

export interface IRegisterRequest {
    first_name: string;
    last_name: string;
    email_address: string
    password: string
    date_of_birth: string;
    username?: string;
    phone_number?: string
}


export interface ILoginRequest {
    "email_address": string
    "password": string
}

export interface ILoginResponse {
    "token": string
    "id": string
    "email_address": string
    "first_name": string
    "last_name": string
    "username": string | null,
    "total_balance": number,
    "total_returns": any
}
