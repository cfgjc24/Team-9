import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Dashboard from './Pages/Dashboard/Dashboard';

function App() {
  	return (
		<>
			{NavBar()}
			<Dashboard></Dashboard>
		</>
  	);
}

export default App;
