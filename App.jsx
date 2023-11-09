// import React, { createContext, useContext, useState } from "react";
// import "./App.css";
// import Login from "./components/Login";
// import Signup from "./components/Signup";
// import Home from "./components/Home";
// import Product from "./components/product";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Logout from "./components/Logout";
// import Productinfo from "./components/Productinfo";
// import ProductDetails from "./components/ProductDetails";
// import Cart1 from "./components/Cart1";
// import product1 from "../src/assets/product.jpg";
// import ShoppingCart1 from "./components/Shoppingcart";
// import Homedata1 from "./components/Homedata";

// export const Contextvalue = createContext(null);

// export default function App() {
//   const [value, setValue] = useState([]);

//   return (
//     <div>
//       <Contextvalue.Provider value={{ setValue, value }}>
//         <BrowserRouter>
//           <Routes>
//             <Route path="/" element={<Login />} />
//             <Route path="/signup" element={<Signup />} />
//             <Route path="/login" element={<Home />} />
//             {/* <Route path="/products" exact element={<Productinfo/>}/> */}
//             <Route path="/products" element={<ShoppingCart1 />} />
//             <Route path="/angle" element={<Login />} />
//             <Route path="/kart" element={<Cart1 />} />
//             <Route path="/home1" element={<Homedata1 />} />
//           </Routes>
//         </BrowserRouter>
//       </Contextvalue.Provider>
//     </div>
//   );
// }
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ContextProvider } from "./components/context"; 

import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";
import ShoppingCart1 from "./components/Shoppingcart";
import Cart1 from "./components/Cart1";
import Homedata1 from "./components/Homedata";

export default function App() {
  return (
    <ContextProvider> 
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Home />} />
          <Route path="/products" element={<ShoppingCart1 />} />
          <Route path="/angle" element={<Login />} />
          <Route path="/kart" element={<Cart1 />} />
          <Route path="/home1" element={<Homedata1 />} />
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  );
}
