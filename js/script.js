//MODAL
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

//VERIFICACION DEL FORMULARIO
document.addEventListener("DOMContentLoaded", function() {
        const formulario = document.getElementById("formulario");
    const nombreInput = document.getElementById("nombre");
    const emailInput = document.getElementById("email");
    const mensajeInput = document.getElementById("mensaje");

    formulario.addEventListener("submit", function(event) {
        let isValid = true;

        // Validación del campo "nombre"
        const nombreValue = nombreInput.value.trim();
        if (nombreValue === "") {
            isValid = false;
            alert("Por favor, ingresa tu nombre.");
        } else {
            const nombrePattern = /^[A-Za-z\s]+$/; // Expresión regular para letras y espacios
            if (!nombrePattern.test(nombreValue)) {
                isValid = false;
                alert("El campo de nombre solo debe contener letras y espacios.");
            }
        }

        // Validación del campo "email"
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!emailPattern.test(emailInput.value)) {
            isValid = false;
            alert("Por favor, ingresa una dirección de correo electrónico válida.");
        }

        // Validación del campo "mensaje"
        if (mensajeInput.value.trim() === "") {
            isValid = false;
            alert("Por favor, ingresa un mensaje.");
        }

        // Si no es válido, evita el envío del formulario
        if (!isValid) {
            event.preventDefault();
        }
    });
});