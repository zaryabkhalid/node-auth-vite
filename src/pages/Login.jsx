import LoginForm from "../components/auth/LoginForm";

const Login = () => {
	return (
		<section className="bg-gradient-to-br from-sky-300 to-sky-600">
			<div className=" container mx-auto min-h-screen flex justify-center items-center">
				<div className="hidden lg:flex-1 lg:flex justify-center items-center h-screen"></div>
				<div className="max-w-full  border border-gray-300 shadow-2xl rounded flex-grow m-4 px-4 py-12 bg-white md:max-w-[500px]  lg:flex-1 ">
					<LoginForm />
				</div>
			</div>
		</section>
	);
};

export default Login;
