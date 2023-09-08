import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import Spinner from "../../components/Spinner.jsx";
import loginFormSchema from "../../validation-Schemas/loginSchema";
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

	const submitData = async (data) => {
		setTimeout(() => {
			console.log(data);
			reset({ email: "", password: "" });
			console.log(isSubmitted);
		}, 3000);
	};

	return (
		<>
			<h2 className="text-center text-4xl font-bold text-sky-500  lg:text-7xl mb-12">
				Login
			</h2>
			<form onSubmit={handleSubmit(submitData)} noValidate>
				<div className="mb-2">
					<label htmlFor="email" className=" text-sky-500 text-sm font-medium">
						Email
					</label>
					<input
						type="email"
						name="email"
						className="border border-sky-400 py-1 px-3 mb-1 w-full focus:outline-1 focus:outline-sky-400 focus:outline-offset-2"
						{...register("email")}
					/>
					<p className=" text-xs text-red-500 ">{errors.email?.message}</p>
				</div>

				<div className="mb-2">
					<label htmlFor="password" className=" text-sky-500 text-sm font-medium">
						Password
					</label>
					<input
						name="password"
						type={showPass ? "text" : "password"}
						className="border border-sky-400 py-1 px-3 mb-1 w-full focus:outline-1 focus:outline-sky-400 focus:outline-offset-2"
						{...register("password")}
					/>
					<p className=" text-xs text-red-500 ">{errors.password?.message}</p>
				</div>

				<div className="flex justify-end">
					<label
						htmlFor="showpass"
						className="flex gap-2 cursor-pointer text-sm text-sky-500 font-medium"
					>
						<input
							type="checkbox"
							name="showpass"
							id="showpass"
							onChange={() => {
								setShowPass(!showPass);
							}}
						/>
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
				<Link
					className="self-end underline underline-offset-2  text-sm"
					to="/forget-password"
				>
					Forget Password
				</Link>
				<div className="w-full flex justify-center items-center gap-x-2 pt-4 text-base text-sky-500">
					<p>Don&apos;t have an Account?</p>
					<Link
						className=" underline underline-offset-2 font-semibold "
						to="/signup"
					>
						Sign up
					</Link>
				</div>
			</div>
		</>
	);
};

export default LoginForm;
