import {object, string} from "yup";

export const validationSchema = object().shape({
    firstName: string().min(3).required().label("First Name"),
    lastName: string().min(3).required().label("Last Name"),
    nickName: string().min(3).label("Nick Name").matches(/^[^\s]*$/, 'Nick Name cannot contain spaces'),


});
