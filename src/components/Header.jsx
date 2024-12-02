import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css"; // Import your app.css for styling
import { GiSeaDragon } from "react-icons/gi";
import { GoHomeFill } from "react-icons/go";
import { AiFillFire } from "react-icons/ai";
import { MdCollections } from "react-icons/md";
import { MdSell } from "react-icons/md";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={`header ${isOpen ? "open" : ""}`}>
      <div className={`logo ${isOpen ? "hidden" : ""}`}>
        <Link to="/">
          <GiSeaDragon className="dragon" /> PrimeRides
        </Link>
      </div>

      {/* Hamburger button */}
      <button className="hamburger" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </button>

      {/* Close button for mobile view */}
      {isOpen && (
        <button className="close-btn" onClick={toggleMenu}>
          &times;
        </button>
      )}

      {/* Navigation links */}
      <nav className={`nav-links ${isOpen ? "open" : ""}`}>
        <Link to="/">
          {" "}
          <GoHomeFill className="hicon" /> Home
        </Link>
        <Link to="/new-collection">
          {" "}
          <AiFillFire className="hicon" /> New Collection
        </Link>
        <Link to="/all-cars">
          {" "}
          <MdCollections className="hicon" /> All Cars
        </Link>
        <Link to="/sell">
          {" "}
          <MdSell className="hicon" /> Sell Car
        </Link>
        <Link to="/all-cars">
          <button className="explore-btn">Explore Now</button>
        </Link>
      </nav>
    </header>
  );
};
export default Header;
