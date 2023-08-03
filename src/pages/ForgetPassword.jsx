import ForgetPasswordForm from "../components/auth/ForgetPasswordForm";

const ForgetPassword = () => {
	return (
		<>
			<section className=" bg-gradient-to-br from-sky-300 to-sky-600">
				<div className="container mx-auto min-h-screen flex justify-center items-center">
					<div className="w-[500px] bg-white px-4 py-12 shadow-2xl border border-gray-300 rounded">
						<ForgetPasswordForm />
					</div>
				</div>
			</section>
		</>
	);
};

export default ForgetPassword;
