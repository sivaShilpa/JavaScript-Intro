/** Create array of items using the push method and pass this array into a function called: calculateTotal.  
 * This function calculates the total of all the items.
    Output: */

const calculateTotal = (itemArray) => {
    let total = 0;

    for(let i = 0; i < itemArray.length; i++){
        total += itemArray[i].cost * itemArray[i].quantity;
    }

    console.log(total);
}

const main = () => {

    let item1 = { quantity: 1, cost: 1.00 }
    let item2 = { quantity: 2, cost: 2.00 }
    let item3 = { quantity: 3, cost: 3.00 }

    let itemArray = [];

    itemArray.push(item1);
    itemArray.push(item2);
    itemArray.push(item3);

    calculateTotal(itemArray);

}

main();