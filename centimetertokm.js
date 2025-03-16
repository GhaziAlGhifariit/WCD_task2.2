function cmToKm(cm) {
    return cm / 100000;
}

// Contoh penggunaan
let cmInput = 100000;
let kmOutput = cmToKm(cmInput);
console.log(`${cmInput} cm = ${kmOutput} km`);
