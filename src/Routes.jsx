import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Hotel from "./pages/Hotel";
import Activities from "./pages/Activities";
import Flight from "./pages/Flight";


const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Home
          />
        }
      />
      <Route path="Home" element={<Home />} />
      <Route path="hotel" element={<Hotel />} />
      <Route path="flight" element={<Flight />} />
      <Route path="activities" element={<Activities />} />
    </Routes>
  );
};

export default AppRoutes;
