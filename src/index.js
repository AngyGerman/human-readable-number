module.exports = function toReadable (number) {
    let numberString = number.toString();

    const unique_numbers = [
        'zero',
        'one',
        'two',
        'three',
        'four',
        'five',
        'six',
        'seven',
        'eight',
        'nine',
        'ten',
        'eleven',
        'twelve',
        'thirteen',
        'fourteen',
        'fifteen',
        'sixteen',
        'seventeen',
        'eighteen',
        'nineteen'
    ];

    const decimal_numbers = [
        'twenty',
        'thirty',
        'forty',
        'fifty',
        'sixty',
        'seventy',
        'eighty',
        'ninety'
    ];

    if (number <= 19) {
      return unique_numbers[number];
    } else if (number <= 99) {
        let firstDigit = numberString[0];
        let secondDigit = numberString[1];

        if (secondDigit == 0) {
            return decimal_numbers[firstDigit - 2];
        }
        return decimal_numbers[firstDigit - 2] + ' ' + unique_numbers[secondDigit];
    } else if (number <= 999) {
        let firstDigit = numberString[0];
        let secondDigit = numberString[1];
        let lastDigit = numberString[2];

        let digitWithoutHundred = parseInt(secondDigit + '' + lastDigit, 10);
        let digitWithoutHundredInWords = toReadable(digitWithoutHundred);

        if (digitWithoutHundred > 0) {
            return unique_numbers[firstDigit] + ' ' + 'hundred ' + digitWithoutHundredInWords;
        }
        return unique_numbers[firstDigit] + ' ' + 'hundred';
    }
};
