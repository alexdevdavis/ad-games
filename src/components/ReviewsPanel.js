import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReviewCard from "./ReviewCard";
import { getReviews } from "../utils/api";

export default function ReviewsPanel() {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { category_slug } = useParams();

  useEffect(() => {
    getReviews(category_slug)
      .then(({ reviews }) => {
        setReviews(reviews);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [category_slug]);

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
