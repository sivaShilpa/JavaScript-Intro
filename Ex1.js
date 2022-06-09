/**Create an arrow function called countNumbers that takes an array and
returns the number of numbers that only contain decimal points. */

const countNumbers = (array) => {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        if (typeof(array[i]) === "number" && array[i] % 1 !== 0) {
            count++;
        }
    }
    return count;
}

const main = () => {
    const array = [1, '2', 3, 'test', 1.2];
    console.log(countNumbers(array));
}

main();