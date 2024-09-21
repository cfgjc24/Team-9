import axios from "axios";

export const getAssignClients = async () => {
	try {
		const response = await axios.get(
			`http://localhost:5000/api/client/clientsWaitlist`
		);
		return response.data;
	} catch (error) {
		console.error(error);
		throw error;
	}
};
