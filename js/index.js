document.addEventListener("DOMContentLoaded", function () {
  const cliente = {
    nombre: "",
    opcionSeleccionadaTattoo: -1,
    opcionSeleccionadaColor: -1,
    zonaCuerpo: "",
    fechaTurno: "",
    horaTurno: "",
    precioTotal: 0,
  };
  let tattooOptions;
  let colorOptions;

 // Cargar datos desde el archivo JSON
 fetch('data.json')
 .then(response => response.json())
 .then(data => {
    tattooOptions = data.tattooOptions;
    colorOptions = data.colorOptions;

   // Actualizar las opciones de tatuajes y colores en el formulario
   const opcionTattooSelect = document.getElementById("opcion-tattoo");
   const opcionColorSelect = document.getElementById("opcion-color");

   tattooOptions.forEach((option, index) => {
     const optionElement = document.createElement("option");
     optionElement.value = index.toString();
     optionElement.textContent = option.tamaño;
     opcionTattooSelect.appendChild(optionElement);
   });

   colorOptions.forEach((option, index) => {
     const optionElement = document.createElement("option");
     optionElement.value = index.toString();
     optionElement.textContent = option.color;
     opcionColorSelect.appendChild(optionElement);
   });
 })
 .catch(error => console.error('Error al cargar los datos JSON:', error));

  const resultadoContainer = document.getElementById("resultado-container");
  const botonConfirmar = document.getElementById("boton-confirmar");
  const opcionCuerpo = document.getElementById("opcion-cuerpo");

  botonConfirmar.addEventListener("click", function () {
    cliente.nombre = document.getElementById("nombre").value;
    cliente.opcionSeleccionadaTattoo = parseInt(document.getElementById("opcion-tattoo").value);
    cliente.opcionSeleccionadaColor = parseInt(document.getElementById("opcion-color").value);
    cliente.zonaCuerpo = opcionCuerpo.value;
    cliente.fechaTurno = document.getElementById("fecha-turno").value;
    cliente.horaTurno = document.getElementById("hora-turno").value;
    calcularPrecio();
    guardarEnStorage();
    actualizarResultado();
  });

  opcionCuerpo.addEventListener("change", function () {
    const zonaCuerpo = opcionCuerpo.value;
    const zonaPersonalizadaInput = document.getElementById("zona-personalizada-input");
  
    if (zonaCuerpo === "Otra zona") {
      // Mostrar el campo de entrada de texto
      zonaPersonalizadaInput.style.display = "block";
    } else {
      // Ocultar el campo de entrada de texto
      zonaPersonalizadaInput.style.display = "none";
      cliente.zonaCuerpo = zonaCuerpo;
    }
  });

  function calcularPrecio() {
    const precioTattoo = tattooOptions[cliente.opcionSeleccionadaTattoo].precio;
    const precioColor = colorOptions[cliente.opcionSeleccionadaColor].precio;
    cliente.precioTotal = precioTattoo + precioColor;
  }

  function guardarEnStorage() {
    localStorage.setItem("cliente", JSON.stringify(cliente));
  }

  function recuperarDeStorage() {
    const clienteJSON = localStorage.getItem("cliente");
    if (clienteJSON) {
      Object.assign(cliente, JSON.parse(clienteJSON));
      actualizarResultado();
    }
  }

  function actualizarResultado() {
    const precioTattoo = tattooOptions[cliente.opcionSeleccionadaTattoo].precio;
    const precioColor = colorOptions[cliente.opcionSeleccionadaColor].precio;
    cliente.precioTotal = precioTattoo + precioColor;

    resultadoContainer.innerHTML = `
      <table>
        <tr><td>Nombre:</td><td>${cliente.nombre}</td></tr>
        <tr><td>Tamaño del tattoo:</td><td>${tattooOptions[cliente.opcionSeleccionadaTattoo].tamaño}</td></tr>
        <tr><td>Color del tattoo:</td><td>${colorOptions[cliente.opcionSeleccionadaColor].color}</td></tr>
        <tr><td>Zona del cuerpo:</td><td>${cliente.zonaCuerpo}</td></tr>
        <tr><td>Fecha del turno:</td><td>${cliente.fechaTurno}</td></tr>
        <tr><td>Hora del turno:</td><td>${cliente.horaTurno}</td></tr>
        <tr><td>Precio total:</td><td>$${cliente.precioTotal}</td></tr>
      </table>
    `;
    
    const precioTotalCell = document.getElementById("precio-total");
    precioTotalCell.textContent = `$${cliente.precioTotal}`;
  }
// Agregar estilos
  const estudioTitle = document.getElementById("estudio-title");
  estudioTitle.style.color = "white";
  estudioTitle.style.fontSize = "20px";
  estudioTitle.style.textAlign = "center";

  document.addEventListener("DOMContentLoaded", function () {
    const estudioTitle = document.getElementById("estudio-title");
    estudioTitle.style.color = "white";
    estudioTitle.style.fontSize = "20px";
    estudioTitle.style.textAlign = "center";

    const h2cajaAru = document.getElementById("aru-title");
    h2cajaAru.style.color = "white";
    h2cajaAru.style.fontSize = "20px";
    h2cajaAru.style.textAlign = "center";

    const h2cajaRomi = document.getElementById("romi-title");
    h2cajaRomi.style.color = "white";
    h2cajaRomi.style.fontSize = "20px";
    h2cajaRomi.style.textAlign = "center";

    const resultadoContainer = document.getElementById("resultado-container");
    resultadoContainer.style.color = "white";
    resultadoContainer.style.fontSize = "20px";
    resultadoContainer.style.textAlign = "center";
    resultadoContainer.style.margin = "0 auto";
    resultadoContainer.style.padding = "10px";

    const footerLogos = document.querySelectorAll(".logoFooter");
    footerLogos.forEach(logo => {
      logo.style.width = "30px";
      logo.style.height = "30px";
      logo.style.margin = "0 10px";
    });

    const instagramLinks = document.querySelectorAll(".instagram");
    instagramLinks.forEach(link => {
      link.style.color = "white";
      link.style.textDecoration = "none";
      link.style.margin = "0 10px";
    });

    const footerH4 = document.querySelectorAll(".h4");
    footerH4.forEach(h4 => {
      h4.style.color = "black";
      h4.style.textAlign = "center";
    });
  });

  recuperarDeStorage();
});

