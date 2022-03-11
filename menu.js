///////////////////////////////////////////////
///////////////////MENU.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code that deals with food objects, arrays of objects and filtering those arrays. 
*/

let sep = `----------------`
console.log(sep)
//////////////////PROBLEM 1////////////////////
console.log(`Problem 1:`)

/*  
    Create an object called `pizza` that has 6 properties: 
        - name (string)
        - price (number)
        - category (string)
        - popularity (number)
        - rating (number)
        - tags (array of strings)

    Make sure that you give your properties values of the correct data type.

    Note: the category is something like appetizer/entree, the popularity is an overall ranking, the rating is an average of 
    all customer ratings, and for the tags, think of things that a user might filter by, like 'gluten-free' or 'kids'
*/

//CODE HERE
const pizza = {
    name: `pepperoni`,
    price: 14.99,
    category: `entree`,
    popularity: 98,
    rating: 85,
    tags: [`entrees`,`all-day`, `kids`]
}

console.log(`object 'pizza' created.`)

console.log(sep)
//////////////////PROBLEM 2////////////////////
console.log(`Problem 2:`)

/* 
    Let's print a few values from our pizza object.
    First, log the popularity of pizza. Use dot notation to access the value.
*/

//CODE HERE
console.log(`${Object.keys(pizza)[3]}: ${pizza.popularity}`)

/*
    Second, log the second tag in your pizza's tags array.
    Use a combination of dots and brackets to get the value.
*/

//CODE HERE
console.log(`${Object.keys(pizza)[5]}: ${pizza.tags[1]}`)

/*
    Third, destructure the price off of the pizza object.
    Print the value of your new price variable.
*/

//CODE HERE
let {price} = pizza
console.log(`${Object.keys(pizza)[1]}: ${price}`)

/*
    Fourth, and last, destructure the category property.
    Print the value of your category variable. 
*/

//CODE HERE
let {category} = pizza
console.log(`${Object.keys(pizza)[2]}: ${category}`)

console.log(sep)
//////////////////PROBLEM 3////////////////////
console.log(`Problem 3:`)

/* 
    Create an array with about 5 objects in it. The objects should mimic the `pizza` object. Call the array `foodArr`.
    Make sure that they have slightly different values for price, popularity, rating, and tags. That way, you'll be able to use this
    data in some functions that you'll write.
*/

//CODE HERE
const foodArr = [
    {
    name: `Salad`,
    price: 6.99,
    category: `appetizers`,
    popularity: 72,
    rating: 74,
    tags: [`appetizers`,`lunch`, `dinner`]
    },
    {
    name: `Mac n cheese`,
    price: 4.99,
    category: `sides`,
    popularity: 89,
    rating: 97,
    tags: [`side`,`all-day`, `kids`]
    },
    {
    name: `Mashed potatoes`,
    price: 4.99,
    category: `sides`,
    popularity: 85,
    rating: 70,
    tags: [`sides`,`all-day`, `kids`]
    },
    {
    name: `Fries`,
    price: 3.99,
    category: `sides`,
    popularity: 72,
    rating: 74,
    tags: [`sides`,`lunch`, `kids`]
    },
    {
    name: `Worms in dirt`,
    price: 6.99,
    category: `desserts`,
    popularity: 60,
    rating: 99,
    tags: [`desserts`,`dinner`, `kids`]
    }
]

console.log(`Created array of food objects`)

console.log(sep)
//////////////////PROBLEM 4////////////////////
console.log(`Problem 4:`)

/* 
    Let's filter the food objects according to their tags.
    Write a callback function below that will return only 
    food objects that have a certain tag.
    You can check for any tag that at least 1 of your food 
    objects has.
*/

//CODE HERE
const filteredFood = foodArr.filter(findTags => {
    return findTags.tags.includes(`kids`)
})

console.log(filteredFood)


console.log(sep)
//////////////////PROBLEM 5////////////////////
console.log(`Problem 5:`)

/* 
    Now let's write a function that's a little more flexible than just 
    filtering for one value. We want to be able to filter for food that 
    has above a certain rating, below a certain price, or any other combo.

    Write a function called `filterByProperty` that takes in 
    three arguments: `property`, `number`, and `type`. 

    The property will be a string (rating, popularity, or price)
    The number will be the number that you want to compare against 
    The type should be 'above' or 'below' to indicate whether 
    you want to get foods with values that are above or below 
    the given number for the given property

    Inside the function, create a variable to hold a filtered array

    Use the filter method to filter the foodArr

        In the callback, check if the `type` is `above`, 
        if it is, return objects whose value for the given
        property is greater than the `number` passed in

        If the type isn't `below`, return objects whose value for the 
        given property is less than the `number` passed in
    
    Return the filtered array from the entire function
*/

//CODE HERE
const filterByProperty = (property, number, type) => {
    let filteredArr = foodArr.filter(find)

}

/*
    Invoke the `filterByProperty` function passing
    in a value for each paramter.

    You'll have to console.log to see the filtered array
*/

//CODE HERE