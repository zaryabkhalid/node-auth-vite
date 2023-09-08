import ClipLoader from "react-spinners/ClipLoader";

const Spinner = (props) => {
	return (
		<span>
			<ClipLoader
				cssOverride={{
					margin: "0 auto",
				}}
				color={props.color}
				loading={props.submitting}
				size={30}
				aria-label="Loading Spinner"
				data-testid="loader"
			/>
		</span>
	);
};

export default Spinner;
