import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import Gif from "components/Gif";
import "./GifList.css";
import { randomNumberInRange } from "services/utils";
import { PLACEHOLDER_COLORS } from "services/settings";

export default function GifList({ gifs, loading }) {
  return (
    <section className="gif-list">
      {loading ? (
        <SkeletonLoadingGifs count={20} />
      ) : (
        gifs.map(({ id, title, images, user }) => (
          <Gif key={id} title={title} images={images} id={id} user={user} />
        ))
      )}
    </section>
  );
}

function SkeletonLoadingGifs({ count }) {
  const minHeight = 150;
  const maxHeight = 350;

  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <Skeleton
          key={index}
          height={randomNumberInRange(minHeight, maxHeight)}
          baseColor={PLACEHOLDER_COLORS[index % PLACEHOLDER_COLORS.length]}
          highlightColor="#f5f5f530"
        />
      ))}
    </>
  );
}
