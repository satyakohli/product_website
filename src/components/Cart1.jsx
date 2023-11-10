import React, { useContext, useState } from "react";
import Home from "./Home";
import "./Cart.css";
import { ContextValue } from "./context";

export default function Cart1() {
  const cart = localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : null;

  const [cartItems, setCartItems] = useState(cart);
  const { value, setValue } = useContext(ContextValue);

  // const removeItem = (item) => {
  //   const updatedCart = cartItems.filter((cartItem) => cartItem.id !== item.id);
  //   localStorage.setItem("cart", JSON.stringify(updatedCart));
  //   setCartItems(updatedCart);
  // };

  const removeItem = (item) => {
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    const itemIndex = existingCart.findIndex(
      (cartItem) => cartItem.id === item.id
    );

    if (itemIndex !== -1) {
      existingCart.splice(itemIndex, 1);
      localStorage.setItem("cart", JSON.stringify(existingCart));
      setCartItems(existingCart);
    }
  };
  const increaseQuantity = (item) => {
    const updatedCart = cartItems.map((cartItem) => {
      if (cartItem.id === item.id) {
        return { ...cartItem, quantity: (cartItem.quantity || 1) + 1 };
      }
      return cartItem;
    });
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCartItems(updatedCart);
  };

  const prices = cartItems.map((item) => item.price);
  const totalPrice1 = prices.reduce((total, price) => total + price, 0);
  const totalPrice = cartItems.reduce((total, item) => {
    const discountedPrice =
      item.price - item.price * (item.discountPercentage / 100);
    return total + discountedPrice;
  }, 0);
  const numberOfItems = cartItems.length;

  return (
    <div>
      <Home />

      <div className="value_data">
        {/* {cartItems.map((val) => (
          <li key={val.id}>
            <div>
              {val.id}.<br />
              {val.title}
              <br />
              {val.brand}
              <br />
              {val.category}
              <br />
              {val.description}
              <br />
              Price: ${val.price}
              <br />
              Image: <br />
              <img src={val?.thumbnail} /> <button onClick={() => removeItem(val)}>Remove</button>
              <br />
              Discount Percentage: {val.discountPercentage}
              <br />
              Rating: {val.rating}
              <br />
              Stock: {val.stock}
              <br />
             
            </div>
          </li>
        ))} */}
        <div className="mapping">
          {cartItems.map((val) => (
            <div className="card-items">
              <div style={{ margin: "1rem" }}>
                <img
                  src={val?.thumbnail}
                  style={{ width: "6rem", height: "6rem" }}
                />
                <button onClick={() => removeItem(val)}>Remove</button>
              </div>
              <div style={{ margin: "1rem" }}>
                <p>{val.title}</p>
                <p> {val.brand}</p>
                <p>{val.category}</p>
                <p>${val.price}</p>
                <p style={{ color: "green" }}>
                  {val.discountPercentage}%Off 1 offer applied
                </p>
              </div>
              <div>
                <p style={{ margin: "1.2rem" }}>
                  Delivery by Wed Nov 15 | <span className="money">₹40</span>
                  <span className="free">Free</span>
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="amount">
          <h4>
            Price ({cartItems.length} items){" "}
            <span style={{ paddingLeft: "2.5rem" }}>${totalPrice1}</span>
          </h4>
          <h5>
            Number of items:{" "}
            <span style={{ paddingLeft: "2.5rem" }}>{numberOfItems}</span>
          </h5>
          <h4>
            Delivery Charges:
            <span style={{ color: "green", paddingLeft: "1rem" }}>Free</span>
          </h4>
          <h3 style={{ paddingTop: "1rem" }}>
            Total Amount:{" "}
            <span style={{ paddingLeft: "1rem", color: "black" }}>
              ${totalPrice}
            </span>
          </h3>
        </div>
      </div>
    </div>
  );
}
