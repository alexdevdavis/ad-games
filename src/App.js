import "./App.css";
import ReviewsPanel from "./components/ReviewsPanel";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import { UserContext } from "../src/contexts/User";
import CategoriesPanel from "../src/components/CategoriesPanel";
import SingleReview from "./components/SingleReview";
import ErrorPanel from "./components/ErrorPanel";

function App() {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<ReviewsPanel />} />
          <Route path="/reviews/*" element={<ReviewsPanel />} />
          <Route path="/reviews/:review_id" element={<SingleReview />} />
          <Route path="/categories" element={<CategoriesPanel />} />
          <Route path="/categories/:category_slug" element={<ReviewsPanel />} />
          <Route path="/*" element={<ErrorPanel />} />
          <Route path="/categories/*" element={<ErrorPanel />} />
        </Routes>
      </div>
    </UserContext.Provider>
  );
}

export default App;
