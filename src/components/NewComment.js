import { React, useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../contexts/User";
import { postComment } from "../utils/api";

export default function NewComment({ review, setReview }) {
  const { user } = useContext(UserContext);
  const { review_id } = useParams();

  const [newComment, setNewComment] = useState("");
  const [submitMessage, setSubmitMessage] = useState("post comment");

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitMessage(`thanks ${user.username}`);
    postComment(review_id, user.username, newComment)
      .then((res) => {
        setNewComment("");
        setReview((prevReview) =>
          Object.assign({}, prevReview, {
            comment_count: prevReview.comment_count + 1,
          })
        );
        setTimeout(() => {
          setSubmitMessage("post comment");
        }, 3000);
      })
      .catch((err) => {
        setSubmitMessage("try again");
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input
          type="textarea"
          name="comment-text"
          value={newComment}
          onChange={(event) => {
            setNewComment(event.target.value);
          }}
        />
      </label>
      <button>{submitMessage}</button>
    </form>
  );
}
