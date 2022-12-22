
function my_Function() {
    document.getElementById("Test").innerHTML = isNaN('007'); 
    /* NaN (not a number) variations: 0/0; would return NaN bc you can't divide 0 by 0. 
    OR  - isNaN('This is a string'); would result as "True" becaus it is a string!! 
    OR isNaN('007'); would return false bc it IS a number*/
}

document.write(2E310);  /* Displays Infinity*/

document.write(-2E310); /* Displays -Infinity*/