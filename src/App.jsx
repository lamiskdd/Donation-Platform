import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DonatePage from "./DonatePage";
import DonationWebsite from "./DonationWebsite";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DonationWebsite />} />
        <Route path="/MetaMaskDonation" element={<DonatePage />} />
      </Routes>
    </Router>
  );
}

export default App;
