import App from "../App";
import Dashboard from "../Pages/Dashboard/Dashboard";
import { createBrowserRouter, Navigate } from "react-router-dom";
import Providers from "../Pages/Dashboard/Providers/Providers";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "",
				element: <Navigate to="/dashboard" />,
			},
			{
				path: "dashboard",
				element: <Dashboard />,
			},
			{
				path: "providers",
				element: <Providers />,
			},
		],
	},
]);