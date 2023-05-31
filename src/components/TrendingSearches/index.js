import Category from "components/Category";
import React, { useEffect, useState } from "react";
import { getTrendingSearches } from "services/getTrendingSearches";

import "./TrendingSearches.css";

export default function TrendingSearches() {
  const [trends, setTrends] = useState([]);

  useEffect(() => {
    getTrendingSearches().then(setTrends);
  }, []);

  return (
    <div className="trend-container">
      {trends.map((trend, index) => (
        <Category key={index} name={trend} />
      ))}
    </div>
  );
}
