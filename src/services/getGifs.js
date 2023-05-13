import { API_KEY, BASE_API_URL } from "./settings";

export function getGifs(keyword, limit = 25, offset = 0, rating = "g") {
  if (!keyword) return Promise.resolve([]);
  const apiURL = `${BASE_API_URL}/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=${limit}&offset=${offset}&rating=${rating}&lang=en`;

  return fetch(apiURL)
    .then((res) => res.json())
    .then((response) => {
      const { data } = response;

      const gifs = data.map((gifData) => {
        const { images, title, id, user } = gifData;

        return { title, id, images, user };
      });

      return gifs;
    });
}
