import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css"; // Include your styles here

const AllCars = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true); // State to track loading
  const navigate = useNavigate();

  // Fetch car data from the JSON file in the public folder
  useEffect(() => {
    fetch("/cars.json")
      .then((response) => response.json())
      .then((data) => {
        setTimeout(() => {
          setCars(data); // Set car data after 3 seconds
          setLoading(false); // Stop loading after 3 seconds
        }, 3000); // 3-second delay
      });
  }, []);

  const handleViewOffersClick = () => {
    navigate("/view-offers"); // Navigate to the /view-offers route
  };

  return (
    <div className="car-showcase-container">
      <div className="car-explore-header">
        <h1 className="car-showcase-title">Explore Our Cars</h1>
      </div>

      {/* Show the travel-themed loader while loading */}
      {loading ? (
        <div className="loading-spinner-container">
          <div className="loader-container">
            <div className="car"></div>
            <div className="road"></div>
          </div>
        </div>
      ) : (
        <div className="car-showcase-grid">
          {cars.map((car) => (
            <div className="car-display-card" key={car.id}>
              <div className="car-img-container">
                <img
                  src={car.image_url}
                  alt={`${car.make} ${car.model}`}
                  className="car-thumbnail"
                />
              </div>
              <div className="car-info-section">
                <h3 className="car-model-title">{`${car.make} ${car.model}`}</h3>
                <p className="car-price-tag">{car.price}</p>
              </div>
              <div className="car-button-group">
                <button
                  className="view-offers-button-allcars"
                  onClick={handleViewOffersClick}
                >
                  View Offers
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllCars;
