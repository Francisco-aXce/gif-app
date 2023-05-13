import React, { useContext } from "react";
import GifsContext from "../../context/GifsContext";
import Gif from "../../components/Gif";

export default function Detail({ params }) {
  const { id } = params;
  const { gifs } = useContext(GifsContext);

  const selectedGif = gifs.find((gif) => gif.id === id);

  return (
    <>
      <h1>Detail</h1>
      <Gif {...selectedGif} />
    </>
  );
}
