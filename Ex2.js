/**Create an arrow function called minNumber that takes an array of numbers and
returns the lowest number.  The function must use a for loop and must ignore data types that are of type string or boolean. */
const minNumber = (array) => {
    let numArray = [];

    for(let i = 0; i < array.length; i++){
        if(typeof(array[i])=="number"){
            numArray.push(array[i]);
        }
    }
    numArray.sort();
    return numArray[0];
}

const main = () => {
    const array = [12, 55, "2", 22, 11, true];
    console.log(minNumber(array));
}

main();