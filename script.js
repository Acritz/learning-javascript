let array = [
    {
        name: 'apple', price: 4, quantity: 2
    },
    {
        name: 'orange', price: 3, quantity: 3
    }
];

function cartTotal(object) {
    let sum = 0;
    object.forEach(element => {
        sum += element.price * element.quantity;
    });
    return sum;
}