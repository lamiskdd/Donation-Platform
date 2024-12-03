import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import DonationABI from "./DonationABI.json";
import "./DonatePage.css";

const DonatePage = () => {
  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);
  const [account, setAccount] = useState(null);
  const [donationAmount, setDonationAmount] = useState("");
  const [contract, setContract] = useState(null);
  const [transactionHash, setTransactionHash] = useState(null);

  const contractAddress = "0x9D84CCb8E0090b336c8dAa3B02162411CBcDdaB8"; // Replace with your contract address

  useEffect(() => {
    if (window.ethereum) {
      const newProvider = new ethers.BrowserProvider(window.ethereum);
      setProvider(newProvider);

      newProvider
        .send("eth_requestAccounts", [])
        .then((accounts) => {
          setAccount(accounts[0]);
          newProvider.getSigner().then(setSigner);
        })
        .catch((err) => console.error("Error connecting to MetaMask:", err));
    } else {
      alert("Please install MetaMask to use this feature");
    }
  }, []);

  useEffect(() => {
    if (provider && signer) {
      const donationContract = new ethers.Contract(
        contractAddress,
        DonationABI,
        signer
      );
      setContract(donationContract);
    }
  }, [provider, signer]);

  const handleDonate = async () => {
    if (signer && account) {
      try {
        const valueInWei = ethers.parseUnits(donationAmount, "ether"); // Parse donation amount to Wei

        const tx = await signer.sendTransaction({
          to: contractAddress, // Send to the contract address
          value: valueInWei, // The donation amount in Wei
        });

        const receipt = await tx.wait(); // Wait for transaction to be mined

        alert(
          `Donation Successful! Transaction hash: ${receipt.transactionHash}`
        );
      } catch (error) {
        console.error("Donation Error:", error);
        alert("Error in donation: " + error.message);
      }
    } else {
      alert("Signer or account not available. Please connect MetaMask.");
    }
  };

  return (
    <div className="donate-page">
      <h1 className="title">Donate Now</h1>
      <div className="input-container">
        <input
          type="number"
          value={donationAmount}
          onChange={(e) => setDonationAmount(e.target.value)}
          placeholder="Enter ETH amount"
          className="input"
          min="0.001"
          step="0.001"
        />
        <button onClick={handleDonate} className="send-button">
          Donate with MetaMask
        </button>
      </div>
      {transactionHash && (
        <p className="transaction-hash">
          Transaction Successful! Hash: {transactionHash}
        </p>
      )}
    </div>
  );
};

export default DonatePage;
