// import React, { useState } from "react";
// import angledown from "../assets/angle_down.svg";
// import { Link } from "react-router-dom";

// function Logout() {
//   const [isDropDownVisible, setDropDownVisible] = useState(false);

//   const toggleDropDown = () => {
//     setDropDownVisible(!isDropDownVisible);
//   };

//   const handleOptionClick = (option) => {
//     if (option === "Logout") {
//     } else if (option === "Cart") {
//     }

//     setDropDownVisible(false);
//   };

//   return (
//     <div>
  
//       <button onClick={toggleDropDown} className="dropdown-button">
//         <img src={angledown} />
//       </button>
//       {isDropDownVisible && (
//         <div className="dropdown-content">
//           <nav>
//             <ul>
          
//               <li>
//                 <Link to={"/"}>Logout</Link>
//               </li>
//               {/* <li onClick={() => handleOptionClick("Cart")}>Cart</li> */}
//             </ul>
//           </nav>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Logout;
