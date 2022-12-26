/** *************** PROJECT 7 ***************** */

/** Global Variable */ /** Has been commented out to be able to run the other below functions that followed it */

/**var x = 10;         /**global variable resides outside of the funciton, can be called by funciton */
// function Add_numbers_1() {          /**create function */
//    document.write(20 + x + "<br>"); /** call the global variable x and display result*/
//}
//function Add_numbers_2() {
//    document.write(x + 100); 
//}
//Add_numbers_1();            /**will display 30, a result of global x = 10 + 20 */
//Add_numbers_2();            /**will display 110, a result of global x = 10 + 100 */

/** Local Variable */


// function Add_numbers_1() {             /**create function */
//var x = 10;                            /**local variable resides inside of funciton and can be called only by this funciton */
    //document.write(20 + x + "<br>");   /** call the global variable x and display result*/
//}
//function Add_numbers_2() {
//   document.write(x + 100);        /** x is not defined within the function so will not return a result */
//}
//Add_numbers_1();                    /**will display 30, a result of local variable x = 10 + 20 */
//Add_numbers_2();                    /**will display nothing, a result of x not being defined locally or globally */
//

/** Debug CONSOLE.LOG  ****/       
//function Add_numbers_1() {          
//var x = 10;                         
//    console.log(15 + x);            /* no errors here */
//}
//function Add_numbers_2() {
//    console.log(x + 100);       /** error shown here as "x not defined at "Add_numbers_2" so it will not return a result w/o being corrected*/
//} 
//Add_numbers_1();                
//Add_numbers_2();      

/** I left the above code commented out becasue although it worked while running it, the code below would not work with this active. I'd be happy to hear some thoughts on that */

/** ------ IF STATEMENTS ----- */

if (1 < 2 ) {
    document.write("The left number is smaller than the number on the right.")
}

function get_Date() { /*create function*/
    if (new Date().getHours() < 19) { /** new date constructor with getHours method for 7 pm  */
        document.getElementById("Greeting").innerHTML = "Happy Holidays!!"; /** display result */
    }
}

function get_equals() {
if (3 == 3) {
    document.getElementById("equal").innerHTML = "3 equals 3";
    }
}

/** -- ELSE STATEMENTS --- IF / ELSE - */
function Age_Function() {
    Age = document.getElementById("Age").value;
    if (Age >= 18) {
        Vote = "You are old enough to vote!";
    }
    else {
        Vote = "You are not old enough to vote!";
    }
    document.getElementById("How_old_are_you?").innerHTML = Vote;
}

/** IF / ELSE ASSIGNMENT */

function country_Function() {
    Country = document.getElementById("Country").value; /* Asking the document to send me the "value"*/
    if (Country == "USA") {                             /** name the qualifying variable */
        Result = "You were born in the USA";           /** Result if answer is true */
    }
    else {
        Result = "You were not born in the USA";        /** REsult if answer is False */
    }
    document.getElementById("from_USA?").innerHTML = Result; /** Show user Result */
}

/** ELSE IF Statements */

function Time_function() {                  
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}

