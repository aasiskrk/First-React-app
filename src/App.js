import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage";
import Registerpage from "./pages/register/Registerpage";
import Loginpage from "./pages/login/Loginpage";
import Navbar from "./components/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminUpdate from "./pages/admin/AdminUpdate";
import AdminRoutes from "./protected_routes/AdminRoutes";
import UserRoutes from "./protected_routes/UserRoutes";
import Profilepage from "./pages/profile/Profilepage";

function App() {
  return (
    <Router>
      <Navbar />
      <ToastContainer />
      <Routes>
        {/* Unrestricted route */}
        <Route path="/" element={<Homepage />} />

        <Route path="/register" element={<Registerpage />} />

        <Route path="/login" element={<Loginpage />} />

        {/* Profile  */}
        <Route element={<UserRoutes />}>
          <Route path="/profile" element={<Profilepage />} />
        </Route>

        {/* Admin Routes */}
        <Route element={<AdminRoutes />}>
          <Route path="/admin/dashboard" element={<AdminDashboard />} />

          <Route path="/admin/update/:id" element={<AdminUpdate />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
