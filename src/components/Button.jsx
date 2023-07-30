import { twMerge } from "tailwind-merge";
const Button = ({ children, handleClick, disabled, className }) => {
	const styles = twMerge(
		"w-full inline-block mt-3 py-2 rounded text-white text-base bg-sky-500 hover:bg-sky-600 active:bg-sky-700 focus:outline-none focus:ring focus:ring-sky-300",
		className,
	);

	return (
		<>
			<button className={styles} onClick={handleClick} disabled={disabled}>
				{children}
			</button>
		</>
	);
};

export default Button;
