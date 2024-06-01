document.addEventListener('DOMContentLoaded', function() {
    // Manejar el formulario de registro
    const formRegister = document.querySelector('.needs-validation');
    formRegister.addEventListener('submit', function(event) {
      event.preventDefault();
      event.stopPropagation();
  
      const email = document.querySelector('#email').value;
      const name = document.querySelector('#name').value;
      const password = document.querySelector('#pwd').value;
      const repeatPassword = document.querySelector('#repeat-pwd').value;
      const username = document.querySelector('#username').value;
      const birthdate = document.querySelector('#date').value;
  
      console.log('Formulario de registro enviado:', { email, name, password, repeatPassword, username, birthdate });
  
      const isValid = formRegister.checkValidity();
      formRegister.classList.add('was-validated');
  
      if (!isValid) {
        return;
      }
  
      if (password !== repeatPassword) {
        alert('Las contraseñas no coinciden.');
        console.log('Las contraseñas no coinciden.');
        return;
      }
  
      const registroExitoso = window.registrarUsuario(email, name, password, username, birthdate);
      if (registroExitoso) {
        console.log('Registro exitoso:', { email, name, password, username, birthdate });
        formRegister.reset();
        formRegister.classList.remove('was-validated');
      } else {
        console.log('El usuario ya existe.');
      }
    }, false);
  });
  