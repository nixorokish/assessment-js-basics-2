///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/

let sep = `----------------`
console.log(sep)
//////////////////PROBLEM 1////////////////////
console.log(`Problem 1:`)

/*  
    Below is a cart array that has food objects inside. 
    Write a callback below that uses the reduce array method to calculate the sum of all the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE
const reduced = cart.reduce((acc, cv) => acc + cv.price, 0)

console.log(reduced)

// const summedPrice = cart.reduce(/* CALLBACK HERE */)

console.log(sep)
//////////////////PROBLEM 2////////////////////
console.log(`Problem 2:`)

/*  
    Write a function called `calcFinalPrice` that can take in `cartTotal`,`couponValue`, and `tax` arguments. 
    Inside the function, calculate the tax on the cartTotal and add it in. Subtract the value of the coupon. Return the final number. 

    Note: the numbers passed in for `tax` will be decimals, for example: .06 for a 6% tax.
*/

//CODE HERE
const calcFinalPrice = (cartTotal, couponValue, tax) => {
    return (cartTotal * (1 + tax) - couponValue)
}

console.log(calcFinalPrice(reduced, 5, 0.06))

console.log(sep)
//////////////////PROBLEM 3////////////////////
console.log(`Problem 3:`)

/*  
    In this problem, you'll create a model for a customer object as well as an example object. 
    Plan out a customer object for the cart page. Think about the information that a restaurant would need about its customers.
    In the TEXT ANSWER area below, describe the properties that your customer object will have and why you chose those properties.
    Explain what data types each property should be and why you chose those data types. 
    Your object should have at least 4 properties. 
*/

/*
    Customer Name: Identifier, string
    Customer Address: Address for delivery, string
    Customer Credit card number: for payment, number
    Customer Card CVV: to verify card, number
    Customer Billing Info: Address for credit card info, string

*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE

const customer = {
    name: `Billy Bob Thornton`,
    address: `123 Wisteria Lane, Greenville IL`,
    creditCard: 1234123412341234,
    CVV: 123,
    billingAddress: `123 Wisteria Lane, Greenville IL`
}

console.log(`Created customer object`)

console.log(sep)