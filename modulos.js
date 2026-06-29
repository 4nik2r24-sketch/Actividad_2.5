const { calcularIVA } = require('./utils');

const compraEquipo = 150000;
const impuesto = calcularIVA(compraEquipo);
const total = compraEquipo + impuesto;

console.log(`Monto Neto: $${compraEquipo}`);
console.log(`IVA (19%): $${impuesto}`);
console.log(`Total a pagar: $${total}`);