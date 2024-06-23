import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import MenuCard from "./MenuCard";
import axios from "axios";
import { useSelector } from "react-redux";

const Menu = () => {
  const user = useSelector((state) => state.user.user);

  const [cart, setCart] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [foodItems, setFoodItems] = useState([]);

  useEffect(() => {
    window.scroll(0, 0);
    fetchFoodItems();
    fetchCartItems();
  }, []);

  useEffect(() => {
    // Check if there are items in the cart to show the popup
    if (cart.length > 0) {
      setShowPopup(true);
    }
  }, [cart]);

  const fetchFoodItems = async () => {
    try {
      const response = await axios.get("https://spices-herbsbackend-production.up.railway.app/api/fooditems");
      setFoodItems(response.data);
    } catch (error) {
      console.error("Error fetching food items:", error);
    }
  };

  const fetchCartItems = async () => {
    try {
      const response = await axios.get(
        `https://spices-herbsbackend-production.up.railway.app/api/cart/getCartItems?userId=${user.id}`
      );
      if (response.status === 200) {
        setCart(response.data);
      } else {
        console.error("Error fetching cart items");
      }
    } catch (error) {
      console.error("Error fetching cart items", error);
    }
  };

  const handleAddToCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(
        (cartItem) => cartItem.foodItem.id === item.id
      );
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.foodItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return [...prevCart, { foodItem: item, quantity: 1 }];
    });
    setShowPopup(true);
  };

  const handleRemoveFromCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(
        (cartItem) => cartItem.foodItem.id === item.id
      );
      if (existingItem.quantity === 1) {
        return prevCart.filter(
          (cartItem) => cartItem.foodItem.id !== item.id
        );
      }
      return prevCart.map((cartItem) =>
        cartItem.foodItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
      );
    });
  };

  const getQuantity = (itemId) => {
    const cartItem = cart.find((cartItem) => cartItem.foodItem.id === itemId);
    return cartItem ? cartItem.quantity : 0;
  };

  return (
    <div>
      <Header />

      <section className="section menu" aria-label="menu-label" id="menu">
        <div className="container">
          <p className="section-subtitle text-center label-2">Special Selection</p>

          <h2 className="headline-1 section-title text-center">Delicious Menu</h2>

          <ul className="grid-list">
            {foodItems.slice(0, 12).map((item) => (
              <MenuCard
                key={item.id}
                imgSrc={item.imageUrl}
                imgAlt={item.name}
                title={item.name}
                price={item.price}
                description={item.description}
                foodItemId={item.id}
                quantity={getQuantity(item.id)}
                onAddToCart={() => handleAddToCart(item)}
                onRemoveFromCart={() => handleRemoveFromCart(item)}
              />
            ))}
          </ul>

          <h2 className="headline-1 section-title text-center">Wines</h2>

          <ul className="grid-list">
            {foodItems.slice(12).map((item) => (
              <MenuCard
                key={item.id}
                imgSrc={item.imageUrl}
                imgAlt={item.name}
                title={item.name}
                price={item.price}
                description={item.description}
                foodItemId={item.id}
                quantity={getQuantity(item.id)}
                onAddToCart={() => handleAddToCart(item)}
                onRemoveFromCart={() => handleRemoveFromCart(item)}
              />
            ))}
          </ul>

          <p className="menu-text text-center">
            During winter daily from{" "}
            <span className="span">7:00 pm</span> to{" "}
            <span className="span">9:00 pm</span>
          </p>

          <img
            src="/images/shape-5.png"
            width="921"
            height="1036"
            loading="lazy"
            alt="shape"
            className="shape shape-2 move-anim"
          />
          <img
            src="/images/shape-6.png"
            width="343"
            height="345"
            loading="lazy"
            alt="shape"
            className="shape shape-3 move-anim"
          />
        </div>
      </section>

      {showPopup && (
        <div className="cart-popup">
          <p>
            Item added to cart! (
            {cart.reduce((total, item) => total + item.quantity, 0)} items)
          </p>
          <Link to="/cart" className="btn btn-primary">
            View Cart
          </Link>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Menu;
