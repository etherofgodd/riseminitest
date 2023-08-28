export type IUser = {
    id: string;
    email_address: string
    first_name: string;
    last_name: string;
    username: string | null,
    iat: number,
    exp: number
}


export type ILoginCredentials = {
    emailAddress: string;
    password: string
}
