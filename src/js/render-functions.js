export function createMarkup(images) {
  return images
    .map(
      image => `
      <li class="gallery-item">
        <a href="${image.largeImageURL}">
          <img class="gallery-image" src="${image.webformatURL}" alt="${image.tags}">
        </a>
        <div class="info">
        <div class="info-item">
        <h3>Likes</h3>
        <p> ${image.likes}</p>
        </div>
        <div class="info-item">
        <h3>Views</h3>
        <p>  ${image.views}</p>
        </div>
        <div class="info-item">
        <h3>Comments</h3>
        <p> ${image.comments}</p>
        </div>
        <div class="info-item">
        <h3>Downloads</h3>
        <p> ${image.downloads}</p>
        </div>   
        </div>
      </li>
    `
    )
    .join('');
}
