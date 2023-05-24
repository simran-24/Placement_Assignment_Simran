import { BrowserRouter, Routes, Route } from "react-router-dom";
import TaskDashboard from "./components/TaskDashboard";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route exact path="/login" element={<Login />} />
				<Route exact path="/register" element={<Register />} />
				<Route path="/dashboard" element={<TaskDashboard />} />
			</Routes>
		</BrowserRouter>
	);
}

function PrivateRoute({ children, ...rest }) {
	const isAuthenticated = localStorage.getItem("token") !== null;

	return (
		<Route
			{...rest}
			render={({ location }) =>
				isAuthenticated ? (
					children
				) : (
					<Redirect
						to={{
							pathname: "/login",
							state: { from: location },
						}}
					/>
				)
			}
		/>
	);
}

export default App;
