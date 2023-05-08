import React from "react";

export default function Gif({ title, id, images }) {
  return (
    <div>
      <img src={images.downsized_large.url} alt={title} />
      <h4>{title}</h4>
    </div>
  );
}
