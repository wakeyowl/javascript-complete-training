///////////////////////////////////////
// Lecture: Hoisting

















///////////////////////////////////////
// Lecture: Scoping


// First scoping example


//var a = 'Hello!';
//first();
//
//function first() {
//    var b = 'Hi!';
//    second();
//
//    function second() {
//        var c = 'Hey!';
//        console.log(a + b + c);
//    }
//}




// Example to show the differece between execution stack and scope chain


//var a = 'Hello!';
//first();
//
//function first() {
//    var b = 'Hi!';
//    second();
//
//    function second() {
//        var c = 'Hey!';
//        console.log(a + b + c);
//        third();
//    }
//}
//
//function third() {
//    var d = 'John';
//    console.log(a + d);
//}




///////////////////////////////////////
// Lecture: The this keyword

//
//calculateAge(1980);
//
//function calculateAge(year){
//    console.log(2017 - year);
//    console.log(this);
//}

var john = {
    name: 'John',
    yearOfBirth: 1980,
    calculateAge: function(){
        console.log(this);
        console.log(2017 - this.yearOfBirth);
    }
}

//console.log(john);

var mike = {
    name: 'Mike',
    yearOfBirth: 1975
}

mike.calculateAge = john.calculateAge;

mike.calculateAge();
