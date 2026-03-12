function firstWord(s) {
  // remove leading spaces
  s = s.trimStart();
  
  // find first space
  let index = s.indexOf(" ");
  
  // if no space exists return entire string
  if (index === -1) {
    return s;
  }
  
  // return characters before the first space
  return s.substring(0, index);
}

// Do not change the code below
const s = prompt("Enter String:");
alert(firstWord(s));