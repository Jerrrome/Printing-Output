//let friend = "Hanna";

/*
// Function Declaration
function greeting() {
    // do something
    console.log("Hello Hanna");
}
*/
// function greeting() {
//     // do something
//     console.log(`Hello ${friend}!`);
// }

/*
//functions may have parameters:
function greeting(fname, lname) {
    // do something
    console.log(`Hello ${fname} ${lname}!`);
}

// Function call
greeting('Selma', 'Basic');
*/

// function sandwichMaker(bread, cheese) {
//     let sandwichCreated =
//     `
//     ${bread}
//     ${cheese}
//     ${bread}
//     `;

//     //outputting sandwich
//     return sandwichCreated;
// }

// let lunch = sandwichMaker('rye', 'gauda');

// console.log(lunch);

// function expression
/*
let name = 'Ken';
let sandwichMaker = function (bread, cheese) {
    let sandwichCreated =
    `
    ${bread}
    ${cheese}
    ${bread}
    `;

    //outputting sandwich
    return sandwichCreated;
};

let lunch = sandwichMaker('rye', 'gauda');

console.log(lunch);
*/

// let applepieMaker = function (ingredient1, ingredient2, ingredient3, ingredient4) {
// let applepieCreated = `
//     ${ingredient1},
//     ${ingredient2},
//     ${ingredient3},
//     ${ingredient4}
//     `;
//     return applepieCreated;
// }

// let dessert = applepieMaker('apple','sugar','flour','eggs');
// console.log(dessert);


// Exercise
/*
function dataRetreaver () {
    // pretending we know how to retreave data...
    // data arrived:
    return [
        "apple",
        "sugar",
        "flour",
        "eggs"
    ];
}

// when dataRetreaver runs, array ["apple", ...] will be output and saved in applepie.
let applePie = dataRetreaver();

// use placeholder pie as parameter for htmlCreator to create the logic for generating unordered list.
function htmlCreator(pie) {
    //console.log(pie);
    let htmlContent;
    let i = 0;
    htmlContent = "<ul>";
    while (i < pie.length) {
        htmlContent += "<li>" + pie[i] + "</li>";
        i++;
    }
    htmlContent += "</ul>";
    return htmlContent;
}

// when htmlCreator runs, completed HTMl with data is output
// and saved in variable applePieDone
let applePieDone = htmlCreator(applePie);


// the last function, printHtml does printing only
function printHtml (stuffToPrint) {
    console.log(stuffToPrint);
}


// function printHtml runs, and stuffToPrint is assigned with applePieDone
printHtml(applePieDone);
*/

let serveCoffee = function() {
    console.log('Serving coffee!')
};

serveCoffee();

let robot = {
    name: 'Atomu',
    active: true,
    color: 'silver',
    limbs: 4,
    serveCoffee: function() {
        console.log('Serving coffee!');
}
};

console.log(robot.name);
robot.serveCoffee();

// Homework
// add the mods to robot above - positive/negative
// Negative mods requires another method
