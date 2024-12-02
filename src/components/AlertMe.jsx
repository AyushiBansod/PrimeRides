import React, { useState, useEffect } from "react";

const AlertMe = () => {
  useEffect(() => {
    // Scroll to top when the component is rendered
    window.scrollTo(0, 0);
  }, []);

  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [isConsentChecked, setIsConsentChecked] = useState(false);
  const [whatsappOptIn, setWhatsappOptIn] = useState(false);

  const handleSubmit = () => {
    if (!phoneNumber) {
      alert("Please enter a phone number!");
      return;
    }

    if (!/^\d{10}$/.test(phoneNumber)) {
      alert("Phone number must be exactly 10 digits!");
      return;
    }

    if (!city) {
      alert("Please enter your city!");
      return;
    }

    if (!isConsentChecked) {
      alert("Please agree to the terms before submitting.");
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setShowMessage(true);
    }, 3000);
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    if (/^\d{0,10}$/.test(value)) {
      setPhoneNumber(value); // Only allow up to 10 digits
    }
  };

  return (
    <div className="alertme-container">
      <h2>Enter Your Details</h2>

      <div className="alertme-input-container">
        <input
          type="tel"
          className="alertme-input"
          placeholder="Enter Phone Number"
          value={phoneNumber}
          onChange={handlePhoneChange}
        />
      </div>

      <div className="alertme-input-container">
        <input
          type="text"
          className="alertme-input"
          placeholder="Enter City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </div>

      <div className="alertme-info-message">
        <p>
          <br />
          You can choose to receive updates on the car launch via WhatsApp by
          opting in below.
        </p>
      </div>

      <div className="alertme-input-container whatsapp-optin">
        <label>
          <input
            type="checkbox"
            checked={whatsappOptIn}
            onChange={() => setWhatsappOptIn(!whatsappOptIn)}
          />
          Opt-in for WhatsApp notifications
        </label>
      </div>

      <div className="alertme-consent-container">
        <label className="alertme-consent-label">
          <input
            type="checkbox"
            checked={isConsentChecked}
            onChange={() => setIsConsentChecked(!isConsentChecked)}
          />
          By proceeding, I confirm that I have read, and agree to:
          <div className="alertme-consent-text">
            <p>
              <a href="/data-sharing">Data Sharing for Loan Eligibility</a> ,
              <a href="/marketing">Marketing Communication</a> ,
              <a href="/privacy-policy">Privacy Policy</a> ,
              <a href="/terms-conditions">Terms & Conditions</a>, Consent
              Declaration, and Certified CIC.
            </p>
          </div>
        </label>
      </div>

      <div className="alertme-input-container">
        <button
          onClick={handleSubmit}
          disabled={isSubmitting}
          className="alertme-submit-button"
        >
          Submit
        </button>
      </div>

      {isSubmitting && (
        <div className="alertme-loading-container">
          <div className="alertme-loader"></div>
          <p>Verifying...</p>
        </div>
      )}

      {showMessage && !isSubmitting && (
        <div className="alertme-confirmation-message">
          <p>
            You will be notified when the car is launched!{" "}
            {whatsappOptIn && "We will also send updates via WhatsApp."}
          </p>
        </div>
      )}
    </div>
  );
};

export default AlertMe;
