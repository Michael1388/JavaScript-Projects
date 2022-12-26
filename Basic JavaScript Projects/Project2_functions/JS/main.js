

function Button_Function () { /*create a new function and name it */
    var str = "Too slow, "; /* define a variable */
    var confuse = " Refresh and Try again!"; /* define a second variable */
    document.getElementById("Button_Text").innerHTML = str + confuse; /* define the id and method of the element we want called, concatrenate the two variables */
}

function myFunction() { /*create a new function and name it */
    var sentence = "I am learning a lot from this book!"; /* creat a variable to call into the HTML file*/
    sentence += " There is no winning the above button challenge, sorry. I am still learning!"; /* concatenante a string of text to the previous string of text */
    document.getElementById("Concatenate").innerHTML = sentence; /* define the id and method of the element we want called from the HTML file*/
}