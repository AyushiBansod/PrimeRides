import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation

const MostSearchedCars = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate(); // Initialize useNavigate for routing

  const cars = [
    {
      name: "Model 1",
      image: "lamborgini.jpg",
      price: "Rs. 3.22 Crore",
      description: "Lamborghini Huracan Evo",
    },
    {
      name: "Model 2",
      image: "porsche911.jpg",
      price: "Rs. 1.99 Crore",
      description: "Porsche 911",
    },
    {
      name: "Model 3",
      image: "ferraripuro.jpg",
      price: "Rs. 1.05 Crore",
      description: "Ferrari Purosangue",
    },
    {
      name: "Model 4",
      image: "audir8.jpg",
      price: "Rs. 2.30 Crore",
      description: "Audi R8",
    },
    {
      name: "Model 5",
      image: "aston.jpg",
      price: "Rs. 3.99 Crore",
      description: "Aston Martin V8 Vantage",
    },
    {
      name: "Model 6",
      image: "mclarengt.jpg",
      price: "Rs. 3.72 Crore",
      description: "Mclaren 570s",
    },
  ];

  const carsToDisplay = cars.slice(currentIndex, currentIndex + 3);

  const goToNext = () => {
    if (currentIndex + 3 < cars.length) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const goToPrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleViewOffersClick = () => {
    navigate("/view-offers"); // Navigate to the /view-offers route
  };

  return (
    <div className="most-search-car-container">
      <h2>Most Searched Cars</h2>

      <div className="car-gallery-container">
        <div className="car-display">
          {carsToDisplay.map((car, index) => (
            <div className="car-item" key={index}>
              <div className="car-card">
                <img
                  src={`/${car.image}`}
                  alt={car.name}
                  className="car-image"
                />
                <div className="car-details">
                  <h3>{car.name}</h3>
                  <p>{car.description}</p>
                  <p>{car.price}</p>
                  <button
                    className="view-offers-button"
                    onClick={handleViewOffersClick}
                  >
                    View Offers
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <button
          className="back-button"
          onClick={goToPrevious}
          disabled={currentIndex === 0}
        >
          &#8592;
        </button>
        <button
          className="next-button"
          onClick={goToNext}
          disabled={currentIndex + 3 >= cars.length}
        >
          &#8594;
        </button>
      </div>
    </div>
  );
};

export default MostSearchedCars;
