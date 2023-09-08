import * as yup from "yup";

// Login Schema Validation
const loginFormSchema = yup.object().shape({
	email: yup
		.string()
		.required("Email is required")
		.matches(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/, "Invalid email format"),
	password: yup.string().required("Password is required"),
});

export default loginFormSchema;
