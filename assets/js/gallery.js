document.addEventListener('DOMContentLoaded', () => {
    const galleryContainer = document.getElementById('gallery-container');
    const images = ['image1.jpg', 'image2.jpg', 'image3.jpg'];
    
    images.forEach(img => {
        const imgElem = document.createElement('img');
        imgElem.src = `../assets/images/${img}`;
        imgElem.alt = 'Gallery Image';
        galleryContainer.appendChild(imgElem);
    });
});
