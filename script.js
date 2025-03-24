// Array of objects containing image data
const images = [
    {src: 'images/1.jpg'},
    {src: 'images/2.jpg'},
    {src: 'images/3.jpg'},
    {src: 'images/4.jpg'},
    {src: 'images/5.avif'},
    {src: 'images/6.jpg'},
    {src: 'images/7.jpg'},
    {src: 'images/8.jpg'},
    {src: 'images/9.jpg'},
    {src: 'images/10.jpg'},
    {src: 'images/11.jpg'},
    {src: 'images/12.jpg'},


   
];

// Get the gallery container
const gallery = document.getElementById('gallery');

// Dynamically add images to the gallery
images.forEach((image) => {
    const imgElement = document.createElement('img');
    imgElement.src = image.src;
    imgElement.alt = image.alt;
    imgElement.dataset.caption = image.caption;
    imgElement.dataset.src = image.src; // Store the source for HD version
    gallery.appendChild(imgElement);
});

// Modal Elements
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modal-image');
const modalCaption = document.getElementById('modal-caption');
const closeButton = document.getElementById('close');

// Event delegation for image clicks in the gallery
gallery.addEventListener('click', (event) => {
    if (event.target.tagName === 'IMG') {
        const img = event.target;
        modalImage.src = img.dataset.src; // Set the HD image
        modalCaption.textContent = img.dataset.caption; // Set the caption
        modal.style.display = 'flex'; // Show the modal
    }
});

// Close the modal
closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close modal when clicking outside the image
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
