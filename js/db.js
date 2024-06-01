document.addEventListener('DOMContentLoaded', function() {
    // Simulación de base de datos en localStorage
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
  
    // Función para registrar usuarios
    function registrarUsuario(email, name, password, username, birthdate) {
      console.log('Intentando registrar usuario:', { email, name, username, birthdate });
      const usuarioExistente = usuarios.find(user => user.email === email || user.username === username);
      if (usuarioExistente) {
        mostrarAlerta('El usuario ya existe.', 'danger');
        console.log('El usuario ya existe.');
        return false;
      }
  
      const nuevoUsuario = { email, name, password, username, birthdate };
      usuarios.push(nuevoUsuario);
      localStorage.setItem('usuarios', JSON.stringify(usuarios));
      mostrarAlerta('Usuario registrado exitosamente.', 'success');
      console.log('Usuario registrado exitosamente:', nuevoUsuario);
      return true;
    }
  
    // Función para iniciar sesión
    function iniciarSesion(emailOrUsername, password) {
      console.log('Intentando iniciar sesión:', { emailOrUsername, password });
      const usuario = usuarios.find(user => (user.email === emailOrUsername || user.username === emailOrUsername) && user.password === password);
      if (usuario) {
        mostrarAlerta('Inicio de sesión exitoso.', 'success');
        console.log('Inicio de sesión exitoso:', usuario);
        return true;
      } else {
        mostrarAlerta('Email/Usuario o contraseña incorrectos.', 'danger');
        console.log('Email/Usuario o contraseña incorrectos.');
        return false;
      }
    }
  
    // Función para mostrar alertas
    function mostrarAlerta(mensaje, tipo) {
      const alertaDiv = document.createElement('div');
      alertaDiv.className = `alert alert-${tipo}`;
      alertaDiv.appendChild(document.createTextNode(mensaje));
      const container = document.querySelector('.container');
      const firstChild = container.firstChild;
      
      // Insertar la alerta al principio del contenedor
      if (firstChild) {
        container.insertBefore(alertaDiv, firstChild);
      } else {
        container.appendChild(alertaDiv);
      }
  
      // Desaparecer alerta después de 3 segundos
      setTimeout(() => {
        const alerta = document.querySelector('.alert');
        if (alerta) {
          alerta.remove();
        }
      }, 6000);
    }
  
    // Exportar funciones
    window.registrarUsuario = registrarUsuario;
    window.iniciarSesion = iniciarSesion;
  });
  