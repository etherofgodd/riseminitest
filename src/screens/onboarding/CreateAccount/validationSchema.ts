import {object, string} from "yup";

export const validationSchema = object().shape({
    emailAddress: string().email().required().label("Email"),
    password: string()
        .required()
        .label("Password")
        .matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/,{
            message:"Invalid Password"
        }),
});
