import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import axios from "axios";
import { setUser } from "./actions/userActions";
import { useDispatch } from 'react-redux';

const SignIn = ({ setSignInVisible, setSignUpVisible, setIsLoggedIn }) => {

  const dispatch = useDispatch();
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async () => {
    try {
      const response = await axios.get(`https://spices-herbsbackend-production.up.railway.app/api/email/${email}`);

      if (response.status === 200) {
        const userData = response.data;

        // Check if the password from the database matches the input password
        if (userData.password === password) {
          dispatch(setUser(response.data));
          setSignInVisible(false);
          setIsLoggedIn(true);
          // Perform actions after successful sign-in, e.g., set state or set cookies
        } else {
          console.log("Incorrect password");
          // Handle incorrect password scenario
        }
      } else {
        console.error("Error fetching user data");
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  return (
    <div className="popup">
      <div className="close-btn" onClick={() => setSignInVisible(false)}>
        <FontAwesomeIcon icon={faClose} />
      </div>
      <div className="form">
        <h2>Sign In</h2>
        <div className="form-element">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            placeholder="Enter email"
            className="input-field"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-element">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter password"
            className="input-field"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-element">
          <button onClick={handleSignIn}>Sign In</button>
        </div>
        <div className="form-element">
          <button
            onClick={() => {
              setSignInVisible(false);
              setSignUpVisible(true);
            }}
          >
            Sign Up
          </button>
        </div>
        <div className="form-element">
          <a href="#">Forgot Password?</a>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
