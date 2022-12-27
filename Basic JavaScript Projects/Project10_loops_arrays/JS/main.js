/** Create a loop */

function Call_Loop() {
    var Digit = "";
    var x = 0;
    while (x < 20) {
        Digit += "<br>" + x;
        x++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}

/** Length Property */

function Call_Length() {        /* name funciton to call*/
    text = "Length Property";   /*set text to test */
    x = text.length;            /* define x as the script "Length Property" */       
document.getElementById("how_long").innerHTML = x; /* create id to call element, call x */
}

// For Loops

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

// ARRAYS and OBJECTs
 function array_Function() { // name function
    var Cat_Picture = []; // name array
    Cat_Picture[0] = "sleeping"; // create each object= Cat_Pic, index= [], property= sleeping 
    Cat_Picture[1] = "playing!!";
    Cat_Picture[2] = "eating";
    Cat_Picture[3] = "purring";
    document.getElementById("Array").innerHTML = "In this picture, the cat is " + 
    Cat_Picture[1] + " "; //create id to call and the specifics of how the result for "cat_pic 2 " should display when called
 }

 // Constants
 function constant_function() {
    const Musical_Instrument = {type:"guitar", brand:"Fender", color:"black"};
    Musical_Instrument.color = "seafoam";
    Musical_Instrument.price = "$1400"; // changed value
    Musical_Instrument.brand = "Gibson"; // added a property and value
    document.getElementById("Constant").innerHTML = "The cost of the " +
    Musical_Instrument.brand + " " + Musical_Instrument.type + " was " + Musical_Instrument.price;
 }

 // Let Keyword

 function Let_Function() {
    let x = 10;
    var y = 1;
    document.getElementById("Let").innerHTML = x + 3 + y;
 }

 //Return Statement

 function call_Return() {
    var r = n(7, 3); // name variable r and assign n values of 7 and 3
    function n(t, u) { // create a function namend n which we will pass the variable values to
        return t * u;
    }                   // call the return statement to multiply the values of t and u
    document.getElementById("drof").innerHTML = r; // call r to be returned to the html when prompted
 }

//Object - create an object with properties and a method
function obj_Function(){
let car = {
    make: "Dodge ",
    model: "Viper ",
    year: "2021 ",
    color: "Red ",
    description : function() {
        return "The car is a " + this.year + this.color + this.make + this.model;
    }
};
document.getElementById("Car_Object").innerHTML = car.description();
}

// Break and Continue statements
function brco_Function() {
    let text = "";
    for (let i = 1; i < 16; i++) {
        if (i === 3) {continue; }
        if (i === 12) {break; }
        text += "The number is" + i + "<br>";
    }
    document.getElementById("break_cont").innerHTML = text;
}
    
