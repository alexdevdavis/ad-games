import { React, useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";
import { getReviews } from "../utils/api";

export default function ReviewsPanel() {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getReviews()
      .then(({ reviews }) => {
        setReviews(reviews);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  if (isLoading) {
    return <p className="Loading">Loading ... </p>;
  }

  return (
    <>
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
