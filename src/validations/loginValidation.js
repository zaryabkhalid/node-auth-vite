import * as yup from "yup";

const loginFormSchema = yup.object().shape({
	email: yup.string("Email should be valid a string").email("Invalid email format").required("Email is required"),
	password: yup.string().required("Password is required"),
});

export default loginFormSchema;
