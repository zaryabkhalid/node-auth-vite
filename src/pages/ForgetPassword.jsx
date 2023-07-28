import { Link } from "react-router-dom";
import Button from "../components/Button";
import FormControl from "../components/FormControl";
import { emailValidation } from "../validations/emailSchema";
import { useForm } from "react-hook-form";

const ForgetPassword = () => {
	const {
		handleSubmit,
		register,
		formState: { errors },
	} = useForm();

	const submitData = data => {
		console.log(data);
	};

	return (
		<>
			<section className=" bg-gradient-to-br from-sky-300 to-sky-600">
				<div className="container mx-auto min-h-screen flex justify-center items-center">
					<div className="w-[500px] bg-white px-4 py-12 shadow-2xl border border-gray-300 rounded">
						<h2 className="text-center text-2xl font-bold text-sky-500 mb-12 md:text-4xl ">Forget Password</h2>
						<form onSubmit={handleSubmit(submitData)} noValidate>
							<FormControl
								type="email"
								name="email"
								label="Email"
								placeholder="Enter your email for reset password"
								register={register}
								validationSchema={emailValidation}
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
					</div>
				</div>
			</section>
		</>
	);
};

export default ForgetPassword;
