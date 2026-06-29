import { BrowserRouter, Routes, Route } from "react-router-dom";

import Register from "./pages/Register";
import Login from "./pages/Login";
import OwnerDashboard from "./pages/OwnerDashboard";
import Rooms from "./pages/Rooms";
import CheckInOut from "./pages/CheckInOut";
import Housekeeping from "./pages/Housekeeping";
import Maintenance from "./pages/Maintenance";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Register page first */}
        <Route path="/" element={<Register />} />

        {/* Login page */}
        <Route path="/login" element={<Login />} />

        {/* Dashboard page */}
        <Route path="/dashboard" element={<OwnerDashboard />} />

        {/* Rooms page */}
        <Route path="/rooms" element={<Rooms />} />


<Route path="/checkinout" element={<CheckInOut />} />

<Route path="/housekeeping" element={<Housekeeping />} />

<Route path="/maintenance" element={<Maintenance />} />



      </Routes>
    </BrowserRouter>
  );
}

export default App;