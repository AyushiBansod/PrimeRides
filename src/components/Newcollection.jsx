import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { VscGithub } from "react-icons/vsc";
import { FaLinkedin } from "react-icons/fa";
import "../App.css";

const NewCollection = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeHeading, setActiveHeading] = useState("NEW ARRIVALS");
  const navigate = useNavigate();

  const reviews = [
    {
      name: "Ashwet Harde",
      image: "/ashwet.jpg", // Use correct image paths
      review:
        "Purchasing the Hyundai Tucson was a dream come true! The advanced tech features, especially the panoramic sunroof and seamless connectivity, exceeded my expectations. The service team was incredibly supportive throughout the process.",
      date: "22 Sept 2024",
    },
    {
      name: "Ekant Motghare",
      image: "/ekant.jpg", // Use correct image paths
      review:
        "I am thrilled with my new Honda City. Its performance is top-notch, and the comfort it provides during long drives is unparalleled. The dealership ensured a smooth buying experience, answering all my queries patiently.",
      date: "5 Sept 2024",
    },
    {
      name: "Priyanka Rajoriya",
      image: "/p.jpg", // Use correct image paths
      review:
        "The process was very easy. I am highly satisfied with the entire process and would recommend their service. The staff was polite and the overall process was smooth. I will definitely use this service again.",
      date: "18 Aug 2024",
    },
    {
      name: "Saharsh Arya",
      image: "/avatar.jpg", // Use correct image paths
      review:
        "Hassle-free process for car inspection, document processing, car handover and payment process.Everything was done in a timely manner. I appreciate the transparency and professionalism.",
      date: "29 July 2024",
    },

    {
      name: "Jyoti Subhedar",
      image: "/jyoti.png", // Use correct image paths
      review:
        "Amazing experience at PrimeRides! The car collection is impressive, and the fast finance process was seamless. It saved me a lot of time and effort. I would recommend this service to anyone looking to sell their car quickly.",
      date: "6 July 2024",
    },
  ];

  const upcomingCarsRef = useRef(null); // Ref for upcoming cars section
  const trendingCarsRef = useRef(null); // Ref for trending cars section

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const handleHeadingClick = (heading) => {
    setActiveHeading(heading);

    if (heading === "UPCOMING CARS") {
      upcomingCarsRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      // Trigger the zoom-in effect for upcoming cars
      upcomingCarsRef.current?.classList.add("zoom-in-effect");

      // Remove the effect after animation duration
      setTimeout(() => {
        upcomingCarsRef.current?.classList.remove("zoom-in-effect");
      }, 1000); // Match CSS animation duration
    }

    if (heading === "TRENDING CARS") {
      trendingCarsRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      // Trigger the zoom-in effect for trending cars
      trendingCarsRef.current?.classList.add("zoom-in-effect");

      // Remove the effect after animation duration
      setTimeout(() => {
        trendingCarsRef.current?.classList.remove("zoom-in-effect");
      }, 1000); // Match CSS animation duration
    }
  };

  const handleShow3DModel = (car) => {
    if (car === "BMW M8") {
      navigate("/car-model-two"); // For BMW M8 model
    } else {
      navigate("/car-model"); // For McLaren Spider model
    }
  };

  const [currentIndex, setCurrentIndex] = useState(0);
  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 2);
    }
  };

  const handleNext = () => {
    if (currentIndex + 2 < reviews.length) {
      setCurrentIndex((prev) => prev + 2);
    }
  };

  const handleViewOffersClick = () => {
    navigate("/view-offers"); // Navigate to the /view-offers route
  };

  const handleAlertClick = () => {
    navigate("/alert-me"); // Show AlertMe when the button is clicked
  };

  const usedCars = [
    {
      id: 1,
      image: "/usedcar1.jpg",
      name: "Hyundai venue S 2019",
      price: "₹ 6.79 Lakh",
      mileage: "38,000 kms",
      owner: "1st Owner",
    },
    {
      id: 2,
      image: "/usedcar2.jpg",
      name: "Mahindra TUV 300 t6 ",
      price: "₹ 4.20 Lakh",
      mileage: "69,000 kms",
      owner: "1st Owner",
    },
    {
      id: 3,
      image: "/usedcar3.jpeg",
      name: "MG Hector Sharp DCT",
      price: "₹ 11.25 Lakh",
      mileage: "89,000 kms",
      owner: "1st Owner",
    },
    {
      id: 4,
      image: "/usedcar4.jpg",
      name: "Hyundai Verna VTVT ",
      price: "₹ 7.95 Lakh",
      mileage: "69,000 kms",
      owner: "2nd Owner",
    },
    {
      id: 5,
      image: "/usedcar5.jpg",
      name: "Honda Jazz V 2019",
      price: "₹ 5.05 Lakh",
      mileage: "54,689 kms",
      owner: "1st Owner",
    },
    {
      id: 5,
      image: "/usedcar6.jpg",
      name: "Hyundai Aura CNG",
      price: "₹ 7.20 Lakh",
      mileage: "55,000 kms",
      owner: "1st Owner",
    },
  ];

  return (
    <div className="newmodel">
      {/* Main Section */}
      <div className="newmodel-content">
        <div className="newmodel-main">
          <div className="newmodel-header">
            <h1 className="newmodel-title">Trending Now</h1>
          </div>

          {/* Collapsible Paragraph */}
          <div className="newmodel-description">
            <p>
              Are you planning on buying a new car? Well, we know that with so
              many car options available out there, it gets really difficult to
              find a good car which suits your need. Hence, we have put together
              a complete list of new cars. Maruti Suzuki, Tata, and Toyota are
              the 3 most popular car brands. These popular car brands cater to a
              wide spectrum of budgets and needs, offering a variety of cars
              from fuel-efficient hatchbacks to spacious SUVs.
              {isExpanded && (
                <>
                  The 5 most popular cars are Volkswagen Taigun, Maruti Suzuki
                  Dezire, Skoda Kaylak, Tata Curve, and Mahindra XUV 3XO. Your
                  one-stop platform for buying and selling cars! We make it easy
                  for you to explore a wide range of cars, whether you’re
                  looking for brand-new models, quality used cars, or even the
                  latest electric vehicles. Whether you're upgrading your ride
                  or selling your current car, PrimeRides offers a seamless and
                  secure experience.
                </>
              )}
            </p>
          </div>

          <div className="read-more-container">
            <button onClick={toggleExpand} className="read-more-button">
              {isExpanded ? "Read Less" : "Read More"}
            </button>
          </div>
        </div>
      </div>

      {/* Section Headings */}
      <div className="newmodel-sidebar">
        <h2 className="featured-car-heading">Featured Car</h2>
        <div className="section-headings">
          <h3
            className={activeHeading === "NEW ARRIVALS" ? "active" : ""}
            onClick={() => handleHeadingClick("NEW ARRIVALS")}
          >
            NEW ARRIVALS
          </h3>
          <h3
            className={activeHeading === "UPCOMING CARS" ? "active" : ""}
            onClick={() => handleHeadingClick("UPCOMING CARS")}
          >
            UPCOMING CARS
          </h3>
          <h3
            className={activeHeading === "TRENDING CARS" ? "active" : ""}
            onClick={() => handleHeadingClick("TRENDING CARS")}
          >
            TRENDING CARS
          </h3>
        </div>
      </div>

      {/* New Arrivals Section */}
      <div className="new-arrivals-section">
        <div className="new-arrivals-container">
          <div className="new-arrival-item">
            <img
              src="/modelcar1.jpg"
              alt="Car 1"
              className="new-arrival-image"
            />
            <h3 className="car-name-model">McLaren Spider</h3>
            <p className="car-price-model">₹ 5.04 Crore</p>
            <button className="view-3d-btn" onClick={handleShow3DModel}>
              &gt;&gt; Click to view 3D model &lt;&lt;
            </button>
          </div>

          <div className="new-arrival-item">
            <img
              src="/modelcar2.jpg"
              alt="Car 2"
              className="new-arrival-image"
            />
            <h3 className="car-name-model">BMW M8</h3>
            <p className="car-price-model">₹ 3.08 Crore</p>
            <button
              className="view-3d-btn"
              onClick={() => handleShow3DModel("BMW M8")}
            >
              &gt;&gt; Click to view 3D model &lt;&lt;
            </button>
          </div>
        </div>
      </div>

      {/* Upcoming Cars Section */}
      <div className="upcoming-cars-section" ref={upcomingCarsRef}>
        <h2 className="upcoming-cars-heading">Upcoming Cars</h2>
        <div className="upcoming-cars-gallery">
          <div className="upcoming-car-item">
            <div className="upcoming-car-card">
              <img
                src="/audiQ7.jpg"
                alt="Tesla Cybertruck"
                className="upcoming-car-image"
              />
              <div className="upcoming-car-details">
                <p className="upcoming-car-name">Audi Q7</p>
                <p className="upcoming-car-price">Expected: ₹ 90 Lakh</p>
              </div>
              <button className="alert-button" onClick={handleAlertClick}>
                Alert Me When Launched
              </button>
            </div>
          </div>
          <div className="upcoming-car-item">
            <div className="upcoming-car-card">
              <img
                src="/skodaoct.jpg"
                alt="Mercedes Vision EQXX"
                className="upcoming-car-image"
              />
              <div className="upcoming-car-details">
                <p className="upcoming-car-name">Skoda Octavia</p>
                <p className="upcoming-car-price">Expected: ₹ 30 Lakh</p>
              </div>
              <button className="alert-button" onClick={handleAlertClick}>
                Alert Me When Launched
              </button>
            </div>
          </div>
          <div className="upcoming-car-item">
            <div className="upcoming-car-card">
              <img
                src="/upcoming_car3.jpg"
                alt="Mercedes Vision EQXX"
                className="upcoming-car-image"
              />
              <div className="upcoming-car-details">
                <p className="upcoming-car-name">Mercedes Vision EQXX</p>
                <p className="upcoming-car-price">Expected: ₹ 2.5 Crores </p>
              </div>
              <button className="alert-button" onClick={handleAlertClick}>
                Alert Me When Launched
              </button>
            </div>
          </div>

          <div className="upcoming-car-item">
            <div className="upcoming-car-card">
              <img
                src="/uc4.jpg"
                alt="Mercedes Vision EQXX"
                className="upcoming-car-image"
              />
              <div className="upcoming-car-details">
                <p className="upcoming-car-name">Mahindra XUV900</p>
                <p className="upcoming-car-price">Expected: ₹ 25 Lakh</p>
              </div>
              <button className="alert-button" onClick={handleAlertClick}>
                Alert Me When Launched
              </button>
            </div>
          </div>

          <div className="upcoming-car-item">
            <div className="upcoming-car-card">
              <img
                src="/uc5.jpeg"
                alt="Mercedes Vision EQXX"
                className="upcoming-car-image"
              />
              <div className="upcoming-car-details">
                <p className="upcoming-car-name">Toyota Camry</p>
                <p className="upcoming-car-price">Expected: ₹ 50 Lakh</p>
              </div>
              <button className="alert-button" onClick={handleAlertClick}>
                Alert Me When Launched
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Trending Cars Section */}
      <div className="trending-cars-section" ref={trendingCarsRef}>
        <h2 className="trending-cars-heading">Trending Cars</h2>
        <div className="trending-cars-gallery">
          <div className="trending-car-item">
            <div className="trending-car-card">
              <img
                src="/tc1.jpg"
                alt="Tesla Cybertruck"
                className="trending-car-image"
              />
              <div className="trending-car-details">
                <p className="trending-car-name">Tata Nexon</p>
                <p className="trending-car-price">Price: ₹ 9.39 Lakh</p>
                <button
                  className="view-offers-button-tc"
                  onClick={handleViewOffersClick}
                >
                  View Offers
                </button>
              </div>
            </div>
          </div>
          <div className="trending-car-item">
            <div className="trending-car-card">
              <img
                src="/tc2.jpg"
                alt="Tesla Cybertruck"
                className="trending-car-image"
              />
              <div className="trending-car-details">
                <p className="trending-car-name">Hyundai Verna</p>
                <p className="trending-car-price">Price: ₹ 17.48 Lakh</p>
                <button
                  className="view-offers-button-tc"
                  onClick={handleViewOffersClick}
                >
                  View Offers
                </button>
              </div>
            </div>
          </div>

          <div className="trending-car-item">
            <div className="trending-car-card">
              <img
                src="/tc3.jpg"
                alt="Tesla Cybertruck"
                className="trending-car-image"
              />
              <div className="trending-car-details">
                <p className="trending-car-name">Kia Seltos</p>
                <p className="trending-car-price">Price: ₹ 12.90 Lakh</p>
                <button
                  className="view-offers-button-tc"
                  onClick={handleViewOffersClick}
                >
                  View Offers
                </button>
              </div>
            </div>
          </div>

          <div className="trending-car-item">
            <div className="trending-car-card">
              <img
                src="/tc4.jpg"
                alt="Tesla Cybertruck"
                className="trending-car-image"
              />
              <div className="trending-car-details">
                <p className="trending-car-name">Toyota Fortuner MHEV</p>
                <p className="trending-car-price">Price: ₹ 35.43 Lakh</p>
                <button
                  className="view-offers-button-tc"
                  onClick={handleViewOffersClick}
                >
                  View Offers
                </button>
              </div>
            </div>
          </div>

          <div className="trending-car-item">
            <div className="trending-car-card">
              <img
                src="/tc5.jpg"
                alt="Tesla Cybertruck"
                className="trending-car-image"
              />
              <div className="trending-car-details">
                <p className="trending-car-name">Kia Carens EV</p>
                <p className="trending-car-price">Price: ₹ 22 Lakh</p>
                <button
                  className="view-offers-button-tc"
                  onClick={handleViewOffersClick}
                >
                  View Offers
                </button>
              </div>
            </div>
          </div>

          {/* buy used car section */}

          <div className="buy-used-cars-section">
            <h2 className="section-title">Buy Used Cars</h2>
            <p className="section-tagline">
              "Low budget? Discover quality used cars you can trust, all at
              prices that fit your wallet!"
            </p>

            {/* Filters Section */}
            <div className="filter-options">
              <input
                type="text"
                placeholder="Search"
                className="used-car-search-bar"
              />
              <button className="search-button">Search</button>
            </div>

            {/* Used Cars List */}
            <div className="used-cars-grid">
              {usedCars.map((car) => (
                <div key={car.id} className="used-car-card">
                  <img
                    src={car.image}
                    alt={car.name}
                    className="used-car-image"
                  />
                  <h3 className="car-name">{car.name}</h3>
                  <p className="car-price">{car.price}</p>
                  <p className="car-mileage">Mileage: {car.mileage}</p>
                  <p className="car-owner">Owner: {car.owner}</p>
                  <button className="view-details-button">View Details</button>
                </div>
              ))}
            </div>

            {/* Review Section */}
            <div className="review-section">
              <h2>What Motivates Us</h2>
              <div className="review-container">
                {reviews
                  .slice(currentIndex, currentIndex + 2)
                  .map((review, index) => (
                    <div key={index} className="review-card">
                      <div className="review-header">
                        <img
                          src={review.image}
                          alt={review.name}
                          className="review-user-img"
                        />
                        <div>
                          <div className="review-user-name">{review.name}</div>
                          <div className="review-user-id">
                            @{review.name.toLowerCase().replace(" ", "")}
                          </div>
                        </div>
                      </div>
                      <div className="review-text">{review.review}</div>
                      <div className="review-date">{review.date}</div>
                    </div>
                  ))}
              </div>
              <div className="review-navigation">
                <button
                  onClick={handlePrev}
                  className="prev-btn"
                  disabled={currentIndex === 0}
                >
                  &larr;
                </button>
                <button
                  onClick={handleNext}
                  className="next-btn"
                  disabled={currentIndex + 2 >= reviews.length}
                >
                  &rarr;
                </button>
              </div>
            </div>
          </div>

          {/* Follow Us Section */}
          <div className="follow-us">
            <p>Follow Us</p>
            <div className="social-links">
              <a
                href="https://github.com/AyushiBansod"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="social-btn">
                  <VscGithub />
                </button>
              </a>
              <a
                href="https://www.linkedin.com/in/ayushibansod/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="social-btn">
                  <FaLinkedin />
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewCollection;
