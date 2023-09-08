import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { signupFormSchema } from "../../validation-Schemas/signupSchema";
import Spinner from "../Spinner";
import { userRegister } from "../../features/auth/authActions";
import Button from "../Button";
import React from "react";

const SignUpForm = () => {
	const navigate = useNavigate();
	const [showPass, setShowPass] = React.useState(false);
	const { isLoading, success } = useSelector((state) => state.auth);
	const dispatch = useDispatch();

	const { register, handleSubmit, formState, reset } = useForm({
		defaultValues: {
			firstname: "",
			lastname: "",
			username: "",
			email: "",
			password: "",
			confirm_password: "",
		},
		resolver: yupResolver(signupFormSchema),
		mode: "all",
	});
	const { errors } = formState;

	// Submitting a form

	const submitData = async (data) => {
		await dispatch(userRegister(data)).unwrap();
		reset();
		navigate("/login", { replace: true });
	};

	return (
		<>
			<div className="w-full bg-white mx-2 px-8 py-8 border border-gray-300 rounded shadow-2xl md:max-w-xl">
				<h2 className="text-2xl font-bold text-sky-500 lg:text-5xl text-center my-8">
					SIGN UP
				</h2>

				{/* Form */}
				<form onSubmit={handleSubmit(submitData)} noValidate>
					<div className=" flex justify-between items-center flex-wrap gap-2 mb-2">
						<div className="flex-1 basis-56">
							<label htmlFor="firstname" className=" text-sky-500 text-sm font-medium">
								Firstname
							</label>
							<input
								className="border border-sky-400 py-1 px-3 mb-1 w-full focus:outline-1 focus:outline-sky-400 focus:outline-offset-2"
								name="firstname"
								type="text"
								{...register("firstname")}
							/>
							<p className=" text-xs text-red-500 ">{errors.firstname?.message}</p>
						</div>

						<div className="flex-1 basis-56">
							<label htmlFor="lastname" className=" text-sky-500 text-sm font-medium">
								Lastname
							</label>
							<input
								className=" border border-sky-400 py-1 px-3 mb-1 w-full focus:outline-1 focus:outline-sky-400 focus:outline-offset-2"
								name="lastname"
								type="text"
								{...register("lastname")}
							/>
							<p className=" text-xs text-red-500 ">{errors.lastname?.message}</p>
						</div>
					</div>

					<div className=" mb-2">
						<label htmlFor="username" className=" text-sky-500 text-sm font-medium">
							Username
						</label>
						<input
							className="border border-sky-400 py-1 px-3 mb-1 w-full focus:outline-1 focus:outline-sky-400 focus:outline-offset-2"
							name="username"
							type="text"
							{...register("username")}
						/>
						<p className=" text-xs text-red-500 ">{errors.username?.message}</p>
					</div>

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

					<div className="mb-2">
						<label
							htmlFor="confirm_password"
							className=" text-sky-500 text-sm font-medium"
						>
							Confirm Password
						</label>
						<input
							name="confirm_password"
							type={showPass ? "text" : "password"}
							className="border border-sky-400 py-1 px-3 mb-1 w-full focus:outline-1 focus:outline-sky-400 focus:outline-offset-2"
							{...register("confirm_password")}
						/>
						<p className=" text-xs text-red-500 ">
							{errors.confirm_password?.message}
						</p>
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

					<Button
						type="submit"
						className=" bg-sky-400 text-white px-4 py-2 w-full flex justify-center items-center gap-x-2"
						isLoading={isLoading}
						success={success}
					>
						{isLoading ? <Spinner color="#ffffff" /> : "Sign up"}
					</Button>
				</form>
				<div className="w-full flex justify-center items-center gap-x-2 pt-4 text-base text-sky-500">
					<p>Already have an Account</p>
					<Link className=" underline underline-offset-2 font-semibold" to="/login">
						Go to Login
					</Link>
				</div>
			</div>
		</>
	);
};

export default SignUpForm;
