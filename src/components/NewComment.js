import { React, useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../contexts/User";

export default function NewComment() {
  const { user } = useContext(UserContext);
  const { review_id } = useParams();

  const [newComment, setNewComment] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    
    console.log(newComment, "<<<------- new comment text");
    console.log(user.username, "<<<<----------from this user");
    console.log(review_id, "<<<<<<<<------- for this review");
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
      <button>post comment</button>
    </form>
  );
}
