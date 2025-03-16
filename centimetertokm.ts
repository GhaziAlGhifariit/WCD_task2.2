function cmToKm(cm: number): number {
    return cm / 100000;
}

// Contoh penggunaan
let cmInput: number = 100000;
let kmOutput: number = cmToKm(cmInput);
console.log(`${cmInput} cm = ${kmOutput} km`);