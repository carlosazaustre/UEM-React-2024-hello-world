import { useState, useEffect } from "react";
import Header from "./components/Header";
import getUsers from "./services/getUsers";
import "./App.css";

function App() {
	const [username, setUsername] = useState(null);
	const [password, setPassword] = useState(null);
	const [error, setError] = useState(null);

	function handleSubmit(event) {
		event.preventDefault();
		if (!username || !password) {
			setError("Username and password are required");
		}

		console.log("Form submitted");
		console.log("Username:", username);
		console.log("Password:", password);
	}

	return (
		<>
			<Header title="Users" />
			{error && <p style={{ color: "red" }}>{error}</p>}
			<form onSubmit={handleSubmit}>
				<input
					onChange={(e) => setUsername(e.target.value)}
					type="text"
					placeholder="Username"
				/>
				<br />
				<input
					onChange={(e) => setPassword(e.target.value)}
					type="password"
					placeholder="Password"
				/>
				<br />
				<button type="submit">Login</button>
			</form>
		</>
	);
}

export default App;
