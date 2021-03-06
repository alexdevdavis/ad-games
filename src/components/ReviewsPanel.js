import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReviewCard from "./ReviewCard";
import { getReviews } from "../utils/api";
import SortOrderControls from "./SortOrderControls";
import ErrorPanel from "./ErrorPanel";

export default function ReviewsPanel() {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sort, setSort] = useState("created_at");
  const [order, setOrder] = useState("DESC");
  const [error, setError] = useState(null);

  const { category_slug } = useParams();

  useEffect(() => {
    getReviews(sort, order, category_slug)
      .then(({ reviews }) => {
        setReviews(reviews);
        setIsLoading(false);
      })
      .catch((err) => setError(err));
  }, [category_slug, sort, order]);

  if (isLoading) {
    return <p className="Loading">Loading ... </p>;
  }

  if (error) {
    return <ErrorPanel error={error} />;
  }

  return (
    <>
      <SortOrderControls
        sort={sort}
        setSort={setSort}
        order={order}
        setOrder={setOrder}
      />
      <ul className="reviews-panel">
        {reviews.map((review) => {
          return (
            <li className="reviews-panel__review-card" key={review.review_id}>
              <ReviewCard data={review} />
            </li>
          );
        })}
      </ul>
    </>
  );
}
