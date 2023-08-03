import SignUpForm from "../components/auth/SignUpForm";

const Registeration = () => {
	return (
		<>
			<section className=" bg-gradient-to-br from-sky-300 to-sky-600 ">
				<div className="container min-h-screen mx-auto flex justify-end items-center">
					<SignUpForm />
				</div>
			</section>
		</>
	);
};

export default Registeration;
