import React from "react";

export default function CommentCard({ data }) {
  const date = new Date(data.created_at).toLocaleString();

  return (
    <article className="comment-card">
      <h5 className="comment-card__author">{data.author}</h5>
      <p className="comment-card__date">{date}</p>
      <p className="comment-card__body-text">{data.body}</p>
      <p className="comment-card__votes">{data.votes} votes</p>
    </article>
  );
}
