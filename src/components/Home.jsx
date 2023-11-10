import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import image from "../assets/product.jpg";
import {AiOutlineLogout} from 'react-icons/ai'

import angledown from "../assets/angle_down.svg";
import "./home.css";
// import Logout from "./Logout";

export default function Home() {
  const navigate = useNavigate ()
  const [isDropDownVisible, setDropDownVisible] = useState(false);

  const toggleDropDown = () => {
    setDropDownVisible(!isDropDownVisible);
  };

  const cart = localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : null;
const logOutButton = () =>{
  navigate("/");
}


  return (
    <div className="green">
      <div className="navbar">
        <div>
          <nav className="navbar_left">
            <img className="product_tag" src={image} />
            <ul>
              <li>
                <Link to="/home1">Homepage</Link>
              </li>
              <li>
                <Link to="/products">Products</Link>
              </li>
              <li>
                <Link to="/kart">
                  <a href="">cart ({cart?.length})</a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div>
          <nav className="navbar_right">
            <button className="log_out" onClick={logOutButton}>
              <AiOutlineLogout />
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
}
