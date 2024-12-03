// import React from "react";
// import "./DonatePage.css";
// import { useNavigate } from "react-router-dom";
// const DonatePage = () => {
//   const navigate = useNavigate();

//   const handleSend = () => {
//     const amount = document.getElementById("amount").value;
//     if (amount) {
//       navigate("/metamask", { state: { amount } }); // Pass amount to MetaMaskDonation
//     } else {
//       alert("Please enter an amount.");
//     }
//   };

//   return (
//     <div className="donate-page">
//       <h1 className="title">Donate Now</h1>
//       <div className="input-container">
//         <input
//           type="number"
//           id="amount"
//           placeholder="Enter ETH amount"
//           className="input"
//           min="0.001"
//           step="0.001"
//         />
//         <button onClick={handleSend} className="send-button">
//           Send
//         </button>
//       </div>
//     </div>
//   );
// };

// export default DonatePage;
