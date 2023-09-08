import * as yup from "yup";

// Forget Password validation Schema
export const forgetPasswordSchema = yup.object().shape({
	email: yup
		.string("Email should be a valid string")
		.matches(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/, "Invalid Email Format")
		.required("Email is required"),
});
