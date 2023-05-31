import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import "./Home.css";
import { useLocation } from "wouter";
import useGifs from "hooks/useGifs";
import GifList from "components/GifList";
import TrendingSearches from "components/TrendingSearches";

export default function Home() {
  const [keyword, setKeyword] = useState("");
  const [, navigate] = useLocation();

  const lastSearch = localStorage.getItem("last-search") || "argentina";
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
    <section className="container">
      <h1 className="app-title center">GMotion</h1>
      <form onSubmit={handleSearch}>
        <div className="search">
          <div className="input">
            <input
              type="text"
              placeholder="Search a gif here..."
              value={keyword}
              onChange={handleKeywordChange}
            />
            <button>
              <FontAwesomeIcon icon={faSearch} size="xl" />
            </button>
          </div>
          <TrendingSearches />
        </div>
      </form>
      <section>
        <h2 className="app-title">Last search</h2>
        <GifList gifs={gifs} loading={loading}></GifList>
      </section>
    </section>
  );
}
