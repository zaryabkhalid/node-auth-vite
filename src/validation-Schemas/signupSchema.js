import * as yup from "yup";

// SignUp Schema Validation
export const signupFormSchema = yup.object().shape({
	firstname: yup
		.string()
		.required("Firstname is required")
		.min(3, "Firstname must contain atleast 3 characters")
		.max(12, "Firstname only contains 12 characters"),
	lastname: yup
		.string()
		.required("Lastname is required")
		.min(3, "Lastname must contain atleast 3 characters")
		.max(12, "Lastname only contains 12 characters"),

	username: yup
		.string()
		.required("Username is required")
		.min(3, "Username contain at least 3 characters ")
		.max(14, "Username contain max 14 character")
		.matches(
			/^(?=.{3,20}$)(?:[a-zA-Z\d]+(?:(?:\.|-|_)[a-zA-Z\d])*)+$/,
			"Username only contains letters and numbers"
		),

	email: yup
		.string()
		.required("Email is required")
		.matches(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/, "Invalid email format"),
	password: yup
		.string()
		.required("Password is required")
		.matches(
			/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,24}$/,
			"Password must contain min 8 characters max 24 characters which includes 1 uppercase 1 lowercase 1 special character and 1 number"
		),

	confirm_password: yup
		.string()
		.required("Confirm password is required")
		.oneOf([yup.ref("password"), null], "Password didn't match"),
});
