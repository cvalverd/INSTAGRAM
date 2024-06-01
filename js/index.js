document.addEventListener('DOMContentLoaded', function() {
    // Manejar el formulario de inicio de sesión
    const formLogin = document.querySelector('.login-form form');
    formLogin.addEventListener('submit', function(event) {
      event.preventDefault();
      event.stopPropagation();
  
      const emailOrUsername = document.querySelector('#email').value;
      const password = document.querySelector('#pwd').value;
  
      console.log('Formulario de inicio de sesión enviado:', { emailOrUsername, password });
  
      const loginExitoso = window.iniciarSesion(emailOrUsername, password);
      if (loginExitoso) {
        console.log('Inicio de sesión exitoso:', { emailOrUsername });
        formLogin.reset();
      } else {
        console.log('Error en el inicio de sesión.');
      }
    }, false);
  });