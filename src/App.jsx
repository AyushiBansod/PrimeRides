import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Newcollection from "./components/Newcollection";
import MostSearchCar from "./components/MostSearchCar";
import AllCars from "./components/AllCars";
import SellCar from "./components/SellCar";
import CarModelOne from "./components/CarModelOne"; // For McLaren Spider
import CarModelTwo from "./components/CarModelTwo"; // For Chevrolet Corvette C7
import ElectricCars from "./components/ElectricCars";
import ViewOffers from "./components/ViewOffers";
import AlertMe from "./components/AlertMe";

function App() {
  const ConditionalComponents = () => {
    const location = useLocation();

    // Define paths where MostSearchCar and ElectricCars are NOT displayed
    const excludedPaths = [
      "/new-collection",
      "/all-cars",
      "/sell",
      "/car-model",
      "/car-model-two",
      "/view-offers", // Exclude ViewOffers route
      "/alert-me",
    ];

    return (
      <>
        {!excludedPaths.includes(location.pathname) && (
          <>
            <MostSearchCar />
            <h2 className="nc">ELECTRIC CARS</h2>
            <ElectricCars />
          </>
        )}
      </>
    );
  };

  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new-collection" element={<Newcollection />} />
          <Route path="/all-cars" element={<AllCars />} />
          <Route path="/sell" element={<SellCar />} />
          <Route path="/car-model" element={<CarModelOne />} />{" "}
          {/* McLaren Spider */}
          <Route path="/car-model-two" element={<CarModelTwo />} />{" "}
          {/* BMW M8 */}
          <Route path="/view-offers" element={<ViewOffers />} />{" "}
          {/* View Offers */}
          <Route path="/alert-me" element={<AlertMe />} />
        </Routes>
        <ConditionalComponents />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
