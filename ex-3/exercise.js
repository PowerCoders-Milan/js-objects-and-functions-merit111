// write your JS here
// remember to always test in the browser
// to see if everything works correctly
//Create an array to hold your top choices (colors, presidents, whatever).

//For each choice of each argument, log to the screen a string like: "My #1 choice is blue."

//Change your top choices into objects, e.g. pet with: name, type of pet.. as properties.

//Display it to the browser.

function displayChoice(choiceNumber) {
    return `My #${choiceNumber} choice is ${choices[choiceNumber - 1]}`
};

var choices = ["blue", "Biden", "Football"];
console.log(displayChoice(1));
console.log(displayChoice(2));
console.log(displayChoice(3));

const favourite = {
    color: "Blue",
    presidents: "Biden",
}
console.log("my favourite color is" + favourite.color);
console.log("my favourite color is" + favourite.presidents);




