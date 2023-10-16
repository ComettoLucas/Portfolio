const diplomaLinks = document.querySelectorAll(".diploma-link");
const diplomaModal = document.getElementById("diploma-modal");
const diplomaImage = document.getElementById("diploma-image");
const closeModal = document.getElementById("close-modal");

diplomaLinks.forEach(link => {
    link.addEventListener("click", function(event) {
        event.preventDefault();
        const imageSource = this.getAttribute("data-image-source");
        diplomaImage.src = imageSource;
        diplomaModal.style.display = "block";
    });
});

closeModal.addEventListener("click", function() {
    diplomaModal.style.display = "none";
});

// Cierra el modal si el usuario hace clic fuera de la imagen
window.addEventListener("click", function(event) {
    if (event.target === diplomaModal) {
        diplomaModal.style.display = "none";
    }
});
