import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getReviewById, patchUpvote } from "../utils/api";
import CommentsPanel from "./CommentsPanel";
import ErrorPanel from "./ErrorPanel";
import UserVote from "./UserVote";
import Expandible from "./Expandible";

export default function SingleReview() {
  const [review, setReview] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [userVotes, setUserVotes] = useState(1);
  const [isVoteDisabled, setIsVoteDisabled] = useState(!userVotes);
  const [voteMessage, setVoteMessage] = useState("upvote review");
  const [optimisticVotes, setOptimisticVotes] = useState(0);

  const { review_id } = useParams();
  const date = new Date(review.created_at).toLocaleString();

  useEffect(() => {
    getReviewById(review_id)
      .then(({ review }) => {
        setReview(review);
        setOptimisticVotes(review.votes);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
      });
  }, [review_id]);

  const handleClick = () => {
    setOptimisticVotes((prevVotes) => prevVotes + 1);
    setUserVotes(0);
    setIsVoteDisabled(true);
    setVoteMessage("you've upvoted");
    patchUpvote(review_id, 1).catch((err) => {
      setUserVotes(1);
      setVoteMessage("upvote failed");
      setIsVoteDisabled(false);
    });
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
      </section>
      <img
        className="review-article__image"
        src={review.review_img_url}
        alt={`${review.owner}'s pictoral representation of this ${review.category} game`}
      />
      <p className="review-article__body-text">{review.review_body}</p>
      <section className="review-interactions__votes">
        <p className="review-interactions__vote-count">
          {optimisticVotes} votes
        </p>
        <UserVote
          className="review-interactions--vote"
          clickFn={handleClick}
          isDisabled={isVoteDisabled}
          btnMessage={voteMessage}
        />
      </section>
      <section className="review-interactions__comments">
        <p className="review-interactions__comment-count">
          {review.comment_count} comments
        </p>
        {review.comment_count ? (
          <Expandible>
            <CommentsPanel />
          </Expandible>
        ) : null}
      </section>
    </article>
  );
}
