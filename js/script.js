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


/*CAMBIAR COLOR*/ 
    
const botonCambioEstilo = document.getElementById("cambiar-estilo");
let estiloActual = 1;

botonCambioEstilo.addEventListener("click", () => {
    // Define los estilos de colores en un array
    const estilosColores = [
        {
            '--violeta': '#372963', //fondo
            '--celeste': '#36BCF7', //letras
            '--mostaza': '#FFA500', //letras y otros
            '--violotro': '#25195c' //barra lateral
        },
        {
            '--violeta': '#433f43',
            '--celeste': ' #78b9c3',
            '--mostaza': ' #b07300',
            '--violotro': ' #302b30'
        },
        {
            '--violeta': '#043652',
            '--celeste': '#E5DE44',
            '--mostaza': '#F0810D',
            '--violotro': '#001826'
        },
        {
            '--violeta': '#202124', //gris
            '--celeste': '#F3C0AC', //blanco
            '--mostaza': '#E5E5E5', //crema
            '--violotro': '#FF0000' //rojo
        },
        {
            '--violeta': '#6D6D6D',
            '--celeste': '#000000',
            '--mostaza': '#FFFFFF',
            '--violotro': '#2A2A2A'
        },
        {
            '--violeta': '#4F5160',
            '--celeste': '#F3C0AC',
            '--mostaza': '#ADBD38',
            '--violotro': '#588133'
        },
         {
            '--violeta': '#05575B',
            '--celeste': '#65A4AB',
            '--mostaza': '#ADBD38',
            '--violotro': '#003A44'
        }
        ,
         {
            '--violeta': '#F15C00',
            '--celeste': '#F6EEE2',
            '--mostaza': '#F9A602',
            '--violotro': '#F60128'
        }
        
        
    ];

    // Cambia las variables CSS
    document.documentElement.style.setProperty("--violeta", estilosColores[estiloActual]['--violeta']);
    document.documentElement.style.setProperty("--celeste", estilosColores[estiloActual]['--celeste']);
    document.documentElement.style.setProperty("--mostaza", estilosColores[estiloActual]['--mostaza']);
    document.documentElement.style.setProperty("--violotro", estilosColores[estiloActual]['--violotro']);

    // Incrementa el índice del estilo actual
    estiloActual = (estiloActual + 1) % estilosColores.length;
});
document.addEventListener('DOMContentLoaded', function() {
    const typewriterText = document.querySelector('.typewriter-text');

    // Inicia la animación al cargar la página
    typewriterText.style.animationPlayState = 'running';
});