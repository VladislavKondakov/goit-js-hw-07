import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector(`.gallery`)
const imgMarkup = createGallery(galleryItems);
galleryEl.insertAdjacentHTML('beforeend', imgMarkup)

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
    })
    .join('')
}

const galleryLightBox = new SimpleLightbox(`.gallery a`, {
    captionsData: `alt`,
    captionDelay: `250`,
});