/** Create a function called createPerson that creates the following JavaScript object: */

const createPerson = (name, age) => {
    return { "fullName" : name, "age" : age };
}

/** Create a function called countOver20 that returns the number of people that are over 20 years old. */

const countOver20 = (personArray) => {
    let count = 0;

   for (const item of personArray) {
       if(item.age > 20){
        count++;
       }
    }

    return count;
}

const main = () => {

    let p1 = createPerson("Alice", 11)
    let p2 = createPerson("Bob", 22)
    let p3 = createPerson("Charlie", 33)

    let personArray = [];
    personArray.push(p1)
    personArray.push(p2)
    personArray.push(p3)

    console.log(countOver20(personArray))

}

main();