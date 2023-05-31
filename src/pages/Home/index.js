import React from "react";

import "./Home.css";
import useGifs from "hooks/useGifs";
import GifList from "components/GifList";
import SearchInput from "components/SearchInput";

export default function Home() {
  const lastSearch = localStorage.getItem("last-search") || "argentina";
  const { gifs, loading } = useGifs({ keyword: lastSearch });

  return (
    <section className="container">
      <h1 className="app-title center">GMotion</h1>
      <SearchInput />

      <section>
        <h2 className="app-title">Last search</h2>
        <GifList gifs={gifs} loading={loading}></GifList>
      </section>
    </section>
  );
}
