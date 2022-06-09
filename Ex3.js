/** Create an arrow function named: shortestString that returns the shortest string from an array of strings: */
const shortestString = (array) => {
    let sorted = array.sort((a, b) => {return a.length - b.length});
    return sorted[0];
}

const main = () =>{
    array = ['this', 'is', 'a', 'test', 'happy'];
    console.log(shortestString(array));
}

main();
