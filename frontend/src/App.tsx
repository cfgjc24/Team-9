import './App.css';
import { Outlet } from "react-router";
import NavBar from './Components/NavBar/NavBar';
import Dashboard from './Pages/Dashboard/Dashboard';

function App() {
  	return (
		<>
			<NavBar />
			<Outlet />
		</>
	);
}

export default App;
