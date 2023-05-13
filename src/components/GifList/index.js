import React from "react";

import Gif from "../Gif";
import "./GifList.css";

export default function GifList({ gifs }) {
  return (
    <section className="gif-list">
      {gifs.map(({ id, title, images, user }) => (
        <Gif key={id} title={title} images={images} id={id} user={user} />
      ))}
    </section>
  );
}
