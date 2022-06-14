import "./App.css";
import ReviewsPanel from "./components/ReviewsPanel";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import LandingPanel from "./components/LandingPanel";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<LandingPanel />} />
        <Route path="/reviews" element={<ReviewsPanel />} />
      </Routes>
    </div>
  );
}

export default App;
