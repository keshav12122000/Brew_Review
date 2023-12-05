import logo from './logo.svg';
import React, { useState } from "react";
import './App.css';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import AuthDetails from './components/AuthDetails';
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  const [showingUp, setShowingUp] = useState(true);
  const toggleForm = () => {
    setShowingUp(!showingUp);
  };
  return (
   
    <BrowserRouter>
    <Routes>
      <Route path="/" element={ <div>
    {showingUp ? (
     <SignIn toggleForm={toggleForm} />
     ) : (
     <SignUp toggleForm={toggleForm} />
     )}
      <AuthDetails />
      </div>}>
      </Route>
      <Route path="home" element={<Home  />} />
  </Routes>
  </BrowserRouter>
    
 
  );

}

export default App;
