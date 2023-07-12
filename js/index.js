// Solicitar el nombre del usuario
let nombre = prompt("Ingrese su nombre:");

// Mostrar las opciones de tamaño
let opcionesTatuaje = ["Tatuaje chico", "Tatuaje grande"];
let opcionSeleccionadaTatuaje = prompt("Elija el tamaño de su tatuaje:\n1. Tatuaje chico\n2. Tatuaje grande");

// Validar la opción seleccionada
while (opcionSeleccionadaTatuaje !== "1" && opcionSeleccionadaTatuaje !== "2") {
  opcionSeleccionadaTatuaje = prompt("Opción inválida. Elija una opción válida:\n1. Tatuaje chico\n2. Tatuaje grande");
}

// Mostrar las opciones de color
let opcionesColor = ["Color", "Blanco y negro"];
let opcionSeleccionadaColor = prompt("Elija un tipo de color:\n1. Color\n2. Blanco y negro");

// Validar la opción seleccionada de color
while (opcionSeleccionadaColor !== "1" && opcionSeleccionadaColor !== "2") {
  opcionSeleccionadaColor = prompt("Opción inválida. Elija un tipo de color válido:\n1. Color\n2. Blanco y negro");
}

// Función para calcular el precio total del tatuaje
function calcularPrecio(opcionTatuaje, opcionColor) {
  let precioBase = 0;

  if (opcionTatuaje === "Tatuaje chico") {
    precioBase = 1000;
  } else if (opcionTatuaje === "Tatuaje grande") {
    precioBase = 3000;
  }

  let precioColor = 0;

  if (opcionColor === "Color") {
    precioColor = 5000;
  } else if (opcionColor === "Blanco y negro") {
    precioColor = 4000;
  }

  let precioTotal = precioBase + precioColor;
  return precioTotal;
}
// Calcular el precio del tatuaje
let precioTotal = calcularPrecio(opcionesTatuaje[opcionSeleccionadaTatuaje - 1], opcionesColor[opcionSeleccionadaColor - 1]);

// Precio total
alert("Presupuesto de su tatuaje:\n\nNombre: " + nombre + "\nTamaño del tattoo: " + opcionesTatuaje[opcionSeleccionadaTatuaje - 1] + "\nColor del tattoo: " + opcionesColor[opcionSeleccionadaColor - 1] + "\n\nPrecio total: $" + precioTotal);

