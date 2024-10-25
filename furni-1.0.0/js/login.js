document.getElementById('loginForm').addEventListener('submit', (event) => {
    event.preventDefault();
    window.location.href = "home.html"; // Redirige a la página de inicio
});

document.getElementById('registerForm').addEventListener('submit', (event) => {
    event.preventDefault();
    alert("Registrado con éxito. Ahora puedes iniciar sesión.");
    window.location.href = "home.html"; // Redirige a la página de inicio
});

function showLogin() {
    document.getElementById('loginScreen').classList.remove('hidden');
    document.getElementById('registerScreen').classList.add('hidden');
}

function showRegister() {
    document.getElementById('registerScreen').classList.remove('hidden');
    document.getElementById('loginScreen').classList.add('hidden');
}

function logout() {
    window.location.href = "index.html"; // Redirige a la pantalla de login
}
