const characterSet = {
    ' ': 1, 'a': 2, 'b': 3, 'c': 4, 'd': 5, 'e': 6, 'f': 7, 'g': 8, 'h': 9, 'i': 10, 'j': 11, 'k': 12,
    'l': 13, 'm': 14, 'n': 15, 'o': 16, 'p': 17, 'q': 18, 'r': 19, 's': 20, 't': 21, 'u': 22, 'v': 23,
    'w': 24, 'x': 25, 'y': 26, 'z': 27, 'A': 28, 'B': 29, 'C': 30, 'D': 31, 'E': 32, 'F': 33, 'G': 34,
    'H': 35, 'I': 36, 'J': 37, 'K': 38, 'L': 39, 'M': 40, 'N': 41, 'O': 42, 'P': 43, 'Q': 44, 'R': 45,
    'S': 46, 'T': 47, 'U': 48, 'V': 49, 'W': 50, 'X': 51, 'Y': 52, 'Z': 53, '!': 54, '@': 55, '£': 56,
    '$': 57, '%': 58, '^': 59, ';': 60, '*': 61, '(': 62, ')': 63, '-': 64, '_': 65, '=': 66, '+': 67,
    '[': 68, ']': 69, '{': 70, '}': 71, ';': 72, ':': 73, "'": 74, '"': 75, "\\": 76, '|': 77, ',': 78,
    '.': 79, '<': 80, '>': 81, '/': 82, '?': 83, '`': 84, '~': 85, '§': 86, '±': 87, '1': 88, '2': 89,
    '3': 90, '4': 91, '5': 92, '6': 93, '7': 94, '8': 95, '9': 96, '0': 97
}

class LetterNumber {
    constructor(message, key){
        this.message = message;
        this.key = key; 
    }

    decrypt(){
        let decryptedString = '';
        for (let i = 0; i < this.message.length; i += 2){
            let value = parseInt(this.message.slice(i, i + 2)) - this.key;
            while (value > 97) {
                value -= 99;
            }
            while (value < 0) {
                value += 99;
            }
            decryptedString += Object.keys(characterSet).find(key => characterSet[key] === value);
        }
    return decryptedString;
    }
}

let decryption = new LetterNumber("5520402829343120552028214225203041394020402825204028293427982047203225404025388332254040253820394122394029404140293534202329362825387320582540933920243520294073", 4771)
console.log(decryption.decrypt())