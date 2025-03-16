
![image](https://github.com/user-attachments/assets/bdd76a19-b3fe-4842-bb87-868f920bd4f2)

## Write a program that takes a temperature in Fahrenheit as input and converts it to Celsius.
**in javascript:**

```javascript
function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

// Contoh penggunaan
let fahrenheitInput = 100;
let celsiusOutput = fahrenheitToCelsius(fahrenheitInput);
console.log(`${fahrenheitInput}°F = ${celsiusOutput.toFixed(2)}°C`); // output 100°F = 37.78°C
```
**in Typescript:**

```typescript
function fahrenheitToCelsius(fahrenheit: number): number {
    return (fahrenheit - 32) * 5 / 9;
}

// Contoh penggunaan
let fahrenheitInput: number = 100;
let celsiusOutput: number = fahrenheitToCelsius(fahrenheitInput);
console.log(`${fahrenheitInput}°F = ${celsiusOutput.toFixed(2)}°C`);// output 100°F = 37.78°C
```

## Write code to convert centimeter to kilometer or vice versa

**in javascript:**

```
function cmToKm(cm) {
    return cm / 100000;
}

// Contoh penggunaan
let cmInput = 100000;
let kmOutput = cmToKm(cmInput);
console.log(`${cmInput} cm = ${kmOutput} km`); //output : 100000 cm = 1 km
```
**in typescript:**

```
function cmToKm(cm: number): number {
    return cm / 100000;
}

// Contoh penggunaan
let cmInput: number = 100000;
let kmOutput: number = cmToKm(cmInput);
console.log(`${cmInput} cm = ${kmOutput} km`); //output : 100000 cm = 1 km
```

## Write a function that takes an integer n as input and returns true if n is odd and false if n is even

**in javascript:**

```
function isEven(n) {
    return n % 2 === 0;
}

// Contoh penggunaan
let number = 1000;
console.log(`${number} is even: ${isEven(number)}`);

number = 1001;
console.log(`${number} is even: ${isEven(number)}`);
//output :
1000 is even: true
1001 is even: false
```

**in Typescript:**

```
function isEven(n: number): boolean {
    return n % 2 === 0;
}

// Contoh penggunaan
let number: number = 1000;
console.log(`${number} is even: ${isEven(number)}`);

number = 1001;
console.log(`${number} is even: ${isEven(number)}`);
//output :
1000 is even: true
1001 is even: false
```

## Write a code to remove the first occurance of a given "search string" from a string
**in javascript:**

```
function removeFirstOccurrence(str, search) {
    return str.replace(search, "");
}

// Contoh penggunaan
let text = "hello world";
let searchString = "ell";
console.log(removeFirstOccurrence(text, searchString)); // Output: "ho world"
```
**in Typescript:**

```
function removeFirstOccurrence(str: string, search: string): string {
    return str.replace(search, "");
}

// Contoh penggunaan
let text: string = "hello world";
let searchString: string = "ell";
console.log(removeFirstOccurrence(text, searchString)); // Output: "ho world"
```

## Write a code to check the wheter a string is a palindrome or not
**in javascript:**

```
function isPalindrome(str) {
    // Convert string to lowercase and remove non-alphanumeric characters
    const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    // Reverse the string
    const reversedStr = cleanedStr.split('').reverse().join('');
    
    // Check if the string is the same forwards and backwards
    return cleanedStr === reversedStr;
}

// Example usage
const input = "madam";
console.log(isPalindrome(input)); // Output: true

```

**in Typescript:**

```
function isPalindrome(str: string): boolean {
    // Ubah string menjadi huruf kecil dan hilangkan karakter non-alfanumerik
    const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    // Balikkan string
    const reversedStr = cleanedStr.split('').reverse().join('');
    
    // Periksa apakah string sama dengan string yang dibalik
    return cleanedStr === reversedStr;
}

// Contoh penggunaan
const input: string = "madam";
console.log(isPalindrome(input)); // Output: true
```



