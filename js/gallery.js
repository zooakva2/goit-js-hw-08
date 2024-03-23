// JavaScript
const images = [
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg",
    description: "Hokkaido Flower",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",
    description: "Container Haulage Freight",
  },
  // Add more images here
];

const galleryContainer = document.querySelector(".gallery");

const createGalleryItem = ({ preview, original, description }) => {
  return `
    <li class="gallery-item">
      <a class="gallery-link" href="${original}">
        <img class="gallery-image" src="${preview}" data-source="${original}" alt="${description}" />
      </a>
    </li>
  `;
};

const createGalleryMarkup = images.map(createGalleryItem).join("");
galleryContainer.insertAdjacentHTML("beforeend", createGalleryMarkup);

galleryContainer.addEventListener("click", (event) => {
  event.preventDefault();

  const target = event.target;
  if (target.tagName !== "IMG") return;

  const largeImageUrl = target.dataset.source;
  const instance = basicLightbox.create(`
    <img src="${largeImageUrl}" width="800" height="600">
  `);

  instance.show();
});
