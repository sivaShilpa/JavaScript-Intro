/**Create an arrow function named: countLetters that counts the number of letters from an array of words: */
const countLetters = (array) => {
    let countOfLetters = 0;

    for(let i = 0; i < array.length; i++){
        countOfLetters += array[i].length;
    }

    return countOfLetters;
}

const main = () => {
    let array = ["this", "is", "a", "test"];
    console.log(countLetters(array));
}

main();