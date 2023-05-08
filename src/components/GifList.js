import React, { useState, useEffect } from "react";

import Gif from "./Gif";
import { getGifs } from "../services/gifService";

export default function GifList({ keyword }) {
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    getGifs(keyword).then((gifs) => setGifs(gifs));
  }, [keyword]);

  return gifs.map(({ id, title, images }) => (
    <Gif key={id} title={title} images={images} id={id} />
  ));
}
