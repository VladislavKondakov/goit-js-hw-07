import { galleryItems } from './gallery-items.js';

const galleryEl = document.querySelector('.gallery');
const imgMarkup = createGallery(galleryItems);
galleryEl.insertAdjacentHTML('beforeend', imgMarkup);

function createGallery(gallery) {
  return gallery.map(({ preview, original, description }) => {
    return `
      <li>
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </li>
    `;
  }).join('');
}

galleryEl.addEventListener('click', onGalleryClick);

function onGalleryClick(event) {
  event.preventDefault();
  const { target } = event;

  if (target.nodeName !== 'IMG') {
    return;
  }

  const originalImageURL = target.dataset.source;
  const instance = basicLightbox.create(
    `<img src="${originalImageURL}" width="800" height="600">`
  );

  instance.show();
}

const galleryLightBox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
