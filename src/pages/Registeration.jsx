import { Link } from "react-router-dom";
import Button from "../components/Button";
import FormControl from "../components/FormControl";
import { useForm } from "react-hook-form";

const Registeration = () => {
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm();

	const submitData = data => {
		console.log(data);
	};

	return (
		<>
			<section className=" bg-gradient-to-br from-sky-300 to-sky-600 ">
				<div className="container min-h-screen mx-auto flex justify-end items-center">
					<div className="max-w-full bg-white flex-grow mx-2 px-4 md:px-8 py-8 border border-gray-300 rounded shadow-2xl md:max-w-xl">
						<h2 className="text-2xl font-bold text-sky-500 lg:text-5xl text-center my-2">SIGN UP</h2>
						<form onSubmit={handleSubmit(submitData)} noValidate>
							<div className="md:flex md:justify-evenly md:items-center md:gap-x-1">
								<FormControl
									className="flex-1"
									label={"First Name"}
									name={"firstname"}
									type={"text"}
									register={register}
									errors={errors}
									required={true}
								/>
								<FormControl
									className="flex-1"
									label={"Last Name"}
									name={"lastname"}
									type={"text"}
									register={register}
									errors={errors}
									required={true}
								/>
							</div>
							<FormControl label={"Username"} name={"username"} type={"text"} register={register} errors={errors} required={true} />
							<FormControl label={"Email"} name={"email"} type={"email"} register={register} errors={errors} required={true} />
							<FormControl label={"Password"} name={"password"} type={"password"} register={register} errors={errors} required={true} />
							<FormControl
								label={"Confirm Password"}
								name={"confirm-password"}
								type={"password"}
								register={register}
								required={true}
								errors={errors}
							/>

							<Button handleClick={submitData}>Sign up</Button>
						</form>

						<div className="w-full flex justify-center items-center gap-x-2 pt-4 text-base text-sky-500">
							<p>Already have an Account</p>
							<Link className=" underline underline-offset-2 font-semibold" to="/login">
								Go to Login
							</Link>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Registeration;
