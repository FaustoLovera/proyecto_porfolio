function validarFormulario(event) {
    
    event.preventDefault();

    const errorMessage = document.getElementById('error-message');

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

    if (errores.length > 0) {
        errorMessage.textContent = errores.join(' ');
        errorMessage.style.display = 'block';
        console.log(errores)
        return false;
    }

    document.getElementById('contact-form').submit();
}

document.getElementById('contact-form').addEventListener('submit', validarFormulario);