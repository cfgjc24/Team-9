import { Outlet } from 'react-router-dom';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import { UserProvider } from './Context/useAuth';

function App() {
  	return (
		<>
			<UserProvider>
				<NavBar />
				<Outlet />
			</UserProvider>
		</>
	);
}

export default App;
