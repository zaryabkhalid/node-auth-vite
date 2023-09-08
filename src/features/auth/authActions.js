import { createAsyncThunk } from "@reduxjs/toolkit";
import { userRegisterApiCall } from "./authCallouts";

export const userRegister = createAsyncThunk(
	"auth/userRegister",
	async (userData, thunkAPI) => {
		try {
			const data = await userRegisterApiCall(userData);
			return data;
		} catch (error) {
			if (error.response && error.response.data.message) {
				console.log(error.response.data.message);
				return thunkAPI.rejectWithValue(error.response.data.message);
			} else {
				console.log(error.message);
				return thunkAPI.rejectWithValue(error.message);
			}
		}
	}
);
