// write your JS here
// remember to always test in the browser
// to see if everything works correctly
//Improve your age calculator by using a function

//Rebuild the age calculator by using new Date()

//Then use that inside a function

//Call that function several times with different dates

function agecalculator() {
    birthYear = prompt("Pleaase put your Birth year");
    currentYear = new Date();
    age = currentYear.getFullYear()-birthYear;
    return "your age is " + age;
}

window.alert(agecalculator());
window.alert(agecalculator());
