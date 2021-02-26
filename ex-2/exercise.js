// write your JS here
// remember to always test in the browser
// to see if everything works correctly


var numberOfChildren = prompt(Please enter number of children);
var partnerName = prompt(Please enter partner name);
var location = prompt(Please enter your location);
var jobTitle = prompt(Please enter your job title);

var numberOfChildren = "4"
var partnerName = "Jasmine"
var location = "Augsburg"
var jobTitle = "Manager"

function fortuneTeller(numberOfChildren, partnerName, Location, jobTitle){
   this.numberOfChildren = numberOfChildren
   this.partnerName = partnerName
   this.Location = Location
   this.jobTitle = jobTitle
   alert('You will be a '+jobTitle+' in '+Location+', and married to '+partnerName+' with '+numberOfChildren+' kids.')
}

var merit = new fortuneTeller(numberOfChildren, partnerName, location, jobTitle);

merit.fortuneTeller();