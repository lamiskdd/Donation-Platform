import React from "react";
import "./App.css";
import { Link } from "react-router-dom";
// Import images for the website
import logo from "./assets/logo.jpg";
import img1 from "./assets/img1.jpg";
import img2 from "./assets/img2.jpg";
import img3 from "./assets/img3.jpg";
import img4 from "./assets/img4.jpg";
import img5 from "./assets/img5.jpg";
import img6 from "./assets/img6.jpg";
import img7 from "./assets/img7.jpg";
import img8 from "./assets/img8.jpg";
import video from "./assets/videoplayback (online-video-cutter.com).mp4";

function DonationWebsite() {
  const scrollToMetaMask = () => {
    const metaMaskButton = document.getElementById("donateWithMetaMask");
    if (metaMaskButton) {
      metaMaskButton.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div>
      <div className="fullContainer banner" id="homeSection">
        <header>
          <div className="container">
            <div className="logo">
              <img src={logo} alt="Save Gaza Kids" />
            </div>
            <nav>
              <ul>
                <li>
                  <a href="#homeSection">Home</a>
                </li>
                <li>
                  <a href="#aboutSection">About US</a>
                </li>
                <li>
                  <a href="#programSection">Programs</a>
                </li>
                <li>
                  <a href="#educationSection">Education</a>
                </li>
                <li>
                  <a href="#gallerySection">Gallery</a>
                </li>
                <li>
                  <a href="#joinusSection">Join Us</a>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        <div className="container">
          <h1>
            Together We can <span>Save Lives</span>
          </h1>
          <p>
            Children in Gaza are suffering every day. They lack food, clean
            water, and medicine because of the conflict. Many have lost their
            homes and families, leaving them scared and alone. By donating, we
            can help give them shelter, food, and hope for a better future. Even
            a small contribution can make a big difference in their lives.
          </p>
          <button>Start with a little</button>
        </div>
      </div>

      <section className="fullContainer" id="aboutSection">
        <div className="container">
          <h2 className="sectionTitle">About Us</h2>
          <p>
            Save Gaza Kids is a platform dedicated to helping children in Gaza.
            We ensure secure and transparent donations, providing food, shelter,
            and hope to those who need it most. Together, we can make a
            difference in their lives.
          </p>
          <div className="cards">
            <div className="donationBox">
              <div className="title">Give Donation</div>
              <p>
                Every contribution helps provide food, shelter, and a better
                future. Thank you for your support!
              </p>
              <button onClick={scrollToMetaMask}>Donate Now</button>
            </div>
            <div className="volunteerBox">
              <div className="title">Become a Volunteer</div>
              <p>
                Every contribution helps provide food, shelter, and a better
                future. Thank you for your support!
              </p>
              <button>Become now</button>
            </div>
            <div className="scholarship">
              <div className="title">Give scholarship</div>
              <p>
                Every contribution helps provide food, shelter, and a better
                future. Thank you for your support!
              </p>
              <button>Give Now</button>
            </div>
          </div>
        </div>
      </section>

      <section className="programs" id="programSection">
        <div className="container">
          <h2 className="sectionTitle">Programs</h2>
          <div className="boxContainer">
            <div className="box">
              <div className="cardImage"></div>
              <div className="programTitle">Healthcare to every child</div>
              <div className="donationCount">
                Provide essential medical care to those <span>in need</span>
              </div>
              <button>Heal</button>
            </div>

            <div className="box">
              <div className="cardImage"></div>
              <div className="programTitle">Nutritious Meals for Children</div>
              <div className="donationCount">
                Ensure every child has access to <span>healthy food</span>
              </div>
              <button>Provide Meals</button>
            </div>

            <div className="box">
              <div className="cardImage"></div>
              <div className="programTitle">Build Wells in Communities</div>
              <div className="donationCount">
                Bring clean and safe drinking water to <span>remote areas</span>
              </div>
              <button>Build Wells</button>
            </div>

            <div className="box">
              <div className="cardImage"></div>
              <div className="programTitle">Books and Supplies for Schools</div>
              <div className="donationCount">
                Equip students with the resources they need for{" "}
                <span>a brighter future</span>
              </div>
              <button>Educate</button>
            </div>
          </div>
        </div>
      </section>

      <section className="education" id="educationSection">
        <video autoPlay muted loop className="videoPlayer">
          <source src={video} type="video/mp4" />
        </video>
        <div className="container">
          <div className="sectionTitle">Education</div>
          <div className="educationContainer">
            <h3>
              Education is Essential For <br />
              <strong>BETTER FUTURE</strong>
            </h3>
            <p>
              Education is a lifeline for Gaza’s children, offering them hope
              and a chance to build a brighter future despite the challenges
              they face. It empowers them with knowledge and skills, helping
              them break the cycle of poverty and envision a better tomorrow.
              Through education, they can dream, grow, and contribute to
              rebuilding their community.
            </p>
            <button>Explore Now</button>
          </div>
        </div>
      </section>

      <section className="gallery" id="gallerySection">
        <div className="container">
          <div className="sectionTitle">Gallery</div>
          <div className="galleryContainer">
            <div className="item">
              <span className="title">Image1</span>
              <img src={img1} alt="img1" className="src" />
            </div>
            <div className="item">
              <span className="title">Image2</span>
              <img src={img2} alt="img2" className="src" />
            </div>
            <div className="item">
              <span className="title">Image3</span>
              <img src={img3} alt="img3" className="src" />
            </div>
            <div className="item">
              <span className="title">Image4</span>
              <img src={img4} alt="img4" className="src" />
            </div>
            <div className="item">
              <span className="title">Image5</span>
              <img src={img5} alt="img5" className="src" />
            </div>
            <div className="item">
              <span className="title">Image6</span>
              <img src={img6} alt="img6" className="src" />
            </div>
            <div className="item">
              <span className="title">Image7</span>
              <img src={img7} alt="img7" className="src" />
            </div>
            <div className="item">
              <span className="title">Image8</span>
              <img src={img8} alt="img8" className="src" />
            </div>
          </div>
        </div>
      </section>

      <section className="sectionjoinus" id="joinusSection">
        <div className="container">
          <div className="sectionTitle">
            <span>DONATE NOW</span> & SAVE LIVES
          </div>
          <p>
            Be a part of our mission to bring hope to Gaza’s children. Your
            donation, big or small, can change lives by providing essentials
            like food, education, and shelter. Together, we can create a
            brighter future—join us today!
          </p>
          <button className="joinNow">JOIN US</button>
          <button className="donate">
            <Link to="/MetaMaskDonation" id="donateWithMetaMask">
              DONATE NOW USING METAMASK
            </Link>
          </button>
        </div>
      </section>

      <footer>
        <div className="container">
          <div className="newsLetterContainer">
            <img src={logo} alt="" />
            <p>
              Thank you for supporting our mission to help Gaza’s children.
              Enter your email below to join our community, receive updates, and
              make a lasting impact. Together, we can create hope and change
              lives!
            </p>
            <input type="text" placeholder="Email" />
          </div>
          <div className="linksContainer">
            <div className="title">Useful Links</div>
            <ul>
              <li>
                <a href="#homeSection">Home</a>
              </li>
              <li>
                <a href="#aboutSection">About US</a>
              </li>
              <li>
                <a href="#programSection">Programs</a>
              </li>
              <li>
                <a href="#educationSection">Education</a>
              </li>
            </ul>
          </div>
          <div className="contactContainer">
            <div className="title">Contact Us</div>
            <ul>
              <li>
                <span className="phone">Phone:</span> <span>+012 365 987</span>
              </li>
              <li>
                <span className="email">Email:</span>{" "}
                <span>savegaza@help.org</span>
              </li>
              <li>
                <span className="location">Location:</span> <span>Tunisia</span>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default DonationWebsite;
