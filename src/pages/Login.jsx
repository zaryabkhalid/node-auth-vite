import { passwordValidation } from "../validations/passwordSchema";
import { emailValidation } from "../validations/emailSchema";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "../components/Button";
import FormControl from "../components/FormControl";
const Login = () => {
	const [showPass, setShowPass] = useState(false);

	const submitData = data => {
		console.log(data);
	};
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	return (
		<section className="bg-gradient-to-br from-sky-300 to-sky-600">
			<div className=" container mx-auto min-h-screen flex justify-center items-center">
				<div className="hidden lg:flex-1 lg:flex justify-center items-center h-screen"></div>
				<div className="max-w-full  border border-gray-300 shadow-2xl rounded flex-grow m-4 px-4 py-12 bg-white md:max-w-[500px]  lg:flex-1 ">
					<h2 className="text-center text-4xl font-bold text-sky-500  lg:text-7xl mb-12">Login</h2>
					<form onSubmit={handleSubmit(submitData)} noValidate>
						<FormControl
							type="email"
							name="email"
							label="Email"
							placeholder="Your Email"
							errors={errors}
							register={register}
							required={true}
							validationSchema={emailValidation}
						/>

						<FormControl
							type={showPass ? "text" : "password"}
							name="password"
							label="Password"
							placeholder="Your Password"
							errors={errors}
							register={register}
							validationSchema={passwordValidation}
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
						<Button handleClick={submitData}>Login</Button>
					</form>

					<div className="w-full flex justify-between flex-col items-center gap-y-4 pt-4 text-base text-sky-500">
						<Link className="self-end font-medium underline underline-offset-2" to="/forget-password">
							Forget Password
						</Link>
						<div className="w-full flex justify-center items-center gap-x-2 text-base text-sky-500">
							<p>Don&apos;t have an Account?</p>
							<Link className=" underline underline-offset-2 font-semibold" to="/signup">
								Go to SignUp
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Login;
