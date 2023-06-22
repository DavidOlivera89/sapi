// Obtener el botón de enviar email por su id
var emailBtn = document.getElementById("emailBtn");

// Agregar un evento de click al botón
emailBtn.addEventListener("click", function() {
  // Definir la dirección de correo electrónico predefinida
  var emailAddress = "colegio_707@hotmail.com";
  
  // Abrir el cliente de correo electrónico con la dirección de correo predefinida
  window.location.href = "mailto:" + emailAddress;
});
