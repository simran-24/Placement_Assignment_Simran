import axios from "axios";

const API_BASE_URL = "https://reqres.in/api";

// Register a new user
export const registerUser = async (email, password) => {
	try {
		const response = await axios.post(`${API_BASE_URL}/register`, {
			email,
			password,
		});
		return response.data;
	} catch (error) {
		throw new Error("Registration failed");
	}
};

// Log in with existing user
export const loginUser = async (email, password) => {
	try {
		const response = await axios.post(`${API_BASE_URL}/login`, {
			email,
			password,
		});
		return response.data;
	} catch (error) {
		throw new Error("Login failed");
	}
};
