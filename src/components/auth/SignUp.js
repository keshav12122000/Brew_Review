import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebase";
import "bootstrap/dist/css/bootstrap.min.css";
import "./SignUp.css"; // Add a separate CSS file for styling
// import SignUp from "./components/auth/SignUp";
// import "./components/auth/SignUp.css"; // Import the CSS file

const SignUp = ({ toggleForm }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="sign-in-container center-form">
      <form onSubmit={signUp}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-info">
          Sign Up
        </button>
        <p className="signin-text">
          Already have an account?
          <button type="button" className="btn btn-secondary" onClick={toggleForm}>
            Sign In Here
          </button>
        </p>
      </form>
    </div>
  );
};

export default SignUp;

