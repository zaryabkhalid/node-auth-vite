import axios from "../../api/axios";

export const userRegisterApiCall = async (userData) => {
	const { firstname, lastname, username, email, password, confirm_password } =
		userData;
	try {
		const { data } = await axios.post(
			"/register",
			{ firstname, lastname, username, email, password, confirm_password },

			{
				headers: {
					"Content-Type": "application/json",
				},
			}
		);
		return data;
	} catch (error) {
		console.log(error);
		if (axios.isCancel(error)) {
			console.log("Request was canceled");
		} else {
			if (error.response) {
				console.log(error.response.data);
				return error.response.data;
			} else if (error.request) {
				console.log(error.request);
				return error;
			} else {
				console.log(error.message);
				return error.message;
			}
		}
	}
};
