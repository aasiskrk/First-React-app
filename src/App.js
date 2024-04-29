import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage";
import Registerpage from "./pages/register/Registerpage";
import Loginpage from "./pages/login/Loginpage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />

        <Route path="/register" element={<Registerpage />} />

        {/* Login Route */}

        <Route path="/login" element={<Loginpage />} />
      </Routes>
    </Router>
  );
}

export default App;
