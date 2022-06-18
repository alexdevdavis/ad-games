import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getCategories } from "../utils/api";
import ErrorPanel from "./ErrorPanel";

export default function CategoriesPanel() {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    getCategories()
      .then(({ categories }) => {
        setCategories(categories);
        setIsLoading(false);
      })
      .catch((err) => setError(err));
  }, []);

  if (isLoading) {
    return <p>Loading ...</p>;
  }

  if (error) {
    return <ErrorPanel error={error} />;
  }

  return (
    <ul className="categories-panel">
      {categories.map((category) => {
        return (
          <li className="categories-panel__category-card" key={category.slug}>
            <Link to={`/categories/${category.slug}`}>
              <h3 className="category-card__category-title">{category.slug}</h3>
              <p className="category-card__category-description">
                {category.description}
              </p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
