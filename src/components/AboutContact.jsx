import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { VscGithub } from "react-icons/vsc";
import { FaLinkedin } from "react-icons/fa";

const AboutContact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const navigate = useNavigate(); // Initialize useNavigate hook
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Simulate form submission (replace with actual submission logic)
    setFormSubmitted(true);
  };

  // Handle Back Home button click
  const handleBackHome = () => {
    navigate("/"); // Redirect to the homepage using navigate
    window.scrollTo(0, 0);
  };

  return (
    <div className="about-section">
      <section className="about-us">
        <h2 className="about-heading">ABOUT US</h2>

        {/* About Image */}
        <img
          src="/about.jpg"
          alt="PrimeRides - The Future of Car Shopping"
          className="about-us-image"
        />

        <p className="intro-text">
          At <strong>PrimeRides</strong>, we are redefining the way you buy and
          sell cars. Explore our innovative platform where cutting-edge
          technology meets a seamless car shopping experience. We are redefining
          the way you buy and sell cars. From sleek luxury cars to reliable
          family rides, we bring you a wide range of options to match every
          lifestyle. Our commitment to innovation ensures that every step of
          your journey is powered by convenience, efficiency, and trust.
        </p>

        <div className="mission">
          <h3>OUR MISSION 🎯</h3>
          <p>
            To empower you with tools and insights to make informed decisions
            while connecting you with your dream car. 🚙💨.
            <br /> Whether you're upgrading to the latest model or finding your
            first car, we’re here to guide you every step of the way. With
            transparency and expert support, PrimeRides makes car buying and
            selling a hassle-free and rewarding experience. 🔑✨.
          </p>
        </div>

        <div className="features">
          <h3>WHAT SETS US APART? 🔑</h3>
          <ul>
            <li>
              <strong>Immersive 3D Models </strong>: Experience a virtual
              showroom where you can explore the latest car collections in
              stunning 3D detail.
            </li>
            <li>
              <strong>Easy Buying & Selling </strong>: Streamlined processes
              that save you time and hassle.
            </li>
            <li>
              <strong>Trusted Connections </strong>: A network of verified
              buyers and sellers you can count on.
            </li>
          </ul>
        </div>

        <div className="call-to-action">
          <h3>DISCOVER THE FUTURE OF CAR SHOPPING 🔮</h3>
          <p>
            Whether you're upgrading, selling, or exploring, PrimeRides is your
            trusted partner. Let us help you find your next ride in a way that's
            effortless, enjoyable, and innovative. 🚘💫
          </p>
          <button className="explore-btn-about">Start Your Journey 🚀</button>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="contact-us">
        <h2>CONTACT US</h2>
        <p>
          Have questions or need assistance? We're here to help! Reach out to us
          and we’ll get back to you as soon as possible.
        </p>
        <p>
          <strong>Email 📧:</strong> support@primerides.com
        </p>
        <p>
          <strong>Phone 📞 :</strong> +123 456 7890
        </p>
        <p>
          <strong>Address 📍:</strong> 123 Innovation Street, Tech City
        </p>
      </section>

      {/* Get in Touch Section */}
      <section className="get-in-touch">
        <h2>GET IN TOUCH</h2>
        {!formSubmitted ? (
          <form onSubmit={handleFormSubmit}>
            <div>
              <label>Name:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label>Message:</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
              ></textarea>
            </div>
            <button type="submit">Submit</button>
          </form>
        ) : (
          <p>Thank you for getting in touch! We will respond shortly.</p>
        )}
      </section>

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

      {/* Back Home Button */}
      <button className="back-home-btn-about" onClick={handleBackHome}>
        Back Home
      </button>
    </div>
  );
};

export default AboutContact;
