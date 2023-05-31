import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import "./SearchResults.css";
import useGifs from "hooks/useGifs";
import GifList from "components/GifList";
import SearchInput from "components/SearchInput";

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
      <SearchInput initialKeyword={normalizedKeyword} showTrending={false} />
      {loading ? (
        <Skeleton style={{ margin: "17px 0" }} width={270} height={20} />
      ) : (
        <h1 className="title">{title ?? normalizedTitle}</h1>
      )}
      <GifList gifs={gifs} loading={loading} />
    </section>
  );
}
