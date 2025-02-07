// script.js
const images = document.querySelectorAll('.image-container img');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-image');

images.forEach(image => {
    image.addEventListener('click', () => {
        lightbox.style.display = 'block';
        lightboxImage.src = image.src;
    });
});

function closeLightbox() {
    lightbox.style.display = 'none';
}

// Close lightbox if clicked outside the image area
lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox) { // Check if the click is on the backdrop
        closeLightbox();
    }
});