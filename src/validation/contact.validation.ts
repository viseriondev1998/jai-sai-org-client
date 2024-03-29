import { object, string } from "yup";

export const ContactInitialValues = {
   message: "",
   fullName: "",
   email: "",
   subject: "",
};  

export const ContactValidationSchema = object().shape({
   message: string().required("message is required"),
   fullName: string().required("fullname is required"),
   email: string().required("email is required"),
});