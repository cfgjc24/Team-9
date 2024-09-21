import App from "../App";
import Dashboard from "../Pages/Dashboard/Dashboard";
import { createBrowserRouter, Navigate } from "react-router-dom";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			// {
			// 	path: "login",
			// 	element: <LoginPage />,
			// },
			{
				path: "",
				element: <Navigate to="/dashboard" />,
			},
			{
				path: "dashboard",
				element: <Dashboard />,
			},
			// {
			// 	path: "profile",
			// 	element: (
			// 			<ProfilePage />
			// 	),
			// },
		],
	},
]);