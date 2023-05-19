function convertToRoman(num) {
  // Create arrays of the Roman numerals and their corresponding values
  var romanNumerals = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
  var arabicValues = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  
  var romanNumeral = ""; // Variable to store the resulting Roman numeral
  
  // Iterate through the arrays and build the Roman numeral
  for (var i = 0; i < romanNumerals.length; i++) {
    while (num >= arabicValues[i]) {
      romanNumeral += romanNumerals[i]; // Add the Roman numeral to the result
      num -= arabicValues[i]; // Subtract the corresponding value from the number
    }
  }
  
  return romanNumeral; // Return the resulting Roman numeral
}

console.log(convertToRoman(68));
