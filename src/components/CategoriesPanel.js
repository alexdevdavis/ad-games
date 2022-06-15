import { React, useState, useEffect } from "react";
import { getCategories } from "../utils/api";

export default function CategoriesPanel() {
  const [categories, setCategories] = useState([]);
  const [loading, isLoading] = useState(true);

  useEffect(() => {
    getCategories()
      .then(({ categories }) => {
        console.log(categories);
      })
      .catch((err) => console.log(err));
  }, []);

  if (isLoading) {
    return <p>Loading ...</p>;
  }

  return <div>CategoriesPanel</div>;
}
