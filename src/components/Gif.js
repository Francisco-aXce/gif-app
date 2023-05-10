import React from "react";

import "./Gif.css";

export default function Gif({ title, id, images, user }) {
  return (
    <div className="gif-card">
      <img src={images.downsized_large.url} alt={title} />
      <div className="gif-info">
        {user && <img src={user.avatar_url} alt={user.display_name} />}
        <div className="description">
          <h4 className="title">{title}</h4>
          {user && <h6 className="username">{user.display_name}</h6>}
        </div>
      </div>
    </div>
  );
}
