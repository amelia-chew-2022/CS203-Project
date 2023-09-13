import Home from "./pages/Home";
import SeatSelect from "./pages/SeatSelect"; // Corrected component name
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/seatselect" element={<SeatSelect />} /> {/* Corrected path */}
      </Routes>
    </Router>
  );
};

export default App;
