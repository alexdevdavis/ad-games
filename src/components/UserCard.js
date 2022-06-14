import React from 'react'

export default function UserCard({user}) {
  return (
    <section className="user-panel">
      <h3 className="user-panel__username">{user.username}</h3>
      <img
        className="user-panel__user-image"
        src={user.avatar_url}
        alt="user avatar"
      />
      <div className="user-panel__user-stats">
        <p className="user-panel__user-comments">15 comments</p>
        <p className="user-panel__user-votes">30 votes</p>
      </div>
    </section>
  )
}
