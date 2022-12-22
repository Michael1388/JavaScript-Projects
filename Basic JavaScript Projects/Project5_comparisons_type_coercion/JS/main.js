
/* the "document.write" and "typeof" Operators in JS */

document.write(typeof "Word");  /* will display type of, in this case will return "string" as the type. */

document.write(typeof 5);       /* will display type of, in this case type is a number. */

document.write("10" + 5);       /* example of "type coercion" returns 105 */

function infinity_positive() {
    document.write(2E310)("infinity").innerHTML = "";  /* Displays Infinity*/
}

function my_Function() {
document.write(-2E310)("Test").innerHTML = ""; /* Displays -Infinity*/
}

function boolean_true() {
    document.write(10>2)("true").innerHTML = "True";  /* Displays Boolean "True" */
}

function boolean_false() {
    document.write(10<2)("false").innerHTML = "FALSE";  /* Displays Boolena False*/
}