
/********************************** PROJECT 6 ******************************/

/* -- Ternary operator: ? -- */

function bigger_or_bigger() {
    document.write(Bigger = (5 > 1) ? "Left number is bigger":"Right number is bigger")("bnb").innerHTML = "";      /**let the document write the ("condition '?' " and the two "values") separated by :, name the id to call("bnb").  */
}

function Ride_Function() {                                                      /*-- name a function to call --*/
    var Height, Can_ride;                                                       /*-- create 2 variables --*/
    Height = document.getElementById("Height").value;                           /*-- define id name of value to call from the doocument input field --*/
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";       /*-- define condition and the two values hinged on the condition --*/
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";         /*-- define the name of the id that will be called to show the result of the condition met by user input or not --*/

}

function Vote_Function() {                                              /*-- name a function to call --*/
    var Age, Can_vote;                                                  /*-- create 2 variables --*/
    Age = document.getElementById("Age").value;                         /*-- define id name of value to call from the doocument input field --*/
    Can_vote = (Age < 18) ? "You are not old enough to":"You can";      /*-- define condition "Age > 18" and the two values hinged on the condition --*/
    document.getElementById("Vote").innerHTML = Can_vote + " vote.";    /*-- define the name of the id that will be called to show the result of the condition met by user input or not --*/

}

/******* KEYWORDS  */
function Vehicle(Make, Model, Year, Color) {            /*** Create an object constructor function */
    this.Vehicle_Make = Make;                           /*** create new value */    
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");                              /** create variables and assign new objects  */
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto" , 1971, "Mustard");
function key_Function() {                                                           /**create function to call */ 
    document.getElementById("Keywords_Constructors").innerHTML =                    /**assign an id to call */ 
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +      /**and add variables and objects to be called */
    " manufactured in " + Erik.Vehicle_Year;
}

function Plant(Type, Variation, Color) {    /*** Create an object constructor function */
    this.Plant_Type = Type;                 /*** create new value */    
    this.Plant_Variation = Variation;
    this.Plant_Color = Color;
}
var row1 = new Plant("Tomatoe", "Beefsteak", "Red");    /** create variables and assign new objects  */
var row2 = new Plant("Tomatoe", "Cherry", "Black");
var row3 = new Plant("Carrot", "Cosmic Purple", "Purple");
/* var break = new Plant("Pepper", "Bell", "Red"); /** *** RESERVED WORD ASSIGNMENT - "break" breaks the code */
function row_Function() {                               /**create function to call, assign an id and add variables to call  */
    document.getElementById("New_and_This").innerHTML = "In row 2 we have 5 " + row2.Plant_Color + " " + row2.Plant_Variation + " " + row2.Plant_Type + " plants. I need to add the quantity object into the Plant class I see!";
}

 /*** Create an object constructor function */
function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}
/*** NESTED FUNCTIONS */

function count_Function() {
    document.getElementById("Counting").innerHTML = Count();
    function Count() {
        var Starting_point = 9;
        function Plus_one() {Starting_point += 1;} /***Nested Function */
        Plus_one();
        return Starting_point;
    }
}

/*** NESTED FUNCTION Assignment */

function Nest_Function() {
    document.getElementById("Nested_Function").innerHTML = Count();
    function Count() {
        var Starting_point = 2;
        function Plus_one() {Starting_point += 2;} /***Nested Function */
        Plus_one();
        return Starting_point;
    }
} /** Returns 4 */