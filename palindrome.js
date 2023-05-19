function palindrome(str) {
  // Remove non-alphanumeric characters and convert to lowercase
  const cleanedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
  
  // Check if the cleaned string is equal to its reverse
  if(cleanedStr === cleanedStr.split('').reverse().join('')){
    return true
  }
  else {
    return false;
  }
}

palindrome("eye");
