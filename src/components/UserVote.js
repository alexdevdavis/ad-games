import { React } from "react";

export default function UserVote({ btnId, clickFn, isDisabled, btnMessage, hasBtn }) {
  return (
    <button id={btnId} disabled={isDisabled} onClick={clickFn}>
      {btnMessage}
    </button>
  );
}
