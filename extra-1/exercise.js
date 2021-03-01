//Create a program that determines how many years you have left until retirement and the year you can retire.

//It should prompt the user for his birthday and the age you want to retire and display the output as shown in the example that follows.

//Example:

/*When is your birthday? 25/02/1990
At what age would you like to retire? 65
You have 40 years left until you can retire.
It's 2020, so you can retire the 25/02/2055.

Your computer knows what the current year is. Figure out how to do that in JavaScript.

## What to do

List inputs, outputs, processes in a text file.

What are the constraints? Any edge case to consider? Note in your text file.

Write the steps of your algorithm in pseudo-code in a second text file.

Write the program in JavaScript. Find out how to get the current year from your computer.*/


function retireAge(birthday, yearLikeRetire){
    var yearRetire = birthday.getFullYear() + yearLikeRetire;
    var yearUntilRetire = yearRetire - (new Date()).getFullYear();
    var yearToBeRetire = birthday.getDate() + '/' + birthday.getMonth() + '/' + yearRetire;
    window.alert('You have ' + yearUntilRetire +
    ' years left until you can retire. It\'s ' + (new Date()).getFullYear() + 
    ', so you can retire the ' + yearToBeRetire + '.');
}

var birthday = prompt('When is your brithday ?');
var yearLikeRetire = prompt('At what age would you like retire ?');

var day = birthday.substr(0, 2);
var month = birthday.substr(3, 2);
var year = birthday.substr(6, 4);

var date = new Date(Number(year), Number(month), Number(day));

retireAge(date, Number(yearLikeRetire)) 