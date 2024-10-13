export { getPhotos };

const BASE_URL = "https://pixabay.com/api/";

function getPhotos(searchQuery) {
  const API_KEY = "46495648-ca89e041c4cf307aa03db9722";

  return fetch(
    `${BASE_URL}?key=${API_KEY}&q=${searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40`,
  )
    .then((response) => response.json())
    .then((data) => data.hits);
}
