import * as yup from "yup";

// Login Schema Validation
const loginFormSchema = yup.object().shape({
	email: yup
		.string("Email should be valid a string")
		.matches(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/, "Invalid email format")
		.required("Email is required"),
	password: yup.string().required("Password is required"),
});

// SignUp Schema Validation

export const signupFormSchema = yup.object().shape({
	firstname: yup
		.string()
		.min(3, "Firstname must contain atleast 3 characters")
		.max(12, "Firstname only contains 12 characters")
		.required("Firstname is required"),
	lastname: yup
		.string()
		.min(3, "Lastname must contain atleast 3 characters")
		.max(12, "Lastname only contains 12 characters")
		.required("Lastname is required"),

	username: yup
		.string()
		.matches(/^(?=.{3,20}$)(?:[a-zA-Z\d]+(?:(?:\.|-|_)[a-zA-Z\d])*)+$/, "Username only contains letters and numbers")
		.min(3, "Username contain at least 3 characters ")
		.max(20, "Username contain at least 3 characters")
		.min(3, "Username contain max 20 character")
		.required("Username is required")
		.max(14, "Username contain max 14 character")
		.required("Username is required"),

	email: yup
		.string("Email should be valid a string")
		.matches(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/, "Invalid email format")
		.required("Email is required"),
	password: yup
		.string()
		.matches(
			/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,24}$/,
			"Password must contain min 8 characters max 24 characters which includes 1 uppercase 1 lowercase 1 special character and 1 number",
		)
		.required("Password is required"),

	"confirm-password": yup
		.string()
		.required("Please confirm your password")
		.oneOf([yup.ref("password"), null], "Password didn't match"),
});

// Forget Password validation Schema
export const forgetPasswordSchema = yup.object().shape({
	email: yup
		.string("Email should be a valid string")
		.matches(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/, "Invalid Email Format")
		.required("Email is required"),
});

export default loginFormSchema;
