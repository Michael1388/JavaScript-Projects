
/********************************** PROJECT 6 ******************************/

/* -- Ternary operator: ? -- */

function bigger_or_bigger() {
    document.write(Bigger = (5 > 1) ? "Left number is bigger":"Right number is bigger")("bnb").innerHTML = ""; 
}

function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";

}

function Vote_Function() {              /*-- name a function to call --*/
    var Age, Can_vote;                              /*-- create 2 variables --*/
    Age = document.getElementById("Age").value;                      /*-- define id name of value to call from the doocument input field --*/
    Can_vote = (Age < 18) ? "You are not old enough to":"You can";      /*-- define condition "Age > 18" and the two values hinged on the condition --*/
    document.getElementById("Vote").innerHTML = Can_vote + " vote.";        /*-- define the name of the id that will be called to show the result of the condition met by user input or not --*/

}

/******* KEYWORDS  */
function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto" , 1971, "Mustard");
function key_Function() {
    document.getElementById("Keywords_Constructors").innerHTML = 
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
    " manufactured in " + Erik.Vehicle_Year;
}

function Plant(Type, Variation, Color) {
    this.Plant_Type = Type;
    this.Plant_Variation = Variation;
    this.Plant_Color = Color;
}
var row1 = new Plant("Tomatoe", "Beefsteak", "Red");
var row2 = new Plant("Tomatoe", "Cherry", "Black");
var row3 = new Plant("Carrot", "Cosmic Purple", "Purple");
function row_Function() {
    document.getElementById("New_and_This").innerHTML = "In row 2 we have 5 " + row2.Plant_Color + " " + row2.Plant_Variation + " " + row2.Plant_Type + " plants. I need to add the quantity object into the Plant class (I think) I see!";
}