import React, { useState, useEffect } from "react";

import Gif from "./Gif";
import { getGifs } from "../services/gifService";
import "./GifList.css";

export default function GifList({ params }) {
  const { keyword } = params;

  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    getGifs(keyword).then((gifs) => setGifs(gifs));
  }, [keyword]);

  return (
    <section className="gif-list">
      {gifs.map(({ id, title, images, user }) => (
        <Gif key={id} title={title} images={images} id={id} user={user} />
      ))}
    </section>
  );
}
