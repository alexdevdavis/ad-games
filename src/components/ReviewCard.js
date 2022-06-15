import React from "react";

export default function ReviewCard({ data }) {
  const date = new Date(data.created_at).toLocaleString();
  return (
    <article className="review-card">
      <h5 className="review-card__title">
        {data.title}
        <span className="review-card__owner"> by {data.owner}</span>
      </h5>
      <p className="review-card__date">{date}</p>
      <p className="review-card__votes">{`${data.votes} votes`}</p>
      <p className="review-card__comments">{`${data.comment_count} comments`}</p>
      <img
        className="review-card__image"
        src={data.review_img_url}
        alt={`${data.owner}'s picked this to represent their review of ${data.title}`}
      />
    </article>
  );
}
