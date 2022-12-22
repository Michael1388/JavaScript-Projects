
/* the "document.write" and "typeof" Operators in JS */

document.write(typeof "Word");  /* will display type of, in this case will return "string" as the type. */

document.write(typeof 5);       /* will display type of, in this case type is a number. */

document.write("10" + 5);       /* example of "type coercion" returns 105 */

/* Floating point, Infinity and -Infinity */

function infinity_positive() {
    document.write(2E310)("infinity").innerHTML = "";  /* Displays Infinity */
}

function my_Function() {
document.write(-2E310)("Test").innerHTML = ""; /* Displays -Infinity */
}

/* Boolean Operators*/

function boolean_true() {
    document.write(10>2)("true").innerHTML = "True";  /* Displays Boolean "True" */
}

function boolean_false() {
    document.write(10<2)("false").innerHTML = "FALSE";  /* Displays Boolean False */
}

/* --- Console.Log  --- */

console.log(2+2); /* displays the result of (x+x) in this line of script, in this case (4), in the Dev Tools "Console" window */

console.log(4>5); /* displays "false" in the console */

/* Double Equal == comparisons */

function double_true() {
    document.write(10 == 10)("true_double").innerHTML = ""; /* double equal to produce "true" result*/
}

function double_false() {
    document.write(3 == 11)("false_double").innerHTML = ""; /* double equal to produce "true" result*/
}

/* --- Triple === comparisons --- */

function type_value_true() {
    var x = 10;
    var y = 10;
    document.write(x === y)("tv_true").innerHTML = ""; /* Return true by ensuring to match the data type and value.*/
}

function type_value_false() {
    var x = 5;
    var y = "blue";
    document.write(x === y)("tv_false").innerHTML = ""; /* Return false by writing a different data type and different value.*/
}

function diff_data_same_value_false() {
    var a = 2;
    var b = "two";
    document.write(a === b)("dd_svf").innerHTML = ""; /* Return false by writing a different data type but the same value for both.*/
}

function same_data_diff_value_false() {
    var a = "blue";
    var b = "red";
    document.write(a === b)("sd_dvf").innerHTML = ""; /* Return false by writing the same data type but a different value for both.*/
}

/* Logical Operators AND:&& and OR:|| and NOT:!*/

function and_true() {
document.write(5 > 2 && 10 > 4)("andtrue").innerHTML = "";      /* makes AND operator to return and display true */
}

function and_false() {
    document.write(5 > 7 && 10 > 4)("andfalse").innerHTML = ""; /* makes AND operator to return and display false */
}


function or_true() {
        document.write(1 > 5 || 10 > 4)("ortrue").innerHTML = ""; /* makes OR operator to return and display true */
}


function or_false() {
        document.write(1 > 2 || 2 > 4)("orfalse").innerHTML = ""; /* makes OR operator to return and display false */
}

/* NOT ! */


function not_false() {
    document.getElementById("notfalse").innerHTML = !(20 > 10);      /* Not operator ! returns false when answer is true as is in this case of 20 being greater than 10 */

}

function not_true() {
    document.getElementById("nottrue").innerHTML = !(1 > 2);      /* Not operator ! returns true when answer is false (double negative not not )as is in this case of 1 being greater than 2 */
}
