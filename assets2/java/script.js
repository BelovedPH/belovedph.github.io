// script.js
let currentImageIndex = 0;

function openPopup(index) {
    currentImageIndex = index - 1;
    document.getElementById('popup-image').src = 'assets2/imgs/pic' + index + '.JPG';
    document.getElementById('popup').style.display = 'flex';
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

function changeImage(step) {
    currentImageIndex += step;
    if (currentImageIndex < 1) {
        currentImageIndex = 9;
    } else if (currentImageIndex > 9) {
        currentImageIndex = 1;
    }
    document.getElementById('popup-image').src = 'assets2/imgs/pic' + currentImageIndex + '.JPG';
}

// Allow closing the popup with the Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closePopup();
    }
});