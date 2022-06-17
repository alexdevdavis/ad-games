import { React, useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../contexts/User";
import { postComment } from "../utils/api";

export default function NewComment({ review, setReview }) {
  const { user } = useContext(UserContext);
  const { review_id } = useParams();

  const [newComment, setNewComment] = useState("");
  const [submitMessage, setSubmitMessage] = useState("post comment");
  const [isBtnDisabled, setIsBtnDisabled] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitMessage(`thanks ${user.username}`);
    postComment(review_id, user.username, newComment)
      .then((res) => {
        setNewComment("");
        setIsBtnDisabled(true);
        setReview((prevReview) =>
          Object.assign({}, prevReview, {
            comment_count: prevReview.comment_count + 1,
          })
        );
        setTimeout(() => {
          setIsBtnDisabled(false);
          setSubmitMessage("post comment");
        }, 3000);
      })
      .catch((err) => {
        setSubmitMessage("try again");
      });
  };

  return (
    <form onSubmit={handleSubmit} className="new-comment__form">
      <label className="new-comment__label">write a comment: 
      </label>
        <textarea
          className="new-comment__input"
          required
          value={newComment}
          onChange={(event) => {
            setNewComment(event.target.value);
          }}
        />
      <button className="new-comment--submit-btn" disabled={isBtnDisabled}>
        {submitMessage}
      </button>
    </form>
  );
}
