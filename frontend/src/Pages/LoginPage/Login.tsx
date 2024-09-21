/*
import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from 'react';
import "./Login.css"; 
import { auth } from "../firebase";
import logo from "../../assets/images/lodestar.png";

type Props = {}

const Login = (props: Props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const logIn = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        // Clear input fields after successful login
        setEmail('');
        setPassword('');
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="Sign-In-Container">
      <img src={logo} alt="Company Logo" className="logo" />
      <form onSubmit={logIn}>
        <h1>Log In</h1>
        <input 
          type="email" 
          placeholder="Enter your email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />
        <input 
          type="password" 
          placeholder="Enter your password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
        />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
}

export default Login;
*/


import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from 'react';
import { auth } from "../firebase";
import "./Login.css"; // Import the CSS file
import logo from "../../assets/images/lodestar.png"; // Adjust the path as per your project structure

type Props = {}

const Login = (props: Props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const logIn = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        setEmail('');
        setPassword('');
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="sign-in-container">
      {/* Company Logo */}
      <img src={logo} alt="Company Logo" className="logo" />

      <form onSubmit={logIn}>
        <h1>Log In</h1>
        <input 
          type="email" 
          placeholder="Enter your email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />
        <input 
          type="password" 
          placeholder="Enter your password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
        />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
}

export default Login;