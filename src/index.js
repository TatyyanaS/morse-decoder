const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let result = '';
    for (let i = 0; i < expr.length; i += 10) {
        let letter = expr.slice(i, i + 10);
        if (letter === '**********') {
            result += ' ';
        } else {
            let morseLetter = '';
            for (let j = 0; j < letter.length; j += 2) {
                let symbol = letter.slice(j, j + 2);
                if (symbol === '10') {
                    morseLetter += '.';
                } else if (symbol === '11') {
                    morseLetter += '-';
                }
            }
            result += MORSE_TABLE[morseLetter];
        }
    }
    return result;
}

module.exports = {
    decode
}