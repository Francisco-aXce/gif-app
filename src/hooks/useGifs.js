import { useEffect, useState, useContext } from "react";
import { getGifs } from "services/getGifs";
import GifsContext from "context/GifsContext";

export default function useGifs({ keyword }) {
  const [loading, setLoading] = useState(true);
  const { gifs, setGifs } = useContext(GifsContext);

  useEffect(() => {
    setLoading(true);
    getGifs(keyword).then((gifs) => {
      setGifs(gifs);
      setLoading(false);
      // Save last search in localStorage
      localStorage.setItem("last-search", keyword);
    });
  }, [keyword, setGifs]);

  return { loading, gifs };
}
