import { React, useContext, useEffect, useState } from "react";
import { deleteComment } from "../utils/api";
import ButtonComponent from "./ButtonComponent";
import { UserContext } from "../contexts/User";

export default function CommentCard({ data, setCommentCount }) {
  const date = new Date(data.created_at).toLocaleString();
  const { user } = useContext(UserContext);
  const [isUsersComment, setIsUsersComment] = useState(false);

  const handleDeleteClick = (event) => {
    deleteComment(event.target.id);
    setCommentCount((prevCommentCount) => prevCommentCount - 1);
  };
  useEffect(() => {
    if (user && user.username === data.author) {
      setIsUsersComment(true);
    }
  }, [user, data.author]);

  return (
    <article className="comment-card">
      <h5 className="comment-card__author">{data.author}</h5>
      <p className="comment-card__date">{date}</p>
      <p className="comment-card__body-text">{data.body}</p>
      <p className="comment-card__votes">{data.votes} votes</p>
      {isUsersComment ? (
        <ButtonComponent
          btnId={data.comment_id}
          clickFn={handleDeleteClick}
          isDisabled={false}
          btnMessage={"delete"}
        />
      ) : null}
    </article>
  );
}
