// write your JS here
// remember to always test in the browser
// to see if everything works correctly
//Takes 2 arguments, both numbers.

//Returns whichever number is the greater (higher) number.

//Call that function 2 times with different number pairs

//Log the output, e.g. "The greater number of 5 and 10 is 5." like we did yesterday.


function greaterNum(number1, number2){
    if(number1 > number2){
        window.alert('The greater number of ' + number1 + ' and ' + number2 +
        ' is ' + number1 + '.');
    }
    else if(number1 < number2){
        window.alert('The greater number of ' + number1 + ' and ' + number2 +
        ' is ' + number2 + '.');
    }
    else{
        window.alert('The number are equal');
    }
}

greaterNum(10, 15);
greaterNum(20, 15);
greaterNum(1, 6);
greaterNum(100, 150);
greaterNum(15, 15);


