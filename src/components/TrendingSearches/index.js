import Category from "components/Category";
import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { getTrendingSearches } from "services/getTrendingSearches";
import "./TrendingSearches.css";

export default function TrendingSearches() {
  const [trends, setTrends] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getTrendingSearches().then((trends) => {
      setTrends(trends);
      setLoading(false);
    });
  }, []);

  return (
    <div className="trend-container">
      {loading ? (
        <SkeletonLoadingTrends count={12} />
      ) : (
        trends.map((trend, index) => <Category key={index} name={trend} />)
      )}
    </div>
  );
}

function SkeletonLoadingTrends({ count }) {
  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <Skeleton
          key={index}
          baseColor="#666666"
          highlightColor="#b1b1b1"
          borderRadius={30}
          width={100}
          height={30}
        />
      ))}
    </>
  );
}
