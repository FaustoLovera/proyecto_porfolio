
function validarFormulario(event) {
    //  Esta función lo que hace es prevenir que el formulario se envíe normalmente.
    event.preventDefault();

    // Obtener el contenedor de los mensajes de error dependiendo el casillero incompleto
    const errorMessage = document.getElementById('error-message');
    // Limpia los mensajes de error
    errorMessage.textContent = '';

    const nombre = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensaje = document.getElementById('message').value.trim();

    let errores = [];
    
    if (nombre === '') {
        errores.push('El nombre es obligatorio.');
    }

    if (email === '') {
        errores.push('El correo electrónico es obligatorio.');
    } else if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
        errores.push('Por favor ingrese un correo electrónico válido.');
    }

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
