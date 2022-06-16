import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getReviewById } from "../utils/api";

export default function SingleReview() {
  const [review, setReview] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const { review_id } = useParams();

  const date = new Date(review.created_at).toLocaleString();

  useEffect(() => {
    getReviewById(review_id).then(({ review }) => {
      setReview(review);
      setIsLoading(false);
    });
  }, [review_id]);

  if (isLoading) {
    return <p>...Loading</p>;
  }

  return (
    <article className="review-article">
      <h3 className="review-article__title">
        {review.title}
        <span className="review-article__byline"> || by {review.owner}</span>
      </h3>
      <section className="review-article__game-details-card">
        <p className="game-details-card__category">
          <span>category: </span> {review.category}
        </p>
        <p className="game-details-card__designer">
          designed by {review.designer}
        </p>
      </section>
      <section className="review-article__review-details-card">
        <p className="review-details-card__date">{date}</p>
        <p className="review-details-card__votes">{review.votes} votes</p>
        <p className="review-details-card__comments">
          {review.comment_count} comments
        </p>
      </section>
      <img
        className="review-article__image"
        src={review.review_img_url}
        alt={`${review.owner}'s pictoral representation of this ${review.category} game`}
      />
      <p className="review-article__body-text">{review.review_body}</p>
    </article>
  );
}
