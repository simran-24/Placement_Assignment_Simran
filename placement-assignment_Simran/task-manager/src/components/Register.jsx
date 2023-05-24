import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../api";

function Register() {
	const navigate = useNavigate();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");

	const handleRegister = async (e) => {
		e.preventDefault();

		try {
			await registerUser(email, password);
			navigate("/login");
		} catch (error) {
			setError("Registration failed. Please try again.");
		}
	};

	return (
		<div>
			<h1>Register</h1>
			<form onSubmit={handleRegister}>
				<div>
					<label>Email</label>
					<input
						type="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
					/>
				</div>
				<div>
					<label>Password</label>
					<input
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
					/>
				</div>
				{error && <p>{error}</p>}
				<button type="submit">Register</button>
			</form>
		</div>
	);
}

export default Register;
