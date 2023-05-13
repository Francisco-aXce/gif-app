import React, { useState } from "react";

import "./Home.css";
import { useLocation } from "wouter";
import useGifs from "hooks/useGifs";
import GifList from "components/GifList";
import Spinner from "components/Spinner";

export default function Home() {
  const [keyword, setKeyword] = useState("");
  const [, navigate] = useLocation();

  const lastSearch = localStorage.getItem("last-search") || "trending";
  const { gifs, loading } = useGifs({ keyword: lastSearch });

  const handleSearch = (e) => {
    e.preventDefault();
    const normalizedKeyword = keyword.trim().replace(/\s+/g, " ");
    if (normalizedKeyword.length > 0) {
      navigate(`/search/${normalizedKeyword}`);
    }
  };

  const handleKeywordChange = (e) => {
    setKeyword(e.target.value);
  };

  return (
    <>
      <h1>Home</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search a gif here..."
          value={keyword}
          onChange={handleKeywordChange}
        />
        <button>Search</button>
      </form>
      <section>
        <h1>Last search</h1>
        {loading ? <Spinner /> : <GifList gifs={gifs}></GifList>}
      </section>
    </>
  );
}
