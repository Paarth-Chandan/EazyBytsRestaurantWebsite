import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import axios from "axios";
import { setUser } from './actions/userActions';

const SignUp = ({ setSignUpVisible, setIsLoggedIn }) => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const customer = {
      name,
      email,
      password,
      address
    };

    try {
      const response = await axios.post("https://spices-herbsbackend-production.up.railway.app/api", customer, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) {
        console.log("Customer created successfully", response.data);
        dispatch(setUser(response.data)); // Dispatch setUser action to set user data
        setSignUpVisible(false);
        setIsLoggedIn(true); // Set isLoggedIn to true on successful sign-up
      } else {
        console.error("Error creating customer");
      }
    } catch (error) {
      console.error("Error creating customer", error);
    }
  };

  return (
    <div className="popup">
      <div className="close-btn" onClick={() => setSignUpVisible(false)}>
        <FontAwesomeIcon icon={faClose} />
      </div>
      <div className="form">
        <h2 className="sign-up">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-element">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Enter name"
              className="input-field sign-up"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-element">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter email"
              className="input-field sign-up"
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
              className="input-field sign-up"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-element">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              id="address"
              placeholder="Enter address"
              className="input-field sign-up"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </div>
          <div className="form-element">
            <button type="submit" className="sign-up">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
