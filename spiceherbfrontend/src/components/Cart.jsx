import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClose,
  faMinus,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import axios from "axios";

const Cart = () => {
  const user = useSelector((state) => state.user.user);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    window.scroll(0, 0);
    fetchCartItems();
  }, []);

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

  const calculateSubtotal = () => {
    return cart.reduce(
      (total, item) => total + item.foodItem.price * item.quantity,
      0
    );
  };

  const calculateTax = (subtotal) => {
    return subtotal * 0.05; // assuming a 5% tax rate
  };

  const calculateTotal = (subtotal, tax) => {
    return subtotal + tax;
  };

  const subtotal = calculateSubtotal();
  const tax = calculateTax(subtotal);
  const total = calculateTotal(subtotal, tax);

  return (
    <div>
      <Header />

      <main className="cart-container menu">
        <h1 className="heading">Shopping Cart</h1>

        <div className="item-flex">
          <section className="checkout">
            <h2 className="section-heading">Address</h2>

            <h1 className="headline-1 section-title">{user.address}</h1>

            <button
              type="button"
              className="btn btn-outline"
              id="payButton"
              onClick={() => {
                window.location.href =
                  "https://payments-test.cashfree.com/forms/paarthchandan";
              }}
            >
              <b>Pay</b>
              <span id="payAmount">
                Rs.
                {total.toFixed(2)}
              </span>
            </button>
          </section>

          <section className="cart">
            <div className="cart-item-box">
              <h2 className="section-heading">Order Summary</h2>
              {cart.map((item) => (
                <div className="product-card" key={item.foodItem.id}>
                  <div className="card">
                    <div className="img-box">
                      <img
                        src={item.foodItem.imageUrl}
                        alt={item.foodItem.name}
                        width="80px"
                        className="product-img"
                      />
                    </div>

                    <div className="detail">
                      <h4 className="product-name">{item.foodItem.name}</h4>

                      <div className="wrapper">
                        <div className="product-qty">
                          <button id="decrement">
                            <FontAwesomeIcon
                              icon={faMinus}
                              className="decrement"
                            />
                          </button>

                          <span id="quantity">{item.quantity}</span>

                          <button id="increment">
                            <FontAwesomeIcon icon={faPlus} />
                          </button>
                        </div>

                        <div className="price">
                          <span className="price">
                            Rs. {item.foodItem.price.toFixed(2)}
                          </span>
                        </div>
                      </div>
                    </div>

                    <button id="product-close-btn">
                      <FontAwesomeIcon icon={faClose} />
                    </button>
                  </div>
                </div>
              ))}

              <div className="wrapper">
                <div className="discount-token">
                  <label htmlFor="discount-token" className="label-default">
                    Gift Card/Discount code
                  </label>

                  <div className="wrapper-flex">
                    <input
                      type="text"
                      name="discount-token"
                      id="discount-token"
                      className="input-field"
                    />

                    <button className="btn btn-outline">Apply</button>
                  </div>
                </div>

                <div className="amount">
                  <div className="subtotal">
                    <span>Subtotal</span>{" "}
                    <span>
                      <span id="subtotal">Rs. {subtotal.toFixed(2)}</span>
                    </span>
                  </div>

                  <div className="tax">
                    <span>Tax</span>{" "}
                    <span>
                      <span id="tax">Rs. {tax.toFixed(2)}</span>
                    </span>
                  </div>

                  <div className="shipping">
                    <span>Shipping</span>{" "}
                    <span>
                      <span id="shipping">Rs. 0.00</span>
                    </span>
                  </div>

                  <div className="total">
                    <span>Total</span>{" "}
                    <span>
                      <span id="total">Rs. {total.toFixed(2)}</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

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
      </main>

      <Footer />
    </div>
  );
};

export default Cart;

{
  /* <main className="cart-container">
  <h1 className="heading">Shopping Cart</h1>

  <div className="item-flex">
    <section className="checkout">
      <h2 className="section-heading">Payment Details</h2>

      <div className="payment-form">
        <div className="payment-method">
          <button className="method selected">
            <span>Credit Card</span>
          </button>
          <button className="method">
            <span>PayPal</span>
          </button>
        </div>

        <form action="#">
          <div className="cardholder-name">
            <label htmlFor="cardholder-name" className="label-default">
              Cardholder name
            </label>
            <input
              type="text"
              name="cardholder-name"
              id="cardholder-name"
              className="input-field"
            />
          </div>

          <div className="card-number">
            <label htmlFor="card-number" className="label-default">
              Card number
            </label>
            <input
              type="text"
              name="card-number"
              id="card-number"
              className="input-field"
            />
          </div>

          <div className="input-flex">
            <div className="expire-date">
              <label htmlFor="expire-date" className="label-default">
                Expiration date
              </label>

              <div className="input-flex">
                <input
                  type="text"
                  name="month"
                  placeholder="Month"
                  id="expire-date"
                  className="input-field"
                />
                <span className="divide">/</span>
                <input
                  type="text"
                  name="year"
                  placeholder="Year"
                  id="expire-date"
                  className="input-field"
                />
              </div>
            </div>

            <div className="cvv">
              <label htmlFor="cvv" className="label-default">
                CVV
              </label>
              <input type="text" name="cvv" id="cvv" className="input-field" />
            </div>
          </div>
        </form>
      </div>

      <button className="btn btn-outline">
        <b>Pay</b>
        <span id="payAmount">${total.toFixed(2)}</span>
      </button>
    </section>

    <section className="cart">
      <div className="cart-item-box">
        <h2 className="section-heading">Order Summary</h2>
        {cart.map((item) => (
          <div className="product-card" key={item.foodItem.id}>
            <div className="card">
              <div className="img-box">
                <img
                  src={item.foodItem.imageUrl}
                  alt={item.foodItem.name}
                  width="80px"
                  className="product-img"
                />
              </div>

              <div className="detail">
                <h4 className="product-name">{item.foodItem.name}</h4>

                <div className="wrapper">
                  <div className="product-qty">
                    <button id="decrement">
                      <FontAwesomeIcon icon={faMinus} className="decrement" />
                    </button>

                    <span id="quantity">{item.quantity}</span>

                    <button id="increment">
                      <FontAwesomeIcon icon={faPlus} />
                    </button>
                  </div>

                  <div className="price">
                    <span className="price">
                      Rs. {item.foodItem.price.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>

              <button id="product-close-btn">
                <FontAwesomeIcon icon={faClose} />
              </button>
            </div>
          </div>
        ))}

        <div className="wrapper">
          <div className="discount-token">
            <label htmlFor="discount-token" className="label-default">
              Gift Card/Discount code
            </label>

            <div className="wrapper-flex">
              <input
                type="text"
                name="discount-token"
                id="discount-token"
                className="input-field"
              />

              <button className="btn btn-outline">Apply</button>
            </div>
          </div>

          <div className="amount">
            <div className="subtotal">
              <span>Subtotal</span>{" "}
              <span>
                <span id="subtotal">Rs. {subtotal.toFixed(2)}</span>
              </span>
            </div>

            <div className="tax">
              <span>Tax</span>{" "}
              <span>
                <span id="tax">Rs. {tax.toFixed(2)}</span>
              </span>
            </div>

            <div className="shipping">
              <span>Shipping</span>{" "}
              <span>
                <span id="shipping">Rs. 0.00</span>
              </span>
            </div>

            <div className="total">
              <span>Total</span>{" "}
              <span>
                <span id="total">Rs. {total.toFixed(2)}</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</main>; */
}
