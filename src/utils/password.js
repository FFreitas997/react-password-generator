const lowercase = "abcdefghijklmnopqrstuvwxyz";
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const specials = "!@#$%^&*()_-+=[]{}|;:'\",.<>?/\\";

function getRandomChar(text) {
    const index = Math.floor(Math.random() * text.length);
    return text[index];
}

function shuffle(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = newArray[i];
        newArray[i] = newArray[j];
        newArray[j] = temp;
    }
    return newArray;
}

export function generatePassword(config) {
    let result = '';
    let charToSkip = 1
    let alphabet = lowercase
    result += getRandomChar(lowercase)
    if (config.uppercase) {
        alphabet += uppercase;
        result += getRandomChar(uppercase)
        charToSkip++
    }
    if (config.number) {
        alphabet += numbers;
        result += getRandomChar(numbers)
        charToSkip++
    }
    if (config.special) {
        alphabet += specials;
        result += getRandomChar(specials)
        charToSkip++
    }

    for (let i = charToSkip; i < Number(config.size); i++) {
        result += getRandomChar(alphabet)
    }

    return shuffle(result).join("");
}