import { Link } from "react-router-dom";
import Button from "../Button";
import FormControl from "../FormControl";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { forgetPasswordSchema } from "../../validations/FormsValidation";

const ForgetPasswordForm = () => {
	const { handleSubmit, register, reset, formState } = useForm({
		mode: "onTouched",
		defaultValues: {
			email: "",
		},
		resolver: yupResolver(forgetPasswordSchema),
	});
	const { errors } = formState;

	const submitData = data => {
		console.log(data);
		reset({ email: "" });
	};

	return (
		<>
			<h2 className="text-center text-2xl font-bold text-sky-500 mb-12 md:text-4xl ">Forget Password</h2>
			<form onSubmit={handleSubmit(submitData)} noValidate>
				<FormControl
					type="email"
					name="email"
					label="Email"
					placeholder="Enter your email for reset password"
					register={register}
					errors={errors}
					required={true}
				/>
				<Button>Send Email</Button>
			</form>
			<div className="flex justify-center items-center my-4">
				<Link className="text-sm text-sky-500 underline underline-offset-1" to="/login">
					Go back
				</Link>
			</div>
		</>
	);
};

export default ForgetPasswordForm;
