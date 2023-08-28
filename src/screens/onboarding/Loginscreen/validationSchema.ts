import {object, string} from "yup";

export const validationSchema = object().shape({
    emailAddress: string().email().required().label("Email"),
    password: string()
        .required()
        .label("Password")
});
