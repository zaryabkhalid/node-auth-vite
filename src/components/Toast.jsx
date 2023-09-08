function Toast({ message, success, error }) {
	return (
		<>
			<p
				className={
					success
						? " bg-green-400 text-white py-1 text-center"
						: error
						? "bg-red-400 text-white py-1 text-center"
						: null
				}
			>
				{message}
			</p>
		</>
	);
}

export default Toast;
