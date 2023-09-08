import { createSlice } from "@reduxjs/toolkit";
import { userRegister } from "./authActions";

const initialState = {
	isLoading: false,
	success: false,
	error: null,
	data: {},
};

export const authSlice = createSlice({
	name: "auth",
	initialState: initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(userRegister.pending, (state) => {
				state.isLoading = true;
				state.error = null;
				state.success = false;
				state.data = {};
			})
			.addCase(userRegister.fulfilled, (state, action) => {
				state.isLoading = false;
				state.data = action.payload;
				state.success = action.payload.success;
				state.error = null;
			})
			.addCase(userRegister.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
				state.data = {};
				state.success = false;
			});
	},
});

export default authSlice.reducer;
