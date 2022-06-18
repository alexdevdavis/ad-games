import { React } from "react";

export default function ButtonComponent({ btnId, clickFn, isDisabled, btnMessage}) {
  return (
    <button id={btnId} disabled={isDisabled} onClick={clickFn}>
      {btnMessage}
    </button>
  );
}
