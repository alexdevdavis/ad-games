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

function App() {
  const [user, setUser] = useState({
    username: "weegembump",
    name: "Gemma Bump",
    avatar_url:
      "https://vignette.wikia.nocookie.net/mrmen/images/7/7e/MrMen-Bump.png/revision/latest?cb=20180123225553",
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<LandingPanel />} />
          <Route path="/reviews" element={<ReviewsPanel />} />
          <Route path="/reviews/:review_id" element={<SingleReview />} />
          <Route path="/categories" element={<CategoriesPanel />} />
          <Route path="/categories/:category_slug" element={<ReviewsPanel />} />
          <Route path="/users" element={<AllUsersPanel />} />
        </Routes>
      </div>
    </UserContext.Provider>
  );
}

export default App;
