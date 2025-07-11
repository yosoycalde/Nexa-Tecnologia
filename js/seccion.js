
// Simulación de base de datos en memoria
let users = [];
let currentUser = null;

// Mostrar alertas
function showAlert(message, type, container = 'alert-container') {
    const alertDiv = document.createElement('div');
    alertDiv.className = `alert ${type}`;
    alertDiv.textContent = message;

    const alertContainer = document.getElementById(container);
    alertContainer.innerHTML = '';
    alertContainer.appendChild(alertDiv);

    setTimeout(() => {
        alertDiv.remove();
    }, 5000);
}

// Alternar entre login y registro
function showLogin() {
    document.getElementById('login-form').style.display = 'block';
    document.getElementById('register-form').style.display = 'none';
    document.querySelectorAll('.tab-button')[0].classList.add('active');
    document.querySelectorAll('.tab-button')[1].classList.remove('active');
}

function showRegister() {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('register-form').style.display = 'block';
    document.querySelectorAll('.tab-button')[0].classList.remove('active');
    document.querySelectorAll('.tab-button')[1].classList.add('active');
}

// Registro de usuario
document.getElementById('register-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('register-name').value;
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;
    const confirmPassword = document.getElementById('register-confirm').value;

    if (password !== confirmPassword) {
        showAlert('Las contraseñas no coinciden', 'error');
        return;
    }

    if (users.find(user => user.email === email)) {
        showAlert('Este email ya está registrado', 'error');
        return;
    }

    const newUser = {
        id: users.length + 1,
        name: name,
        email: email,
        password: password, // En producción, esto debería estar hasheado
        bio: '',
        createdAt: new Date().toLocaleDateString()
    };

    users.push(newUser);
    showAlert('Cuenta creada exitosamente. Ahora puedes iniciar sesión.', 'success');

    // Limpiar formulario y cambiar a login
    document.getElementById('register-form').reset();
    showLogin();
});

// Login de usuario
document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        currentUser = user;
        showProfile();
        showAlert('Bienvenido de vuelta, ' + user.name + '!', 'success');
    } else {
        showAlert('Email o contraseña incorrectos', 'error');
    }
});

// Mostrar perfil
function showProfile() {
    document.getElementById('auth-container').classList.remove('active');
    document.getElementById('profile-container').classList.add('active');
    document.getElementById('edit-container').classList.remove('active');

    document.getElementById('profile-name').textContent = currentUser.name;
    document.getElementById('profile-email').textContent = currentUser.email;
    document.getElementById('profile-bio').textContent = currentUser.bio || 'Sin biografía';
    document.getElementById('profile-date').textContent = currentUser.createdAt;
}

// Editar perfil
function editProfile() {
    document.getElementById('profile-container').classList.remove('active');
    document.getElementById('edit-container').classList.add('active');

    document.getElementById('edit-name').value = currentUser.name;
    document.getElementById('edit-bio').value = currentUser.bio;
}

// Guardar cambios del perfil
document.getElementById('edit-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('edit-name').value;
    const bio = document.getElementById('edit-bio').value;

    currentUser.name = name;
    currentUser.bio = bio;

    // Actualizar en la "base de datos"
    const userIndex = users.findIndex(u => u.id === currentUser.id);
    users[userIndex] = currentUser;

    showAlert('Perfil actualizado exitosamente', 'success', 'edit-alert-container');

    setTimeout(() => {
        showProfile();
    }, 1500);
});

// Cancelar edición
function cancelEdit() {
    showProfile();
}

// Cerrar sesión
function logout() {
    currentUser = null;
    document.getElementById('profile-container').classList.remove('active');
    document.getElementById('auth-container').classList.add('active');
    document.getElementById('login-form').reset();
    document.getElementById('alert-container').innerHTML = '';
    showLogin();
}

// Datos de ejemplo para testing
users.push({
    id: 1,
    name: 'Usuario Demo',
    email: 'demo@ejemplo.com',
    password: '123456',
    bio: 'Este es un usuario de demostración',
    createdAt: '01/01/2024'
});