function isEven(n: number): boolean {
    return n % 2 === 0;
}

// Contoh penggunaan
let number: number = 1000;
console.log(`${number} is even: ${isEven(number)}`);

number = 1001;
console.log(`${number} is even: ${isEven(number)}`);