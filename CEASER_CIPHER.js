function rot13(str) {
  // Define an empty string to store the decoded result
  let decodedStr = "";

  // Loop through each character in the input string
  for (let i = 0; i < str.length; i++) {
    let charCode = str.charCodeAt(i);

    // Check if the character is a letter
    if (/[A-Za-z]/.test(str[i])) {
      // Determine the base code for the current case (uppercase or lowercase)
      const baseCode = str[i] === str[i].toUpperCase() ? 65 : 97;
      
      // Apply the ROT13 algorithm by shifting the character code
      charCode = (charCode - baseCode + 13) % 26 + baseCode;
    }

    // Append the decoded character to the result string
    decodedStr += String.fromCharCode(charCode);
  }

  return decodedStr;
}
