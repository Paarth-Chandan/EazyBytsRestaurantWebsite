import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { Link } from "react-router-dom";

Modal.setAppElement("#root"); // Ensure to set the app element for accessibility

const customStyles1 = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "30.5%", // Set the width of the modal
    height: "81%",
    borderRadius: "20px",
  },
  overlay: {
    zIndex: 1000, // Set a high z-index for the overlay as well
  },
};

const customStyles2 = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "30.5%", // Set the width of the modal
    height: "91%",
    borderRadius: "20px",
  },
  overlay: {
    zIndex: 1000, // Set a high z-index for the overlay as well
  },
};

const Header = () => {
  const [signInVisible, setSignInVisible] = useState(false);
  const [signUpVisible, setSignUpVisible] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    // Get the stored value from localStorage, or default to false if not available
    const storedLoggedIn = window.localStorage.getItem("isLoggedIn");
    return storedLoggedIn ? JSON.parse(storedLoggedIn) : false;
  });

  useEffect(() => {
    // Save the isLoggedIn state to localStorage
    window.localStorage.setItem("isLoggedIn", JSON.stringify(isLoggedIn));
  }, [isLoggedIn]);

  return (
    <div>
      <div className="topbar">
        <div className="container">
          <address className="topbar-item">
            <div className="icon">
              <ion-icon
                name="location-outline"
                aria-hidden="true"
              ></ion-icon>
            </div>
            <span className="span">
              Address
            </span>
          </address>
          <div className="separator"></div>
          <div className="topbar-item item-2">
            <div className="icon">
              <ion-icon name="time-outline" aria-hidden="true"></ion-icon>
            </div>
            <span className="span">Daily : 8.00 am to 10.00 pm</span>
          </div>
          <a href="tel:+11234567890" className="topbar-item link">
            <div className="icon">
              <ion-icon name="call-outline" aria-hidden="true"></ion-icon>
            </div>
            <span className="span">+1 123 456 7890</span>
          </a>
          <div className="separator"></div>
          <a href="mailto:booking@restaurant.com" className="topbar-item link">
            <div className="icon">
              <ion-icon name="mail-outline" aria-hidden="true"></ion-icon>
            </div>
            <span className="span">booking@restaurant.com</span>
          </a>
        </div>
      </div>

      <header className="header" data-header>
        <div className="container">
          <a href="#" className="logo">
            <img
              src="/images/logo.png"
              width="100"
              height="40"
              alt="Grilli - Home"
            />
          </a>
          <nav className="navbar" data-navbar>
            <button
              className="close-btn"
              aria-label="close menu"
              data-nav-toggler
            >
              <ion-icon name="close-outline" aria-hidden="true"></ion-icon>
            </button>
            <a href="#" className="logo">
              <img
                src="/images/logo.png"
                width="160"
                height="50"
                alt="Grilli - Home"
              />
            </a>
            <ul className="navbar-list">
              <li className="navbar-item">
                
                  <div className="separator"></div>
                  <div className="navbar-link hover-underline active">
                  <span className="span "><Link to='/'>Home</Link></span>
                  </div>
                
              </li>
              <li className="navbar-item">
                <a href="#menu" className="navbar-link hover-underline">
                  <div className="separator"></div>
                  <span className="span">Menu</span>
                </a>
              </li>
              <li className="navbar-item">
                <a href="#about" className="navbar-link hover-underline">
                  <div className="separator"></div>
                  <span className="span">About Us</span>
                </a>
              </li>
              <li className="navbar-item">
                <a href="#" className="navbar-link hover-underline">
                  <div className="separator"></div>
                  <span className="span">Our Chefs</span>
                </a>
              </li>
              <li className="navbar-item">
                <a href="#" className="navbar-link hover-underline">
                  <div className="separator"></div>
                  <span className="span">Contact</span>
                </a>
              </li>
              <li className="navbar-item">
                {isLoggedIn ? (
                  <div className="navbar-link hover-underline">
                  <span
                    onClick={() => setIsLoggedIn(false)}
                    className="span "
                  >
                    <Link to='/profile'>View Profile</Link>
                  </span>
                  </div>
                ) : (
                  <span
                    onClick={() => {
                      setSignInVisible(true);
                    }}
                    className="navbar-link hover-underline"
                  >
                    <div className="separator"></div>
                    <span className="span" id="show-signin">
                      Sign In
                    </span>
                  </span>
                )}
              </li>
            </ul>
            <div className="text-center">
              <p className="headline-1 navbar-title">Visit Us</p>
              <address className="body-4">
                Restaurant St, Delicious City, <br />
                London 9578, UK
              </address>
              <p className="body-4 navbar-text">Open: 9.30 am - 2.30pm</p>
              <a
                href="mailto:booking@grilli.com"
                className="body-4 sidebar-link"
              >
                booking@grilli.com
              </a>
              <div className="separator"></div>
              <p className="contact-label">Booking Request</p>
              <a
                href="tel:+88123123456"
                className="body-1 contact-number hover-underline"
              >
                +88-123-123456
              </a>
            </div>
          </nav>
          <a href="#" className="btn btn-secondary">
            <span className="text text-1">Find A Table</span>
            <span className="text text-2" aria-hidden="true">
              Find A Table
            </span>
          </a>
          <button
            className="nav-open-btn"
            aria-label="open menu"
            data-nav-toggler
          >
            <span className="line line-1"></span>
            <span className="line line-2"></span>
            <span className="line line-3"></span>
          </button>
          <div className="overlay" data-nav-toggler data-overlay></div>
        </div>
      </header>

      <Modal
        isOpen={signInVisible}
        onRequestClose={() => setSignInVisible(false)}
        style={customStyles1}
      >
        <SignIn
          setSignInVisible={setSignInVisible}
          setSignUpVisible={setSignUpVisible}
          setIsLoggedIn={setIsLoggedIn}
        />
      </Modal>
      <Modal
        isOpen={signUpVisible}
        onRequestClose={() => setSignUpVisible(false)}
        style={customStyles2}
      >
        <SignUp
          setSignUpVisible={setSignUpVisible}
          setIsLoggedIn={setIsLoggedIn}
        />
      </Modal>
    </div>
  );
};

export default Header;
