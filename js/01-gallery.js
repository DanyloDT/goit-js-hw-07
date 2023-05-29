import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery')

const makeItemCard = ({preview, original, description} = {}) => {
  return `
  <li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </li>`;
};

const makeCardArr = galleryItems.map(imgInfo => {
  return makeItemCard(imgInfo)
})

gallery.innerHTML = makeCardArr.join("")



const onClickImg = event => {
  event.preventDefault();

  const target = event.target;

  if (target.nodeName !== 'IMG') {
    return
  }

  const bigPhoto = target.dataset.source
  
  const instance = basicLightbox.create(`<img src="${bigPhoto}" width="800" height="600">`)

  instance.show()
}

gallery.addEventListener('click', onClickImg)


