import App from "../App";
import Dashboard from "../Pages/Dashboard/Dashboard";
import { createBrowserRouter, Navigate } from "react-router-dom";
import Providers from "../Pages/Providers/Providers";
import Profile from "../Pages/Profile/Profile";
import Login from "../Pages/LoginPage/Login";
import ProtectedRoute from "./ProtectedRoutes";
import OppProtRoute from "./OppProtRoute";

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
				element: (
					<ProtectedRoute>
						<Dashboard />
					</ProtectedRoute>
				),
			},
			{
				path: "providers",
				element: (
					<ProtectedRoute>
						<Providers />,
					</ProtectedRoute>
				),
			},
			{
				path: "profile",
				element: (
					<ProtectedRoute>
						<Profile />,
					</ProtectedRoute>
				),
			},
			{
				path: "login",
				element: (
					<OppProtRoute>
						<Login />,
					</OppProtRoute>
				),
			},
		],
	},
]);
