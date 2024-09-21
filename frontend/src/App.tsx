import { Outlet } from 'react-router-dom';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import { UserProvider } from './Context/useAuth';
import Button from './Components/EmergencyButton/Button';

function App() {
	const handleEmergencyClick = () => {
	  alert('Emergency button clicked!');
  	};

	return (
		<UserProvider>
			<NavBar />
			<Button onClick={handleEmergencyClick}>EMERGENCY!</Button>
			<Outlet />
		</UserProvider>
	);
	}

export default App;
