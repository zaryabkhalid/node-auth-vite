import { twMerge } from "tailwind-merge";

const FormControl = props => {
	const { label, name, type, placeholder, errors, register, validationSchema, required, className } = props;
	const style = twMerge("border border-gray-400 py-2 px-3 rounded outline-none text-base focus:border focus:border-sky-500", className);

	return (
		<div className=" w-full flex flex-col gap-2 my-3">
			<label className={`${required ? "after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm" : ""} focus-within:text-sky-500`}>
				{label}
			</label>
			<input type={type} autoComplete="off" id={name} placeholder={placeholder} className={style} {...register(name, validationSchema)} />
			<p className="text-red-600 text-xs">{errors[name]?.message}</p>
		</div>
	);
};

export default FormControl;
