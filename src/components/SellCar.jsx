import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoMdTrendingUp } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { VscGithub } from "react-icons/vsc";
import { FaLinkedin } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "../App.css";

const SellCar = () => {
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const [activeIndex, setActiveIndex] = useState(null); // State to track active FAQ

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  // Handle Back Home button click
  const handleBackHome = () => {
    navigate("/"); // Redirect to the homepage using navigate
    window.scrollTo(0, 0);
  };
  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle FAQ visibility
  };

  return (
    <div className="sell-car-component">
      {/* Background Section */}
      <div className="background-image">
        <div className="overlay">
          <h2 className="sell-car-title">Sell Your Car at the Best Price</h2>
        </div>
      </div>

      {/* Process of Selling Your Car Section */}
      <div className="process-container">
        <h3 className="process-title">Process of Selling Your Car</h3>
        <div className="process-steps">
          <div className="process-step">
            <div className="process-box">
              <div className="step-number-circle">01</div>
              <img
                src="Thank_you.png"
                alt="Submit Form"
                className="process-img"
              />
              <h4 className="step-heading">Form Submission</h4>
              <p className="step-description">
                Fill out the following form to provide key details about your
                car for a smooth assessment.
              </p>
            </div>
          </div>
          <div className="process-step">
            <div className="process-box">
              <div className="step-number-circle">02</div>
              <img
                src="carinspection.jpg"
                alt="Car Inspection"
                className="process-img"
              />
              <h4 className="step-heading">Car Inspection</h4>
              <p className="step-description">
                We'll schedule an inspection to verify your car's condition and
                ensure transparency for both parties.
              </p>
            </div>
          </div>
          <div className="process-step">
            <div className="process-box">
              <div className="step-number-circle">03</div>
              <img
                src="carpayment.jpg"
                alt="Car Pickup and Payment"
                className="process-img"
              />
              <h4 className="step-heading">Car Pickup & Payment</h4>
              <p className="step-description">
                We’ll arrange a convenient time to pick up your car and finalize
                the payment.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Why Sell Car to PrimeRides Section */}
      <div className="why-sell-section">
        <h3 className="why-sell-title">Why Sell Car to PrimeRides?</h3>
        <p className="why-sell-description">
          PrimeRides ensuring you get a great price without the hassle. With a
          wide network of trusted dealers, you can sell your car quickly, while
          benefiting from instant payment. Our process includes hassle-free
          documentation, so you don’t have to worry about any paperwork. Unlike
          traditional classifieds, where you may face privacy concerns, fake
          profiles, and excessive calls, selling your car online through
          PrimeRides provides a seamless, transparent, and convenient
          experience.
        </p>

        <div className="reason-boxes">
          <div className="reason-box">
            <img src="besttdeal.jpg" alt="Instant Valuation" />
            <h4>Great Price</h4>
            <p>
              We offer competitive pricing to ensure you get the best value for
              your car. Let’s work together to finalize the best deal.
            </p>
          </div>
          <div className="reason-box">
            <img src="instantpay.jpg" alt="Wide Network" />
            <h4>Instant Payment</h4>
            <p>
              Enjoy a hassle-free transaction with instant payment once the
              details are confirmed. Get paid quickly and securely with
              PrimeRides.
            </p>
          </div>
          <div className="reason-box">
            <img src="hasselfree.jpg" alt="Free Inspection" />
            <h4>Hassle Free Documentation</h4>
            <p>
              We handle all the paperwork to make the transfer seamless and
              stress-free. Experience a smooth and efficient process from start
              to finish.
            </p>
          </div>
          <div className="reason-box last-box">
            <img src="network.jpg" alt="No Hassle" />
            <h4>Wide Dealer Network</h4>
            <p>
              Leverage our extensive network of trusted dealers for the best
              offers. We connect you to a wide range of options for a quick
              sale.
            </p>
          </div>
        </div>
      </div>

      {/* Recommended by 1 Lakh+ Sellers Section */}
      <div className="recommended-section">
        <div className="recommended-description">
          <p>Recommended by 1 Lakh+ sellers across India</p>
          <div className="stats-container">
            <div className="stat-item">
              <span className="stat-number">
                <IoMdTrendingUp /> <br />1 Lakh+
              </span>
              <p className="stat-text">cars purchased</p>
            </div>
            <div className="stat-item">
              <span className="stat-number">
                <FaStar /> <br />
                4.7
              </span>
              <p className="stat-text">average rating</p>
            </div>

            <div className="stat-item">
              <span className="stat-number">
                <FaLocationDot /> <br />
                40+
              </span>
              <p className="stat-text">cities in India</p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="faq-section">
        <h3 className="faq-title">Frequently Asked Questions</h3>

        {/* FAQ Item 1 */}
        <div className="faq-item">
          <button
            className="faq-question"
            onClick={() => toggleAnswer(0)} // Toggle answer on click
          >
            Q. Why is PrimeRides the best place to sell my car online?{" "}
            <IoIosArrowDown
              className="arrow"
              style={{
                transform:
                  activeIndex === 0 ? "rotate(180deg)" : "rotate(0deg)", // Rotate arrow based on state
              }}
            />
          </button>
          {activeIndex === 0 && (
            <div className="faq-answer">
              <p>
                PrimeRides offers a hassle-free, quick, and transparent way to
                sell your car online with instant payments.
              </p>
            </div>
          )}
        </div>

        {/* FAQ Item 2 */}
        <div className="faq-item">
          <button
            className="faq-question"
            onClick={() => toggleAnswer(1)} // Toggle answer on click
          >
            Q. Can I sell a car that has an ongoing loan on it?{" "}
            <IoIosArrowDown
              className="arrow"
              style={{
                transform:
                  activeIndex === 1 ? "rotate(180deg)" : "rotate(0deg)", // Rotate arrow based on state
              }}
            />
          </button>
          {activeIndex === 1 && (
            <div className="faq-answer">
              <p>
                Yes, you can. PrimeRides will assist in clearing the loan amount
                and transfer the ownership of the car.
              </p>
            </div>
          )}
        </div>

        {/* FAQ Item 3 */}
        <div className="faq-item">
          <button
            className="faq-question"
            onClick={() => toggleAnswer(2)} // Toggle answer on click
          >
            Q. Is the car owner required to be present at the time of car pick
            up & inspection?{" "}
            <IoIosArrowDown
              className="arrow"
              style={{
                transform:
                  activeIndex === 2 ? "rotate(180deg)" : "rotate(0deg)", // Rotate arrow based on state
              }}
            />
          </button>
          {activeIndex === 2 && (
            <div className="faq-answer">
              <p>
                Yes, the car owner needs to be present for the inspection and
                pickup process.
              </p>
            </div>
          )}
        </div>

        {/* FAQ Item 4 */}
        <div className="faq-item">
          <button
            className="faq-question"
            onClick={() => toggleAnswer(3)} // Toggle answer on click
          >
            Q. Do I need to be present at the RTO for RC transfer?{" "}
            <IoIosArrowDown
              className="arrow"
              style={{
                transform:
                  activeIndex === 3 ? "rotate(180deg)" : "rotate(0deg)", // Rotate arrow based on state
              }}
            />
          </button>
          {activeIndex === 3 && (
            <div className="faq-answer">
              <p>
                No, PrimeRides handles the RC transfer process on your behalf.
              </p>
            </div>
          )}
        </div>

        {/* FAQ Item 5 */}
        <div className="faq-item">
          <button
            className="faq-question"
            onClick={() => toggleAnswer(4)} // Toggle answer on click
          >
            Q. How long does the RC transfer take?{" "}
            <IoIosArrowDown
              className="arrow"
              style={{
                transform:
                  activeIndex === 4 ? "rotate(180deg)" : "rotate(0deg)", // Rotate arrow based on state
              }}
            />
          </button>
          {activeIndex === 4 && (
            <div className="faq-answer">
              <p>The RC transfer typically takes 7-14 days to complete.</p>
            </div>
          )}
        </div>

        {/* FAQ Item 7 */}
        <div className="faq-item">
          <button
            className="faq-question"
            onClick={() => toggleAnswer(6)} // Toggle answer on click
          >
            Q. Will PrimeRides take care of the paperwork?{" "}
            <IoIosArrowDown
              className="arrow"
              style={{
                transform:
                  activeIndex === 6 ? "rotate(180deg)" : "rotate(0deg)", // Rotate arrow based on state
              }}
            />
          </button>
          {activeIndex === 6 && (
            <div className="faq-answer">
              <p>Yes, PrimeRides will manage all the paperwork for you.</p>
            </div>
          )}
        </div>

        {/* FAQ Item 8 */}
        <div className="faq-item">
          <button
            className="faq-question"
            onClick={() => toggleAnswer(7)} // Toggle answer on click
          >
            Q. How long does it take during car inspection?{" "}
            <IoIosArrowDown
              className="arrow"
              style={{
                transform:
                  activeIndex === 7 ? "rotate(180deg)" : "rotate(0deg)", // Rotate arrow based on state
              }}
            />
          </button>
          {activeIndex === 7 && (
            <div className="faq-answer">
              <p>The car inspection usually takes around 30-60 minutes.</p>
            </div>
          )}
        </div>
      </div>

      {/* New div with a message */}
      <div className="form-message">
        <p>Please fill out the following form to sell your car - </p>
      </div>

      {/* Form section below the process */}
      <div className="sell-car-form">
        {!submitted ? (
          <form onSubmit={handleSubmit}>
            <h3 className="form-title">Sell Your Car Form - </h3>
            {/* Seller Contact Information */}
            <fieldset>
              <legend>Seller Contact Information</legend>
              <br />
              <div className="form-group">
                <label htmlFor="firstName">Name:</label>
                <input
                  className="form-input"
                  type="text"
                  id="firstName"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="contactNumber">Contact Number:</label>
                <input
                  className="form-input"
                  type="tel"
                  id="contactNumber"
                  placeholder="Enter your contact number"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="address">Address:</label>
                <textarea
                  className="form-input form-textarea"
                  id="address"
                  placeholder="Enter your address..."
                  rows="3"
                  required
                />
              </div>
            </fieldset>
            <br />
            {/* Car Details */}
            <fieldset>
              <legend>Car Details</legend>
              <br />
              <div className="form-group">
                <label htmlFor="carModel">Car Model:</label>
                <input
                  className="form-input"
                  type="text"
                  id="carModel"
                  placeholder="Enter car model"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="registrationNumber">Registration Number:</label>
                <input
                  className="form-input"
                  type="text"
                  id="registrationNumber"
                  placeholder="Enter registration number"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="carCondition">Car Condition:</label>
                <select
                  className="form-input form-select"
                  id="carCondition"
                  required
                >
                  <option value="Excellent">Excellent</option>
                  <option value="Good">Good</option>
                  <option value="Fair">Fair</option>
                  <option value="Needs Repair">Needs Repair</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="carImages">Upload Car Images:</label>
                <input
                  className="form-input form-file"
                  type="file"
                  id="carImages"
                  multiple
                  accept="image/*"
                />
              </div>
              <div className="form-group">
                <label htmlFor="additionalInfo">Additional Information:</label>
                <textarea
                  className="form-input form-textarea"
                  id="additionalInfo"
                  placeholder="Enter any additional information"
                ></textarea>
              </div>
            </fieldset>

            <button type="submit" className="submit-button">
              Submit
            </button>
          </form>
        ) : (
          <div className="confirmation-message">
            <h3>Thank You!</h3>
            <p>
              We have received your application. We will get back to you soon!
            </p>

            {/* Back Home Button */}
            <button className="back-home-btn" onClick={handleBackHome}>
              Back Home
            </button>

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
        )}
      </div>
    </div>
  );
};

export default SellCar;
