import React from "react";

import useGifs from "../../hooks/useGifs";
import Spinner from "../Spinner";
import GifList from "../GifList";

export default function SearchResults({ params, title }) {
  const { keyword } = params;
  const { gifs, loading } = useGifs({ keyword });

  const normalizedTitle =
    gifs.length > 0 ? `Results for ${keyword}` : `No results for ${keyword} 😔`;

  return (
    <section className="search-results">
      {loading ? (
        <Spinner />
      ) : (
        <>
          <h1>{title ?? normalizedTitle}</h1>
          <GifList gifs={gifs} />
        </>
      )}
    </section>
  );
}
