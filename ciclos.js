const distanciasKm = [12, 15, 20, 25, 30, 42];
console.log("Distancias pares (entrenamientos de recuperación):");

for (let i = 0; i < distanciasKm.length; i++) {
    if (distanciasKm[i] % 2 === 0) {
        console.log(`${distanciasKm[i]} km`);
    }
}