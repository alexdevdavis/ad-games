import { React } from "react";

export default function UserVote({ clickFn, isDisabled, btnMessage }) {
  return (
    <button disabled={isDisabled} onClick={clickFn}>
      {btnMessage}
    </button>
  );
}
