// Nombre y apellido del usuario
let nombre = prompt("Ingrese su nombre y apellido:");
// Opciones y precios de los tatuajes
const tattooOptions = [
  { tamaño: "Tattoo chico", precio: 1000 },
  { tamaño: "Tattoo grande", precio: 3000 },
];

const colorOptions = [
  { color: "Color", precio: 5000 },
  { color: "Blanco y negro", precio: 4000 },
];

// Función
function promptOption(message, options) {
  let userInput;
  do {
    userInput = prompt(`${message}\n${options.map((option, index) => `${index + 1}. ${option}`).join("\n")}`);
    userInput = parseInt(userInput);
  } while (isNaN(userInput) || userInput < 1 || userInput > options.length);
  return userInput - 1;
}

// Fecha del turno
function promptTurno() {
  const turno = prompt("Ingrese la fecha de su turno (dd/mm/aaaa):");
  return turno;
}
// Hora del turno
function promptHora() {
  const hora = prompt("Ingrese la hora de su turno (hh:mm):");
  return hora;
}

// Precio total del tatuaje
function calcularPrecio(opcionTatuaje, opcionColor) {
  const precioTattoo = tattooOptions[opcionTatuaje].precio;
  const precioColor = colorOptions[opcionColor].precio;
  const precioTotal = precioTattoo + precioColor;
  return precioTotal;
}

// Mostrar las opciones de tamaño y color
const opcionSeleccionadaTattoo = promptOption("Elija el tamaño de su tattoo:", tattooOptions.map((option) => option.tamaño));
const opcionSeleccionadaColor = promptOption("Elija el color de su tattoo:", colorOptions.map((option) => option.color));

// Capturar la fecha del turno
const fechaTurno = promptTurno();

// Preguntar la hora del turno
const horaTurno = promptHora();

// Calcular el precio del tatuaje
let precioTotal = calcularPrecio(opcionSeleccionadaTattoo, opcionSeleccionadaColor);

// Presupuesto final
alert(
  "¡Gracias por tu compra! Este es el presupuesto de tu tattoo:\n\nNombre: " +
    nombre +
    "\nTamaño del tattoo: " +
    tattooOptions[opcionSeleccionadaTattoo].tamaño +
    "\nColor del tattoo: " +
    colorOptions[opcionSeleccionadaColor].color +
    "\nFecha del turno: " +
    fechaTurno +
    "\nHora del turno: " +
    horaTurno +
    "\n\nPrecio total: $" +
    precioTotal
);

// Nombre y apellido del usuario
let mail = prompt("Dejanos tu mail para contactarnos a la brevedad :) :");
