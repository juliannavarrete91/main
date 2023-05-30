const toggleButton = document.getElementById('toggle-button');
const navContainer = document.querySelector('.nav-container');
const navList = document.getElementById('navi-list');

toggleButton.addEventListener('click', () => {
  navContainer.classList.toggle('active');
  navList.classList.toggle('active');
});


function initMap() {
  const uluru = { lat: -34.61315, lng: -58.37723 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: uluru,
  });
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}

window.initMap = initMap;


// Function to handle form submission
function handleFormSubmit(event) {
  event.preventDefault(); // Prevent form from being submitted

  // Retrieve form data
  var form = document.getElementById("myForm");
  var nombre = form.elements["nombre"].value;
  var utilizacion = form.elements["utilizacion"].value;
  var email = form.elements["email"].value;
  var entidad = form.elements["Entidad"].value;
  var comentarios = form.elements["comentarios"].value;
  var recibirInfo = form.elements["recibir_info"].checked;

  // Compose email message
  var subject = "Form Submission";
  var message = "Nombre: " + nombre + "\n";
  message += "Motivo de consulta: " + utilizacion + "\n";
  message += "Email: " + email + "\n";
  message += "Tipo de entidad: " + entidad + "\n";
  message += "Consulta: " + comentarios + "\n";
  message += "Recibir información: " + (recibirInfo ? "Sí" : "No") + "\n";

  // Create a mailto link to open the user's email client
  var mailtoLink = "mailto:nexotecnologico2023@gmail.com" +
    "?subject=" + encodeURIComponent(subject) +
    "&body=" + encodeURIComponent(message);

  // Open the user's email client
  window.location.href = mailtoLink;
}

// Add form submit event listener
var form = document.getElementById("myForm");
form.addEventListener("submit", handleFormSubmit);