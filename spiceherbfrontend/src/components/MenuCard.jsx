import React, { useState } from 'react';
import { faIndianRupee, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector } from 'react-redux';
import axios from 'axios';

const MenuCard = ({ imgSrc, imgAlt, title, badge, price, description, foodItemId, quantity, onAddToCart, onRemoveFromCart }) => {
  const user = useSelector(state => state.user.user);
  const [addingToCart, setAddingToCart] = useState(false);

  const addToCart = async () => {
    if (!user) {
      console.error('User is not logged in');
      return;
    }

    if (quantity === 0) {
      setAddingToCart(true);
    }

    const cartItem = {
      customer: { id: user.id },
      foodItem: { id: foodItemId },
      quantity: 1,
    };

    try {
      const response = await axios.post('https://spices-herbsbackend-production.up.railway.app/api/cart/add', cartItem, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 200) {
        console.log('Item added to cart successfully', response.data);
        onAddToCart(); // Call the parent handler
      } else {
        console.error('Error adding item to cart');
      }
    } catch (error) {
      console.error('Error adding item to cart', error);
    }
  };

  const incrementQuantity = async () => {
    const newQuantity = quantity + 1;
    await updateCartItem(newQuantity);
    onAddToCart(); // Call the parent handler to update the cart
  };

  const decrementQuantity = async () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      await updateCartItem(newQuantity);
      onRemoveFromCart(); // Call the parent handler to update the cart
    } else if (quantity === 1) {
      setAddingToCart(false); // Revert back to "Add to Cart" when quantity is 0
      await updateCartItem(0);
      onRemoveFromCart(); // Call the parent handler to update the cart
    }
  };

  const updateCartItem = async (newQuantity) => {
    if (!user) {
      console.error('User is not logged in');
      return;
    }

    const cartItem = {
      customer: { id: user.id },
      foodItem: { id: foodItemId },
      quantity: newQuantity,
    };

    try {
      const response = await axios.post('https://spices-herbsbackend-production.up.railway.app/api/cart/update', cartItem, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 200) {
        console.log('Cart item updated successfully', response.data);
      } else {
        console.error('Error updating cart item');
      }
    } catch (error) {
      console.error('Error updating cart item', error);
    }
  };

  return (
    <li>
      <div className="menu-card hover:card">
        <figure className="card-banner img-holder" style={{ width: '100px', height: '100px' }}>
          <img src={imgSrc} width="100" height="100" loading="lazy" alt={imgAlt} className="img-cover" />
        </figure>

        <div>
          <div className="title-wrapper">
            <h3 className="title-3">
              <a href="#" className="card-title">
                {title}
              </a>
            </h3>

            {badge && <span className="badge label-1">{badge}</span>}
            <span className="span title-2"><FontAwesomeIcon icon={faIndianRupee} className='rupee' />{price}</span>
          </div>

          <p className="card-text label-1">{description}</p>

          {quantity === 0 ? (
            <button className="menu-card-btn" onClick={addToCart}>
              Add to Cart
            </button>
          ) : (
            <div className="menu-card-btn">
              <button onClick={decrementQuantity} className="decrement-btn">
                <FontAwesomeIcon icon={faMinus} />
              </button>
              <span className="quantity">{quantity}</span>
              <button onClick={incrementQuantity} className="increment-btn">
                <FontAwesomeIcon icon={faPlus} />
              </button>
            </div>
          )}
        </div>
      </div>
    </li>
  );
};

export default MenuCard;