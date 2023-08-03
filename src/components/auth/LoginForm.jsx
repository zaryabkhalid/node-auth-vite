import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import FormControl from "../../components/FormControl";
import Spinner from "../../components/Spinner.jsx";
import loginFormSchema from "../../validations/FormsValidation";
import { yupResolver } from "@hookform/resolvers/yup";

import { useForm } from "react-hook-form";

const LoginForm = () => {
	const [showPass, setShowPass] = React.useState(false);
	const { register, handleSubmit, reset, formState } = useForm({
		mode: "onTouched",
		resolver: yupResolver(loginFormSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	});
	const { errors, isDirty, isSubmitted } = formState;

	const submitData = async data => {
		setTimeout(() => {
			console.log(data);
			reset({ email: "", password: "" });
			console.log(isSubmitted);
		}, 3000);
	};

	return (
		<>
			<h2 className="text-center text-4xl font-bold text-sky-500  lg:text-7xl mb-12">Login</h2>
			<form onSubmit={handleSubmit(submitData)} noValidate>
				<FormControl type="email" name="email" label="Email" placeholder="Your Email" errors={errors} register={register} required={true} />

				<FormControl
					type={showPass ? "text" : "password"}
					name="password"
					label="Password"
					placeholder="Your Password"
					errors={errors}
					register={register}
					required={true}
				/>

				<div className=" flex items-center gap-2 mb-5">
					<input
						type="checkbox"
						id="show-pass"
						name="show-pass"
						onChange={() => {
							setShowPass(!showPass);
						}}
					/>
					<label htmlFor="show-pass" className="flex items-center gap-2">
						Show Password
					</label>
				</div>

				{isSubmitted ? (
					<Spinner color={"#ffffff"} submitting={isSubmitted} />
				) : (
					<Button handleClick={submitData} disabled={!isDirty || isSubmitted}>
						Login
					</Button>
				)}
			</form>

			<div className="w-full flex justify-between flex-col items-center gap-y-4 pt-4 text-base font-medium text-sky-500">
				<Link className="self-end underline underline-offset-2  text-sm" to="/forget-password">
					Forget Password
				</Link>
				<div className="w-full flex justify-center items-center gap-x-2 text-base">
					<p>Don&apos;t have an Account?</p>
					<Link className=" text-sm underline text-gray-600 underline-offset-2 " to="/signup">
						Sign up
					</Link>
				</div>
			</div>
		</>
	);
};

export default LoginForm;
