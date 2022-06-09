/**Create an arrow function named: countItems that counts the number of integer numbers,
 *  decimal numbers and strings stored in an array.  The countItems function returns the following object: */

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

const countItems = (array) => {
    
    const countOfIntegers = countIntegerNumbers(array);
    const countOfStrings = countStrings(array);
    const countOfDecimals = countDecimalNumbers(array);

    return { numIntegers : countOfIntegers, numDecimals : countOfDecimals, numStrings : countOfStrings };
}

const main = () => {
    let array = ["this", "is", 1, 3, 2.1, "a", "test"];
    let result = countItems(array);
    console.log("Number of Integers: " + result.numIntegers)
    console.log("Number of Decimal Numbers: " + result.numDecimals)
    console.log("Number of Strings: " + result.numStrings)
}

main();