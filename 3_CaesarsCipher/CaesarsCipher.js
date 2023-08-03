const alphabet = [
    "A", 
    "B", 
    "C", 
    "D", 
    "E", 
    "F", 
    "G", 
    "H", 
    "I", 
    "J", 
    "K", 
    "L", 
    "M", 
    "N", 
    "O", 
    "P", 
    "Q", 
    "R", 
    "S", 
    "T", 
    "U", 
    "V", 
    "W", 
    "X", 
    "Y", 
    "Z"
];

function rot13(str) {
    
    let ciphet13 = "";

    for(let i=0; i < str.length; i++) {
        const char = str[i];
        const isCharLetter = alphabet.includes(char);

        if(isCharLetter === false) {
            ciphet13 += char;
        } else {
            const charIndex = alphabet.findIndex(c => c === char);
            ciphet13 += alphabet[charIndex + 13] || alphabet[charIndex - 13];
        }
    }
    return ciphet13;
  }

