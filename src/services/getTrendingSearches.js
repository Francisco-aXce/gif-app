import { API_KEY, BASE_API_URL } from "./settings";

export function getTrendingSearches() {
  const apiURL = `${BASE_API_URL}/trending/searches?api_key=${API_KEY}`;

  return fetch(apiURL)
    .then((res) => res.json())
    .then((response) => {
      const { data } = response;

      return data;
    });
}
