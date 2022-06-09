/** Create an arrow function named: countIt that counts the number of integer numbers, 
 * decimal numbers and strings from an array.  The countIt function returns nothing and writes 
 * output to the terminal. */
const countIntegerNumbers = (array) => {
    let count = 0;

    for(let i = 0; i < array.length; i++){
        if(typeof(array[i]) === "number" && array[i] % 1 === 0){
            count++;
        }
    }
    return count;
}

const countStrings = (array) => {
    let count = 0;

    for(let i = 0; i < array.length; i++){
        if(typeof(array[i]) === "string"){
            count++;
        }
    }

    return count;
}

const countDecimalNumbers = (array) => {
    let count = 0;

    for(let i = 0; i < array.length; i++){
        if(typeof(array[i]) === "number" && array[i] % 1 !== 0){
            count++;
        }
    }

    return count;
}


const countIt = (array) => {

    const countOfIntegers = countIntegerNumbers(array);
    const countOfStrings = countStrings(array);
    const countOfDecimals = countDecimalNumbers(array);

    console.log(" Number of Integers: " + countOfIntegers 
                + "\n Number of Decimal Numbers:" + countOfDecimals 
                + "\n Number of Strings:" + countOfStrings);

}

const main = () => {
    let array = ["this", "is", 1, 3, 2.1, "a", "test"];
    countIt(array);
}

main();
