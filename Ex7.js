/** Add these person objects to an array using the push() method and sort the array based on age (ascending).  
 * Write the following to the console using console.table(). */

const main = () => {
    let person1 = { name: "Alice", age: 22 }
    let person2 = { name: "Bob", age: 21 }
    let person3 = { name: "Charlie", age: 23 }
    
    let objArray = [];

    objArray.push(person1);
    objArray.push(person2);
    objArray.push(person3);

    console.table(objArray);

}

main();
