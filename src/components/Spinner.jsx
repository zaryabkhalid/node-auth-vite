import ClipLoader from "react-spinners/ClipLoader";

const Spinner = props => {
	return (
		<div className=" flex justify-center items-center">
			<ClipLoader
				cssOverride={{
					display: "block",
					margin: "0 auto",
				}}
				color={props.color}
				loading={props.submitting}
				size={50}
				aria-label="Loading Spinner"
				data-testid="loader"
			/>
		</div>
	);
};

export default Spinner;
