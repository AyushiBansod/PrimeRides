import React, { useEffect } from "react";

const ViewOffers = () => {
  useEffect(() => {
    // Scroll to top when the component is rendered
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="view-offers-container">
      <h1>Exciting Offers for January 2025!</h1>
      <p className="subtitle">
        Start your year with amazing rewards and surprises. Check out the
        exclusive deals and events below!
      </p>

      <div className="offers-grid">
        <div className="offer-card">
          <img src="/luckydraw.jpg" alt="Lucky Draw" className="offer-image" />
          <div className="offer-details">
            <h3>Grand Lucky Draw</h3>
            <p>
              Participate in our January Lucky Draw and stand a chance to win
              exciting prizes like luxury gadgets, travel vouchers, and more!
            </p>
            <p className="valid-until">Valid Until: January 31, 2025</p>
            <button className="claim-button">Enter Now</button>
          </div>
        </div>

        <div className="offer-card">
          <img
            src="/merchandise.jpg"
            alt="Gift Hamper"
            className="offer-image"
          />
          <div className="offer-details">
            <h3>Exclusive Gift Hampers</h3>
            <p>
              Shop with us this month and receive premium gift hampers,
              including branded merchandise, vouchers, and more.
            </p>
            <p className="valid-until">Valid Until: January 20, 2025</p>
            <button className="claim-button">Claim Now</button>
          </div>
        </div>

        <div className="offer-card">
          <img src="/VIPpass.jpg" alt="VIP Event" className="offer-image" />
          <div className="offer-details">
            <h3>Invitation to VIP Events</h3>
            <p>
              Be a part of our exclusive VIP events this month. Meet like-minded
              enthusiasts, enjoy gourmet experiences, and more!
            </p>
            <p className="valid-until">Valid Until: January 31, 2025</p>
            <button className="claim-button">Register Now</button>
          </div>
        </div>
      </div>

      {/* "Exclusive Events and Deals" */}
      <div className="exclusive-events">
        <h2>Exclusive Events and Deals</h2>
        <p>
          This January, we’re rolling out a variety of exciting events and
          exclusive offers that are tailored to make your experience memorable.
          Here’s a preview of what you can expect:
        </p>
        <ul>
          <li>
            <strong>Exclusive Product Previews:</strong> Get a first look at
            upcoming releases and new products before they hit the market!
          </li>
          <li>
            <strong>Interactive Online Contests:</strong> Participate in fun and
            engaging online contests for a chance to win fantastic prizes and
            giveaways!
          </li>
          <li>
            <strong>Webinars with Industry Experts:</strong> Join live sessions
            hosted by industry leaders, sharing valuable insights and tips.
          </li>
          <li>
            <strong>Flash Sales and Discount Days:</strong> Enjoy special flash
            sales and limited-time discounts on selected products throughout the
            month.
          </li>
          <li>
            <strong>Members-Only Experiences:</strong> Get access to special VIP
            experiences such as private showroom tours, behind-the-scenes looks,
            and more!
          </li>
        </ul>
        <p>
          Whether you're looking to learn something new, grab a limited-time
          deal, or get access to exclusive events, January 2025 is the month to
          make it happen!
        </p>
        <button className="explore-events-button">Explore All Events</button>
      </div>

      <div className="cta-section">
        <h3>Don’t Miss Out on the Fun!</h3>
        <p>
          Join us this January to kickstart the year with amazing offers and
          memorable experiences.
        </p>
        <button className="contact-button">Learn More</button>
      </div>
    </div>
  );
};

export default ViewOffers;
