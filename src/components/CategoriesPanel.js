import { React, useState, useEffect } from "react";
import { getCategories } from "../utils/api";

export default function CategoriesPanel() {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getCategories()
      .then(({ categories }) => {
        setCategories(categories);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  if (isLoading) {
    return <p>Loading ...</p>;
  }

  return (
    <ul className="categories-panel">
      {categories.map((category) => {
        return (
          <li className="categories-panel__category-card" key={category.slug}>
            <h3 className="category-card__category-title">{category.slug}</h3>
            <p className="category-card__category-description">
              {category.description}
            </p>
          </li>
        );
      })}
    </ul>
  );
}
