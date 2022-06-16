import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getReviewById } from "../utils/api";
import ErrorPanel from "./ErrorPanel";
import UserVote from "./UserVote";

export default function SingleReview() {
  const [review, setReview] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [hasVoted, setHasVoted] = useState(false);
  const [isVoteDisabled, setIsVoteDisabled] = useState(false);
  const [voteMessage, setVoteMessage] = useState(
    hasVoted ? "You've upvoted" : "1up!"
  );

  const { review_id } = useParams();

  const date = new Date(review.created_at).toLocaleString();

  useEffect(() => {
    getReviewById(review_id)
      .then(({ review }) => {
        setReview(review);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
      });
  }, [review_id]);

  const handleClick = () => {
    setIsVoteDisabled(hasVoted);
    setHasVoted((prevVoted) => !prevVoted);
  };

  if (isLoading) {
    return <p>...Loading</p>;
  }

  if (error) {
    return <ErrorPanel error={error} />;
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
      <p className="review-interactions__vote-count">
        Current votes: {review.votes + (hasVoted ? 1 : 0)}
        <UserVote
          className="review-interactions--vote"
          clickFn={handleClick}
          isDisabled={isVoteDisabled}
          btnMessage={voteMessage}
        />
      </p>
    </article>
  );
}
