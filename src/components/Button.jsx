import { twMerge } from "tailwind-merge";
const Button = ({ children, type, isLoading, success, className }) => {
	const styles = twMerge(
		"w-full inline-block mt-3 py-2 rounded text-white text-base bg-sky-500 hover:bg-sky-600 focus:outline-none ",
		className
	);

	return (
		<>
			<button className={styles} type={type} disabled={isLoading && !success}>
				{children}
			</button>
		</>
	);
};

export default Button;
