const fs = require('fs');

const nombreArchivo = 'reporte_operaciones.txt';
const contenido = "Reporte de sistema: Todos los módulos cargados correctamente.\nEstado: Operativo.";

// 1. Escritura del archivo
fs.writeFile(nombreArchivo, contenido, (err) => {
    if (err) {
        console.error("Error al escribir el archivo:", err);
        return;
    }
    console.log("✅ Archivo creado y escrito con éxito.");

    // 2. Lectura del archivo (se hace dentro del callback para asegurar que ya se escribió)
    fs.readFile(nombreArchivo, 'utf8', (err, data) => {
        if (err) {
            console.error("Error al leer el archivo:", err);
            return;
        }
        console.log("\n--- Contenido del Archivo ---");
        console.log(data);
        console.log("-----------------------------");
    });
});