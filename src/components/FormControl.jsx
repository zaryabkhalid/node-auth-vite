import { twMerge } from "tailwind-merge";

const FormControl = (props) => {
	const {
		label,
		name,
		type,
		placeholder,
		errors,
		register,
		validationSchema,
		required,
		className,
	} = props;
	const style = twMerge(
		"block py-2 px-2 rounded border outline-none focus:outline-none relative",
		className
	);

	return (
		<div className=" w-full flex flex-col justify-evenly gap-y-1  my-1">
			<label
				className={`${
					required
						? "block after:content-['*'] after:ml-0.5 after:text-red-500 "
						: ""
				} `}
			>
				{label}
			</label>
			<input
				type={type}
				autoComplete="off"
				id={name}
				placeholder={placeholder}
				className={style}
				{...register(name, validationSchema)}
			/>
			<p className=" my-1 text-red-600 text-xs">{errors[name]?.message}</p>
		</div>
	);
};

export default FormControl;
