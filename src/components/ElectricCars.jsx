import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TbVs } from "react-icons/tb";
import AboutContact from "./AboutContact";

const ElectricCars = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  const toggleExpand = () => setIsExpanded(!isExpanded);
  const cars = [
    {
      name: "Model 1",
      image: "ec1.jpg",
      price: "Rs. 14.53 lakh",
      description: "MG Windsor EV",
    },
    {
      name: "Model 2",
      image: "ec2.jpg",
      price: "Rs. 7.50 lakh",
      description: "MG Comet EV",
    },
    {
      name: "Model 3",
      image: "ec3.jpg",
      price: "Rs. 8.41 lakh",
      description: "Tata Tiago EV",
    },
    {
      name: "Model 4",
      image: "ec4.jpg",
      price: "Rs. 18.56 lakh",
      description: "Tata Curve EV",
    },
    {
      name: "Model 5",
      image: "ec5.jpg",
      price: "Rs. 43.27 lakh",
      description: "BYD Seals",
    },
    {
      name: "Model 6",
      image: "ec6.jpg",
      price: "Rs. 10.51 lakh",
      description: "Tata Punch EV",
    },
  ];

  // Get the current set of 3 cars to display based on current index
  const carsToDisplay = cars.slice(currentIndex, currentIndex + 3);

  const goToNext = () => {
    if (currentIndex + 3 < cars.length) {
      setCurrentIndex(currentIndex + 1); // Increment by 1 to show the next set of 3 cars
    }
  };

  const goToPrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1); // Decrement by 1 to show the previous set of 3 cars
    }
  };

  const handleViewOffersClick = () => {
    navigate("/view-offers"); // Navigate to the /view-offers route
  };

  return (
    <div className="electric-cars-container">
      {/* Electric Car Image */}
      <img
        src="/ec_bg.jpg" // Replace with your actual image path
        alt="Electric Cars"
        className="electric-car-image"
      />

      {/* Collapsible Paragraph */}
      <div className="newmodel-description-ec">
        <p>
          Are you planning to switch to electric cars? With the growing need for
          sustainable and eco-friendly transportation, electric vehicles (EVs)
          are becoming the preferred choice for many. We understand that finding
          the right EV can be challenging, with numerous options catering to
          different needs and budgets. That’s why we’ve curated a list of the
          latest and most popular electric cars in the market. Brands like
          Tesla, Tata, and MG are leading the EV revolution, offering models
          with advanced features, impressive range, and innovative designs.
          Whether you're looking for a compact city car or a high-performance
          SUV, there’s an electric car for everyone.
          {isExpanded && (
            <>
              <div className="electric-car-table">
                <h3>Top 25 Electric Cars in India</h3>
                <div className="table-container">
                  <table>
                    <thead>
                      <tr>
                        <th>Model</th>
                        <th>Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>MG Windsor EV</td>
                        <td>Rs. 14.53 lakh</td>
                      </tr>
                      <tr>
                        <td>MG Comet EV</td>
                        <td>Rs. 7.50 lakh</td>
                      </tr>
                      <tr>
                        <td>Tata Tiago EV</td>
                        <td>Rs. 8.41 lakh</td>
                      </tr>
                      <tr>
                        <td>Tata Curve EV</td>
                        <td>Rs. 18.56 lakh</td>
                      </tr>
                      <tr>
                        <td>BYD Seals</td>
                        <td>Rs. 43.27 lakh</td>
                      </tr>
                      <tr>
                        <td>Tata Punch EV</td>
                        <td>Rs. 10.51 lakh</td>
                      </tr>
                      <tr>
                        <td>Tata Nexon EV</td>
                        <td>Rs. 13.22 lakh</td>
                      </tr>
                      <tr>
                        <td>BYD Eto 3</td>
                        <td>Rs. 26.40 lakh</td>
                      </tr>
                      <tr>
                        <td>Hyundai Ioniq 5</td>
                        <td>Rs. 48.78 lakh</td>
                      </tr>
                      <tr>
                        <td>BYD eMax 7</td>
                        <td>Rs. 28.40 lakh</td>
                      </tr>
                      <tr>
                        <td>Mahindra XUV400</td>
                        <td>Rs. 16.61 lakh</td>
                      </tr>
                      <tr>
                        <td>MG ZS EV</td>
                        <td>Rs. 20.17 lakh</td>
                      </tr>
                      <tr>
                        <td>Kia EV6</td>
                        <td>Rs. 64.41 lakh</td>
                      </tr>
                      <tr>
                        <td>Volvo EX40</td>
                        <td>Rs. 59.31 lakh</td>
                      </tr>
                      <tr>
                        <td>Jaguar I-Pace</td>
                        <td>Rs. 1.32 crore</td>
                      </tr>
                      <tr>
                        <td>BMW iX1</td>
                        <td>Rs. 70.62 lakh</td>
                      </tr>
                      <tr>
                        <td>Kia EV9</td>
                        <td>Rs. 1.37 crore</td>
                      </tr>
                      <tr>
                        <td>BMW i7</td>
                        <td>Rs. 2.13 crore</td>
                      </tr>
                      <tr>
                        <td>Rolls-Royce Spectre</td>
                        <td>Rs. 7.87 crore</td>
                      </tr>
                      <tr>
                        <td>BMW i4</td>
                        <td>Rs. 76.49 lakh</td>
                      </tr>
                      <tr>
                        <td>Audi e-tron GT</td>
                        <td>Rs. 1.81 crore</td>
                      </tr>
                      <tr>
                        <td>Volvo C40 Recharge</td>
                        <td>Rs. 66.49 lakh</td>
                      </tr>
                      <tr>
                        <td>Porsche Taycan</td>
                        <td>Rs. 1.99 crore</td>
                      </tr>
                      <tr>
                        <td>Mini Cooper SE</td>
                        <td>Rs. 56.34 lakh</td>
                      </tr>
                      <tr>
                        <td>Lotus Eltre</td>
                        <td>Rs. 2.68 crore</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </>
          )}
        </p>
      </div>

      <div className="read-more-container-ec">
        <button onClick={toggleExpand} className="read-more-button-ec">
          {isExpanded ? "Read Less" : "Read More"}
        </button>
      </div>

      <div className="car-gallery-container-ec" style={{ marginTop: "20px" }}>
        <div className="car-display-ec">
          {carsToDisplay.map((car, index) => (
            <div className="car-item-ec" key={index}>
              <div className="car-card-ec">
                <img
                  src={`/${car.image}`}
                  alt={car.name}
                  className="car-image-ec"
                />
                <div className="car-details-ec">
                  <h3>{car.name}</h3>
                  <p>{car.description}</p>
                  <p>{car.price}</p>
                  <button
                    className="view-offers-button-ec"
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
          className="back-button-ec"
          onClick={goToPrevious}
          disabled={currentIndex === 0} // Disable when at the first set of cars
        >
          &#8592;
        </button>
        <button
          className="next-button-ec"
          onClick={goToNext}
          disabled={currentIndex + 3 >= cars.length} // Disable when at the last set of cars
        >
          &#8594;
        </button>
      </div>

      {/* Comparison Section */}
      <div className="electric-cars-comparison-section">
        <h2>Compare Electric Cars</h2>

        {/* Comparison 1: Model 1 vs Model 2 */}
        <div className="comparison-container">
          {/* Model 1 */}
          <div className="comparison-item">
            <img
              src="/ec1.jpg"
              alt="Model 1"
              className="comparison-car-image"
            />
            <h3 className="comparison-car-name">MG Windsor EV</h3>
            <p className="comparison-car-price">
              <strong>Price:</strong> Rs. 14.53 lakh
            </p>
            <p className="comparison-feature">
              <strong>Feature:</strong> MG Windsor EV with 400 km range
            </p>
            <p className="comparison-price-comparison">
              <strong>Price Comparison:</strong> Higher priced but excellent
              range
            </p>
          </div>

          {/* VS Center Section */}
          <div className="comparison-vs-section">
            {" "}
            <TbVs className="vs-icon" />{" "}
          </div>

          {/* Model 2 */}
          <div className="comparison-item">
            <img
              src="/ec2.jpg"
              alt="Model 2"
              className="comparison-car-image"
            />
            <h3 className="comparison-car-name">MG Comet EV</h3>
            <p className="comparison-car-price">
              <strong>Price:</strong> Rs. 7.50 lakh
            </p>
            <p className="comparison-feature">
              <strong>Feature:</strong> MG Comet EV with compact design
            </p>
            <p className="comparison-price-comparison">
              <strong>Price Comparison:</strong> Affordable city-focused EV
            </p>
          </div>
        </div>

        {/* Comparison 2: Model 3 vs Model 4 */}
        <div className="comparison-container">
          {/* Model 3 */}
          <div className="comparison-item">
            <img
              src="/ec3.jpg"
              alt="Model 3"
              className="comparison-car-image"
            />
            <h3 className="comparison-car-name">Tata Tiago EV</h3>
            <p className="comparison-car-price">
              <strong>Price:</strong> Rs. 8.41 lakh
            </p>
            <p className="comparison-feature">
              <strong>Feature:</strong> Tata Tiago EV with 300 km range
            </p>
            <p className="comparison-price-comparison">
              <strong>Price Comparison:</strong> Budget-friendly hatchback EV
            </p>
          </div>

          {/* VS Center Section */}
          <div className="comparison-vs-section">
            {" "}
            <TbVs className="vs-icon" />{" "}
          </div>

          {/* Model 4 */}
          <div className="comparison-item">
            <img
              src="/ec4.jpg"
              alt="Model 4"
              className="comparison-car-image"
            />
            <h3 className="comparison-car-name">Tata Curve EV</h3>
            <p className="comparison-car-price">
              <strong>Price:</strong> Rs. 18.56 lakh
            </p>
            <p className="comparison-feature">
              <strong>Feature:</strong> Tata Curve EV with advanced features
            </p>
            <p className="comparison-price-comparison">
              <strong>Price Comparison:</strong> SUV with revolutionary
            </p>
          </div>
        </div>

        {/* Comparison 3: Model 5 vs Model 6 */}
        <div className="comparison-container">
          {/* Model 5 */}
          <div className="comparison-item">
            <img
              src="/ec5.jpg"
              alt="Model 5"
              className="comparison-car-image"
            />
            <h3 className="comparison-car-name">BYD Seals EV</h3>
            <p className="comparison-car-price">
              <strong>Price:</strong> Rs. 43.27 lakh
            </p>
            <p className="comparison-feature">
              <strong>Feature:</strong> BYD Seals with luxury design
            </p>
            <p className="comparison-price-comparison">
              <strong>Price Comparison:</strong> Best-in-class range
            </p>
          </div>

          {/* VS Center Section */}
          <div className="comparison-vs-section">
            {" "}
            <TbVs className="vs-icon" />{" "}
          </div>

          {/* Model 6 */}
          <div className="comparison-item">
            <img
              src="/ec6.jpg"
              alt="Model 6"
              className="comparison-car-image"
            />
            <h3 className="comparison-car-name">Tata Punch EV</h3>
            <p className="comparison-car-price">
              <strong>Price:</strong> Rs. 10.51 lakh
            </p>
            <p className="comparison-feature">
              <strong>Feature:</strong> EV with compact SUV design
            </p>
            <p className="comparison-price-comparison">
              <strong>Price Comparison:</strong> SUV with great mileage
            </p>
          </div>
        </div>
      </div>

      {/* Why Buy Section */}
      <div className="why-buy">
        <h3>Why Buy From Us?</h3>
        <ul>
          <li>✔ Certified Quality Checks</li>
          <li>✔ Affordable Pricing</li>
          <li>✔ Easy Financing Options</li>
          <li>✔ Transparent Ownership History</li>
        </ul>
      </div>

      {/* Marquee Below Comparison Section */}
      <div className="marquee-container">
        <marquee className="marquee-text">
          🌟 Exciting Announcement: EV Expo {new Date().getFullYear()} is here!
          🚗 Join us to explore the latest innovations in electric mobility.
          Event Date: {new Date().toLocaleDateString()} – Don’t miss it! ⚡
        </marquee>
      </div>

      {/* Poster Section */}
      <div className="poster-container">
        <div className="poster-border">
          <div className="bulb-row top-row">
            💡💡💡💡💡💡💡💡💡💡💡💡💡💡💡💡💡💡💡
          </div>
          <div className="poster-content">
            <div className="bulb-column left-column">
              💡💡💡💡💡💡💡💡💡💡💡
            </div>
            <img src="/p2.jpg" alt="EV Expo Poster" className="poster-image" />
            <div className="bulb-column right-column">
              💡💡💡💡💡💡💡💡💡💡💡
            </div>
          </div>
          <div className="bulb-row bottom-row">
            💡💡💡💡💡💡💡💡💡💡💡💡💡💡💡💡💡💡💡
          </div>
        </div>
      </div>

      {/* Popular Brands Sections */}

      <div className="popular-brands-section">
        <h3>Brand Collaborations</h3>
        <table className="brands-table">
          <tbody>
            <tr>
              <td>
                <img
                  src="/byd_logo.jpg" // Replace with your logo image path
                  alt="MG"
                  className="brand-logo"
                />
                <p>BYD</p>
              </td>
              <td>
                <img
                  src="/tata_logo.jpg" // Replace with your logo image path
                  alt="Tata"
                  className="brand-logo"
                />
                <p>Tata</p>
              </td>
              <td>
                <img
                  src="/skoda_logo.jpg" // Replace with your logo image path
                  alt="BYD"
                  className="brand-logo"
                />
                <p>Skoda</p>
              </td>
              <td>
                <img
                  src="/bmw_logo.jpg" // Replace with your logo image path
                  alt="Hyundai"
                  className="brand-logo"
                />
                <p>BMW</p>
              </td>
              <td>
                <img
                  src="/porsche_logo.jpg" // Replace with your logo image path
                  alt="Kia"
                  className="brand-logo"
                />
                <p>Porsche</p>
              </td>
              <td>
                <img
                  src="/lamborghini_logo.jpg" // Replace with your logo image path
                  alt="Volvo"
                  className="brand-logo"
                />
                <p>Lamborghini</p>
              </td>
            </tr>
            <tr>
              <td>
                <img
                  src="/mercedes-benz_logo.jpg" // Replace with new brand logo path
                  alt="New Brand"
                  className="brand-logo"
                />
                <p>Mercedes-Benz</p>
              </td>
              <td>
                <img
                  src="/audi_logo.jpg" // Replace with another brand logo path
                  alt="Another Brand"
                  className="brand-logo"
                />
                <p>Audi</p>
              </td>
              <td>
                <img
                  src="/mg_logo.jpg" // Replace with logo path
                  alt="Yet Another"
                  className="brand-logo"
                />
                <p>MG</p>
              </td>
              <td>
                <img
                  src="/jaguar_logo.jpg" // Replace with a different brand logo path
                  alt="Different Brand"
                  className="brand-logo"
                />
                <p>Jaguar</p>
              </td>
              <td>
                <img
                  src="/aston-martin_logo.png" // Replace with further brand logo path
                  alt="Further Brand"
                  className="brand-logo"
                />
                <p>Aston Martin</p>
              </td>
              <td>
                <img
                  src="/ferrari_logo.png" // Replace with last brand logo path
                  alt="Last Brand"
                  className="brand-logo"
                />
                <p>Ferrari</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <AboutContact />
    </div>
  );
};

export default ElectricCars;
