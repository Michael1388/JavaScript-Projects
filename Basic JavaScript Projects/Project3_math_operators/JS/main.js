
/* Math Operators */

function addition_Function() { /* create and name the function "addition_Function" */
    var addition = 2 + 2;       /* name the variable "addition" of the operator + and assign it two values */
    document.getElementById("Math").innerHTML = "= " + addition; /* define how we will call the function, "document.getElementById", 
    name the id "Math" by which we can call it from an html doc 
    and define the variable "addition" from above that we want to return in the HTML document.*/
}

function subtraction_Function() {
    var Subtraction = 5 - 2;
    document.getElementById("subtract").innerHTML =" "+ Subtraction;
}

function multiply() {
    var m_m = 6 * 8;
    document.getElementById("times").innerHTML = " " + m_m;
}

function division() {
    var d_d = 48 / 6;
    document.getElementById("divide").innerHTML = " " + d_d;
}

function multiple_ops() {
    var multi = (1 + 2) * 10 / 2 -5;
    document.getElementById("get_multi").innerHTML = " " + multi;
}

function modulous_op() {
    var mod_op = 29 % 3;
    document.getElementById("remainder").innerHTML = " " + mod_op;
}

function negation_op() {
    var x = 10;
    document.getElementById("negative").innerHTML = -x;
}
/* Increment Operator */
var x = 5;          /* names the variable x and gives it a value of 5 */
x++;                /* adds 1 to the value given to the variable named above */
document.write (x); /*displays 6 */

/* Decrement Operator */

var y = 5.25;       /* names the variable y and gives it a value of 5.25 */
y--;                /* subtracts 1 from the value given to the variable named above */
document.write(y); /* displays 4.25*/

window.alert(Math.random()); /* returns a random number between 0 and 1 in a pop up window */

window.alert(Math.random() *100); /* returns a random number between x and x and displays it in a pop up window */


/* The JavaScript "Math object" and "Math object method" */

window.alert(Math.min(0, 150, 30, 20, -8, -200)); 

/* above is the Math Object "Math" using the Math Method ".min " 
to determine the lowest value in a list of arguments (0, 150, 30, 20, -8, -200) and displays it in a pop up wiindow */
