/** ------- PROJECT 8 --------- */


/** ------ CONCAT () METHOD ----- */
/* The Concat method connects two or more strings */

function full_sentence() {          /** create a function */
    var part_1 = "I have ";         /** create variable string to be connected*/
    var part_2 = "made this ";          /** create variable string to be connected*/
    var part_3 = "into a complete sentence.";
    var whole_sentence = part_1.concat(part_2, part_3); /* create concatenete variable */
    document.getElementById("Concatenate").innerHTML = whole_sentence; /** HTML caller id or element to be called*/
}

/** -- SLICE() Method -- */

function slice_method() {
    var Sentence = "All work and no play makes Johnny a dull boy.";
    var Section = Sentence.slice(27,33);
    document.getElementById("Slice").innerHTML = Section;
}

/** Convert to upper Case  */
function up_method() {
    var x = "I've been working on the railroad.";
    var y = x.toUpperCase();       /** convert to upper case using y variable calling x variable using the "toUpperCase" method. */     
    document.getElementById("Upcase").innerHTML = y;
}

/** search() Method */
function search_method() {
    var x = "I've been working on the railroad all the years of my life.";
    var y = x.search("the");       /** searches the string for value of "the" and returns the position of the first match. */     
    document.getElementById("find").innerHTML = y;
}

/** toString() Method */
function string_method() {
    var x =10010100110; 
    document.getElementById("stringy").innerHTML = x.toString(); /** implement the "toString() method to return an integer as a string" */
}


/** toPRECISION() Method */
function sion_method() {
    var x =10110.301897428970003; 
    document.getElementById("preci_sion").innerHTML = x.toPrecision(10); /** implement the "toPrecison() method to return a number of 10 digits only" */
}

/** toFixed() method */
function Fxd_method() { /** name a function */
    var x = 9.82567;         /** as a side note this variable x will round up or down the final value place based on the next digit, this particular usage will result in 9.83 rounding up the 2 to a 3 based on the next digit 5 */ 
    document.getElementById("fix_ed").innerHTML = x.toFixed(2); /** use the "toFixed()"method to convert decimals to xx places as defined(2), name the id attribute as "fix_ed" to be called by the HTML element*/
}

/** valueOf() method */
function valOf_method() { /** name a function */
    var x = "Happy New Year!";         /**string variable */ 
    document.getElementById("value_of").innerHTML = x.valueOf(); /** the valueOf() method returns the primitive value of a string */
}