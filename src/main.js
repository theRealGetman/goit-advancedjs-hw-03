import { getPhotos } from "./js/pixabay-api";
import * as render from "./js/render-functions";

const searchForm = document.querySelector(".search-form");

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const searchQuery = document.querySelector("#search-box").value;

  if (searchQuery.trim() === "") {
    render.showEmptyQueryError();
    return;
  }

  render.showLoader();

  getPhotos(searchQuery)
    .then((images) => {
      render.clearGallery();

      if (images.length === 0) {
        render.showEmptyError();
        return;
      }
      render.showGallery(images);
    })
    .catch((error) => {
      console.log(error);
      render.showUnknownError();
    })
    .finally(() => {
      render.hideLoader();
    });
});
