
// Описаний в документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);


const palletContainer = document.querySelector('.gallery');
const createGallery = createGellaryItems(galleryItems);

palletContainer.insertAdjacentHTML('beforeend', createGallery);

function createGellaryItems(galleryItems){
    return galleryItems.map(({ preview, original, description }) => {
        return `
        <a class="gallery__item" href="${original}">
         <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
        `;
    }).join('');
    
}

new SimpleLightbox('.gallery a', { 
    captions: true,
    captionsData: "alt",
    captionDelay: 250,

 });