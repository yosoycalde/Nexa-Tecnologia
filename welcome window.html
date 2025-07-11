<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sistema de Perfiles de Usuario</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .container {
            background: white;
            border-radius: 20px;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
            padding: 40px;
            width: 100%;
            max-width: 500px;
            backdrop-filter: blur(10px);
        }

        .form-container {
            display: none;
        }

        .form-container.active {
            display: block;
        }

        .profile-container {
            display: none;
        }

        .profile-container.active {
            display: block;
        }

        h1,
        h2 {
            color: #333;
            margin-bottom: 30px;
            text-align: center;
        }

        .form-group {
            margin-bottom: 20px;
        }

        label {
            display: block;
            margin-bottom: 8px;
            color: #555;
            font-weight: 500;
        }

        input[type="text"],
        input[type="email"],
        input[type="password"],
        textarea {
            width: 100%;
            padding: 12px 16px;
            border: 2px solid #e1e5e9;
            border-radius: 10px;
            font-size: 16px;
            transition: all 0.3s ease;
        }

        input:focus,
        textarea:focus {
            outline: none;
            border-color: #667eea;
            box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
        }

        textarea {
            resize: vertical;
            min-height: 80px;
        }

        button {
            width: 100%;
            padding: 12px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            border: none;
            border-radius: 10px;
            font-size: 16px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            margin-bottom: 10px;
        }

        button:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 25px rgba(102, 126, 234, 0.3);
        }

        .link-button {
            background: none;
            color: #667eea;
            text-decoration: underline;
            font-size: 14px;
            padding: 5px;
        }

        .link-button:hover {
            transform: none;
            box-shadow: none;
            color: #764ba2;
        }

        .profile-info {
            background: #f8f9fa;
            padding: 20px;
            border-radius: 15px;
            margin-bottom: 20px;
        }

        .profile-info h3 {
            color: #333;
            margin-bottom: 15px;
        }

        .profile-info p {
            color: #666;
            margin-bottom: 8px;
        }

        .alert {
            padding: 12px;
            border-radius: 8px;
            margin-bottom: 15px;
            font-size: 14px;
        }

        .alert.success {
            background: #d4edda;
            color: #155724;
            border: 1px solid #c3e6cb;
        }

        .alert.error {
            background: #f8d7da;
            color: #721c24;
            border: 1px solid #f5c6cb;
        }

        .tab-buttons {
            display: flex;
            margin-bottom: 20px;
        }

        .tab-button {
            flex: 1;
            padding: 10px;
            background: #f8f9fa;
            border: 1px solid #e1e5e9;
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .tab-button:first-child {
            border-radius: 10px 0 0 10px;
        }

        .tab-button:last-child {
            border-radius: 0 10px 10px 0;
        }

        .tab-button.active {
            background: #667eea;
            color: white;
        }
    </style>
</head>

<body>
    <div class="container">
        <!-- Formulario de Login/Registro -->
        <div id="auth-container" class="form-container active">
            <h1>Bienvenido</h1>

            <div class="tab-buttons">
                <div class="tab-button active" onclick="showLogin()">Iniciar Sesión</div>
                <div class="tab-button" onclick="showRegister()">Registrarse</div>
            </div>

            <div id="alert-container"></div>

            <!-- Formulario de Login -->
            <form id="login-form">
                <div class="form-group">
                    <label for="login-email">Email:</label>
                    <input type="email" id="login-email" required>
                </div>
                <div class="form-group">
                    <label for="login-password">Contraseña:</label>
                    <input type="password" id="login-password" required>
                </div>
                <button type="submit">Iniciar Sesión</button>
            </form>

            <!-- Formulario de Registro -->
            <form id="register-form" style="display: none;">
                <div class="form-group">
                    <label for="register-name">Nombre completo:</label>
                    <input type="text" id="register-name" required>
                </div>
                <div class="form-group">
                    <label for="register-email">Email:</label>
                    <input type="email" id="register-email" required>
                </div>
                <div class="form-group">
                    <label for="register-password">Contraseña:</label>
                    <input type="password" id="register-password" required minlength="6">
                </div>
                <div class="form-group">
                    <label for="register-confirm">Confirmar contraseña:</label>
                    <input type="password" id="register-confirm" required>
                </div>
                <button type="submit">Registrarse</button>
            </form>
        </div>

        <!-- Perfil del Usuario -->
        <div id="profile-container" class="profile-container">
            <h2>Mi Perfil</h2>

            <div class="profile-info">
                <h3>Información Personal</h3>
                <p><strong>Nombre:</strong> <span id="profile-name"></span></p>
                <p><strong>Email:</strong> <span id="profile-email"></span></p>
                <p><strong>Biografía:</strong> <span id="profile-bio"></span></p>
                <p><strong>Miembro desde:</strong> <span id="profile-date"></span></p>
            </div>

            <button onclick="editProfile()">Editar Perfil</button>
            <button onclick="logout()">Cerrar Sesión</button>
        </div>

        <!-- Formulario de Edición de Perfil -->
        <div id="edit-container" class="form-container">
            <h2>Editar Perfil</h2>

            <div id="edit-alert-container"></div>

            <form id="edit-form">
                <div class="form-group">
                    <label for="edit-name">Nombre completo:</label>
                    <input type="text" id="edit-name" required>
                </div>
                <div class="form-group">
                    <label for="edit-bio">Biografía:</label>
                    <textarea id="edit-bio" placeholder="Cuéntanos sobre ti..."></textarea>
                </div>
                <button type="submit">Guardar Cambios</button>
                <button type="button" class="link-button" onclick="cancelEdit()">Cancelar</button>
            </form>
        </div>
    </div>

    <script>
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
    </script>
</body>

</html>