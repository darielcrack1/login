function checkLogin() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    if (username === "dariel" && password === "sanchez") {
      document.getElementById("message").textContent = "Inicio de sesion exitoso.";
    } else {
      document.getElementById("message").textContent = "Usuario o contraseña incorrectos pendejo prueba de nuevo.";
    }
  }
  
  
  function onSubmit(){
    alert("form submitted!")
  }