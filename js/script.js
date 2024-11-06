// script.js

// Función para validar el formulario
function validarFormulario(event) {
    // Prevenir que el formulario se envíe
    event.preventDefault();

    // Obtener el contenedor de los mensajes de error
    const errorMessage = document.getElementById('error-message');
    // Limpiar los mensajes de error previos
    errorMessage.textContent = '';

    // Obtener los valores del formulario
    const nombre = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensaje = document.getElementById('message').value.trim();

    let errores = [];
    


    // Validar el campo de nombre
    if (nombre === '') {
        errores.push('El nombre es obligatorio.');
    }

    // Validar el campo de correo electrónico
    if (email === '') {
        errores.push('El correo electrónico es obligatorio.');
    } else if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
        errores.push('Por favor ingrese un correo electrónico válido.');
    }

    // Validar el campo de mensaje
    if (mensaje === '') {
        errores.push('El mensaje no puede estar vacío.');
    }

    // Si hay errores, mostrarlos
    if (errores.length > 0) {
        errorMessage.textContent = errores.join(' ');
        errorMessage.style.display = 'block';
        console.log(errores)
        return false; // No enviamos el formulario
    }


    // Si todo está correcto, enviamos el formulario
    // Mostrar el mensaje de éxito o proceder con el envío real del formulario (en este caso usamos action="mailto:")
    document.getElementById('contact-form').submit();
}

// Asignar el evento de submit al formulario
document.getElementById('contact-form').addEventListener('submit', validarFormulario);
