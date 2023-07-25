const Button = ({ label, handleClick }) => {
	return (
		<>
			<button className=" border-transparent bg-white text-sky-500 text-base py-2 px-4 rounded-md" onClick={handleClick}>
				{label}
			</button>
		</>
	);
};

export default Button;
