import axios from "axios";

export const getAllMapClients = async () => {
	try {
		const response = await axios.get(
			`http://localhost:5000/api/map/getAllEmployeesPos`
		);
		return response.data;
	} catch (error) {
		console.error(error);
		throw error;
	}
};
