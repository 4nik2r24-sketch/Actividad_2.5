function calcularIVA(montoNeto) {
    const iva = 0.19; // 19%
    return montoNeto * iva;
}

// Exportamos la función
module.exports = { calcularIVA };