import { number, object, string } from "yup";

export const DonationInitialValues = {
   amount: 0,
   userName: "",
   email: "",
   mobile: "",
   userId: "",
   status: "NOT_PERFORMED",
};  

export const DonationValidationSchema = object().shape({
   amount: number().required("Amount is required"),
   userName: string().required("Name is required"),
   email: string().required("Email is required").email("Invalid email"),
   mobile: string().required("Mobile is required"),
   userId: string().required("User ID is required"),
});