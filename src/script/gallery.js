const images = document.querySelectorAll(".js-previewImage");
const currentImage = document.querySelector('.js-currentImage');
const previousArrow = document.querySelector('.js-arrowPrevious');
const nextArrow = document.querySelector('.js-arrowNext');
const previewImagesContainer = document.querySelector('.gallery__previewImages');

let currentIndex = 0;

previousArrow.addEventListener('click', () => {
    updateCurrentIndex(-1);
    setNewCurrentImage();
    scrollPreviewImages();
});

nextArrow.addEventListener('click', () => {
    updateCurrentIndex(1);
    setNewCurrentImage();
    scrollPreviewImages();
});

images.forEach((image, index) => {
    image.addEventListener('click', () => {
        currentIndex = index;
        setNewCurrentImage();
        scrollPreviewImages();
    });
});

function updateCurrentIndex(offset) {
    currentIndex += offset;

    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    } else if (currentIndex >= images.length) {
        currentIndex = 0;
    }
}

function setNewCurrentImage() {
    images.forEach((image, index) => {
        if (index === currentIndex) {
            image.classList.add("gallery__currentImagePreview");
            image.classList.remove("gallery__previewImage");
            currentImage.src = image.src;
        } else {
            image.classList.remove("gallery__currentImagePreview");
            image.classList.add("gallery__previewImage");
        }
    });
}

function scrollPreviewImages() {
    const selectedImage = document.querySelector(".gallery__currentImagePreview");
    const scrollLeftPosition = selectedImage.offsetLeft - (previewImagesContainer.offsetWidth - selectedImage.offsetWidth) / 2;
    previewImagesContainer.scrollTo({
        left: scrollLeftPosition,
        behavior: 'smooth'
    });
}