import React, { useState } from "react";
import { GiSeaDragon } from "react-icons/gi"; // Importing the dragon icon from React Icons
import { FiSearch } from "react-icons/fi"; // Importing the search icon from React Icons
import "../App.css";
import carVideo from "../assets/car.mp4";

const Home = () => {
  const [isFocused, setIsFocused] = useState(false); // Track if input is focused

  return (
    <div className="home">
      <video autoPlay loop muted playsInline className="background-video">
        <source src={carVideo} type="video/mp4" />
      </video>

      <div className="content-overlay">
        <center>
          <h1>Welcome to PrimeRides</h1>

          {/* Search Bar with Vertical Line, Dragon Icon, and Search Icon */}
          <div className="search-bar">
            <div className="search-input-container">
              {/* Dragon icon */}
              <GiSeaDragon className="search-icon-left" />
              <div className="search-line"></div> {/* Vertical line */}
              <input
                type="text"
                placeholder="Search"
                className="search-input"
                onFocus={() => setIsFocused(true)} // Set focus state to true
                onBlur={() => setIsFocused(false)} // Set focus state to false when input loses focus
              />
              {/* Conditionally render search icon based on focus state */}
              {!isFocused && <FiSearch className="search-icon-right" />}
            </div>
          </div>
        </center>
      </div>
    </div>
  );
};

export default Home;
