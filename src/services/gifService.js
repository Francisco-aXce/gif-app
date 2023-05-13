const API_KEY = "PUpGEiAE09k9kodEP9KPNQcNhswJRSb9";

export function getGifs(keyword) {
  if (!keyword) return Promise.resolve([]);
  const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=25&offset=0&rating=g&lang=en`;

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
