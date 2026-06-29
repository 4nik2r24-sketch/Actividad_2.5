function convertirCLPaUSD(montoCLP, valorDolar) {
    const dolares = montoCLP / valorDolar;
    
    return dolares.toFixed(2); 
}

// 2. Variables de prueba
const presupuestoCLP = 150000; 
const valorDolarActual = 940; // Valor referencial del dólar en Chile

// 3. Llamado a la función y almacenamiento del resultado
const resultadoUSD = convertirCLPaUSD(presupuestoCLP, valorDolarActual);

// 4. Mostrar por consola
console.log("=== Conversor de Divisas ===");
console.log(`Monto original: $${presupuestoCLP} CLP`);
console.log(`Tipo de cambio: $${valorDolarActual} CLP por USD`);
console.log(`Total convertido: $${resultadoUSD} USD`);
console.log("============================");