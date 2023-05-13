import { useEffect, useState } from "react";
import { getGifs } from "../services/gifService";

export default function useGifs({ keyword }) {
  const [loading, setLoading] = useState(false);
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    setLoading(true);
    getGifs(keyword).then((gifs) => {
      setGifs(gifs);
      setLoading(false);
      // Save last search in localStorage
      localStorage.setItem("last-search", keyword);
    });
  }, [keyword]);

  return { loading, gifs };
}
