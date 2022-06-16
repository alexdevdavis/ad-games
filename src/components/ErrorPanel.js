import React from "react";
import { Link } from "react-router-dom";

export default function ErrorPanel({ error }) {
  console.log(error.response);

  return (
    <div>
      <p>
        Sorry chum ... Error {error.response.status}, which means{" "}
        {error.response.data}
      </p>
      <p>
        You might try selecting from a{" "}
        <Link to="/reviews">list of reviews</Link> to read instead
      </p>
    </div>
  );
}
