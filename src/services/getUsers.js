import axios from "axios";

async function getUsers(setUsers, setLoading) {
	const response = axios.get("https://jsonplaceholder.typicode.com/users");
	const data = (await response).data;
	setUsers(data);
	setLoading(false);
}

export default getUsers;
