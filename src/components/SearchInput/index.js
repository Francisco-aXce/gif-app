import React, { useState } from "react";
import { useLocation } from "wouter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import "./SearchInput.css";
import TrendingSearches from "components/TrendingSearches";

export default function SearchInput({
  showTrending = true,
  initialKeyword = "",
}) {
  const [keyword, setKeyword] = useState(initialKeyword);
  const [, navigate] = useLocation();

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
        {showTrending && <TrendingSearches />}
      </div>
    </form>
  );
}
