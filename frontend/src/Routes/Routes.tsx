import App from "../App";
import Dashboard from "../Pages/Dashboard/Dashboard";
import { createBrowserRouter, Navigate } from "react-router-dom";
import Providers from "../Pages/Providers/Providers";
import Profile from "../Pages/Profile/Profile";
import Assign from "../Pages/Assign/Assign";

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
            {
                path: "profile",
                element: <Profile />,
            },
			{
                path: "assign",
                element: <Assign />,
            }
		],
	},
]);