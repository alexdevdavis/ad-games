import { React, useContext, useState } from "react";
import UserContext from "../contexts/User";

export default function NewComment() {
  const { user } = useContext(UserContext);

  const [newComment, setNewComment] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(newComment);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input
          type="text"
          name="comment-text"
          value={newComment}
          onChange={(event) => {
            setNewComment(event.target.value);
          }}
        />
        <button>post comment</button>
      </label>
    </form>
  );
}
