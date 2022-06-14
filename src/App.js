import "./App.css";
import ReviewsPanel from "./components/ReviewsPanel";
import { Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/reviews" element={<ReviewsPanel />} />
      </Routes>
    </div>
  );
}

export default App;
