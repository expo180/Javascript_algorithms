function telephoneCheck(str) {
  // Regular expression to match valid US phone numbers
  var regex = /^(1\s?)?(\(\d{3}\)|\d{3})[-\s]?(\d{3})[-\s]?(\d{4})$/;

  // Test the string against the regex pattern
  return regex.test(str);
}


telephoneCheck("555-555-5555");
