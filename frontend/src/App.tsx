import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Pages/LoginPage/Login';
import AuthDetails from './Services/AuthDetails';

function App() {
  return (
    <div className="App">
      <Login />
      <AuthDetails />
    </div>
  );
}

export default App;
