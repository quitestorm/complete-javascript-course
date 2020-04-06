alert("hey!");

var firstName = "Rena`"
var lastName = "Lynch"
var age = 48
var status = "single"
 
if (status === "married") {
    alert(firstName + " is married")
}else{
    alert(firstName + " is happy")
}


alert(firstName + lastName + " is "+ age)

var Dog = prompt("What is your dogs name?");
alert(Dog)



var markHeight, johnsHeight, marksMass, johnsMass
markHeight = 78
johnsHeight =67
marksMass = 134
johnsMass = 164

var BMI = marksMass / (markHeight *2 )
var BMI2 = johnsMass / (johnsHeight * 2)
alert(BMI > BMI2)