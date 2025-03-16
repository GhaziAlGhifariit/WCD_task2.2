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
