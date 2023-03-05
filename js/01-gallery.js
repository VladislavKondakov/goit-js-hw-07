import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const galleryDiv = document.querySelector('.gallery');
galleryDiv.addEventListener('click', galleryDivClick);

const cardsGallery = createGalleryCards(galleryItems);
galleryDiv.insertAdjacentHTML('beforeend', cardsGallery);

function createGalleryCards(items) {
    return items.map(({ preview, original, description }) => {
        return ` 
    <div class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/>
        </a>
    </div>
    `;
    }).join('');
};

function galleryDivClick(event) {
    event.preventDefault();
    if (!event.target.classList.contains('gallery__image')) {
        return;
    }

    modalWindow(event.target.dataset.source);
};

function modalWindow(url) {
    const modal = basicLightbox.create(`
		<img width="800" height="600" src="${url}">
	`);

    modal.show();
   
    document.addEventListener('keydown', handleEscKeydown);

    function handleEscKeydown(event) {
        if (event.code === 'Escape') {
            modal.close();
        document.removeEventListener('keydown', handleEscKeydown);
        }
    }
};