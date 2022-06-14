import { React, useEffect, useState } from "react";
import { getReviews } from "../utils/api";

export default function ReviewsPanel() {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getReviews().then(({ reviews }) => {
      setReviews(reviews);
      setIsLoading(false);
      console.log(reviews);
    });
  }, []);

  if (isLoading) {
    return <p className="Loading">Loading ... </p>;
  }

  return <div>Reviews</div>;
}
