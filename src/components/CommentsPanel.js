import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getComments } from "../utils/api";
import CommentCard from "./CommentCard";

export default function CommentsPanel({setCommentCount}) {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { review_id } = useParams();

  useEffect(() => {
    getComments(review_id)
      .then(({ comments }) => {
        setComments(comments);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [review_id, comments]);

  if (isLoading) {
    return <p className="loading">Loading ... </p>;
  }

  return (
    <>
      <ul className="comments-panel">
        {comments.map((comment) => {
          return (
            <li
              className="comments-panel__comment-card"
              key={comment.comment_id}
            >
              <CommentCard data={comment} setCommentCount={setCommentCount} />
            </li>
          );
        })}
      </ul>
    </>
  );
}
