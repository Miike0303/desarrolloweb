document.getElementById('loginForm').addEventListener('submit', (event) => {
    event.preventDefault();

    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    if (email === "admin@1.com" && password === "12345") {
        alert("Inicio de sesión exitoso como Administrador");
        window.location.href = "admin.html"; // Redirige a la página de administrador
    } else if (email === "user@1.com" && password === "12345") {
        alert("Inicio de sesión exitoso como Usuario");
        window.location.href = "user.html"; // Redirige a la página de usuario
    } else {
        alert("Credenciales incorrectas");
    }
});

document.getElementById('registerForm').addEventListener('submit', (event) => {
    event.preventDefault();
    alert("Registrado con éxito. Ahora puedes iniciar sesión.");
    showLogin(); // Cambia a la pantalla de login
});

function showLogin() {
    document.getElementById('loginScreen').classList.remove('hidden');
    document.getElementById('registerScreen').classList.add('hidden');
}

function showRegister() {
    document.getElementById('registerScreen').classList.remove('hidden');
    document.getElementById('loginScreen').classList.add('hidden');
}

function recoverPassword() {
    const email = prompt("Ingresa tu correo electrónico para recuperar la contraseña:");

    if (email === "admin@1.com" || email === "user@1.com") {
        const code = prompt("Se ha enviado un código de confirmación a tu correo. Ingresa el código:");

        if (code === "54321") {
            if (email === "admin@1.com") {
                alert("La contraseña del Administrador es: 12345");
            } else if (email === "user@1.com") {
                alert("La contraseña del Usuario es: 12345");
            }
        } else {
            alert("Código de confirmación incorrecto. Inténtalo de nuevo.");
        }
    } else {
        alert("Correo no registrado.");
    }
}

// Botón para recuperar contraseña
document.getElementById('loginScreen').insertAdjacentHTML(
    'beforeend',
    '<button onclick="recoverPassword()">¿Olvidaste tu contraseña?</button>'
);
