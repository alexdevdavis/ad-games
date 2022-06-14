import React from "react";

export default function UserPanel() {
  return (
    <section className="user-panel">
      <h3 className="user-panel__username">userboi_3000</h3>
      <img
        className="user-panel__user-image"
        src="https://i.imgur.com/seoaGbO.png"
        alt="user avatar"
      />
      <div className="user-panel__user-stats">
      <p className="user-panel__user-comments">15 comments</p>
      <p className="user-panel__user-votes">30 votes</p>
      </div>
    </section>
  );
}
