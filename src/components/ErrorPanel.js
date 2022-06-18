import { React, useEffect, useState } from "react";

export default function ErrorPanel({ error }) {
  const [errorStatus, setErrorStatus] = useState();
  const [errorMessage, setErrorMessage] = useState();

  useEffect(() => {
    if (error) {
      setErrorStatus(error.response.status);
      setErrorMessage(error.reponse);

      switch (errorStatus) {
        case 404:
          break;

        default:
      }
    } else {
      setErrorStatus(404);
      setErrorMessage(" not found");
    }
  }, [error, errorStatus]);

  return (
    <section className="error-panel">
      <p className="error-panel__apology">
        Sorry chum ... Error {errorStatus},{errorMessage}
      </p>
      <img
        className="error-panel__image"
        src="https://images.squarespace-cdn.com/content/57d1aa301b631bf49b5ab45b/1579623093350-S9I1C0L88XYFU7SAMUMC/invis+man.jpg?content-type=image%2Fjpeg"
        alt="sorry your request has not worked"
      />
    </section>
  );
}
