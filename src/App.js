import "./App.css";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import LandingPage from "./components/landingPage";
function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
    </Routes>
    // <div>hello memlock</div>
  );
}

export default App;
