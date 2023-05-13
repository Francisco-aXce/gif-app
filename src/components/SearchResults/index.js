import React from "react";

import "./SearchResults.css";
import useGifs from "hooks/useGifs";
import Spinner from "components/Spinner";
import GifList from "components/GifList";

export default function SearchResults({ params, title }) {
  const { keyword } = params;
  const { gifs, loading } = useGifs({ keyword });

  const normalizedKeyword = decodeURI(keyword);
  const normalizedTitle =
    gifs.length > 0
      ? `Results for ${normalizedKeyword}`
      : `No results for ${normalizedKeyword} 😔`;

  return (
    <section className="search-results">
      {loading ? (
        <Spinner />
      ) : (
        <>
          <h1 className="title">{title ?? normalizedTitle}</h1>
          <GifList gifs={gifs} />
        </>
      )}
    </section>
  );
}
