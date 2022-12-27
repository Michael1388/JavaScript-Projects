/** ------- PROJECT 9 --------- */

function countdown() {          /** name function */
    var seconds = document.getElementById("seconds").value; /** gets value from user input of HTML input element */

    function tick() {           /** names a funciton to call */
        seconds = seconds - 1;          /** */
        timer.innerHTML = seconds;         /** */
        var time = setTimeout(tick, 1000);          /** program is pausing for "1000" miliseconds or 1 second */
        if (seconds == -1) {
            alert("Time's up!");            /** alert event handler */
            clearTimeout(time);             /**  */
            timer.innerHTML = "";          /**  */
        }
    }
    tick();         /** call the function */
}

