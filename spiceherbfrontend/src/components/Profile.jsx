import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Header from "./Header";
import Footer from "./Footer";

const Profile = () => {
  const user = useSelector((state) => state.user.user);

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const handleLogout = () => {
    // Update localStorage to reflect the logout
    window.localStorage.setItem("isLoggedIn", JSON.stringify(false));
  };

  return (
    <div>
      <Header />
      {user ? (
        <section id="profile">
          <div className="section__pic-container">
            <img
              src="/images/special-dish-banner.jpg"
              alt="John Doe profile picture"
            />
          </div>

          <div className="section__text">
            <p className="section__text__p1">Hey, </p>
            <h1 className="title headline-1 section-title">{user.name}</h1>
            <h3 className=" title-4 card-title">{user.email}</h3>
            <h3 className=" title-4 card-title">{user.address}</h3>
            <div className="btn-container">
              <button
                onClick={handleLogout}
                className="menu-card-btn"
              >
                Logout
              </button>
            </div>
            <div id="socials-container"></div>
          </div>
        </section>
      ) : (
        <p>Please sign up or log in.</p>
      )}
      <Footer />
    </div>
  );
};

export default Profile;
