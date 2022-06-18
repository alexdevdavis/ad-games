import "./App.css";
import ReviewsPanel from "./components/ReviewsPanel";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import LandingPanel from "./components/LandingPanel";
import { UserContext } from "../src/contexts/User";
import CategoriesPanel from "../src/components/CategoriesPanel";
import AllUsersPanel from "./components/AllUsersPanel";
import SingleReview from "./components/SingleReview";
import ErrorPanel from "./components/ErrorPanel";

function App() {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<LandingPanel />} />
          <Route path="/reviews/*" element={<ReviewsPanel />} />
          <Route path="/reviews/:review_id" element={<SingleReview />} />
          <Route path="/categories" element={<CategoriesPanel />} />
          <Route path="/categories/:category_slug" element={<ReviewsPanel />} />
          <Route path="/users" element={<AllUsersPanel />} />
          <Route path="/*" element={<ErrorPanel />} />
        </Routes>
      </div>
    </UserContext.Provider>
  );
}

export default App;
