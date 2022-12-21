
/* Creating Dictionaries in JS */

function animal_Dictionary() { /*define a function called "animal_Dictionary" to create a dictionary*/
    var Animal = {              /* define the object "Animal" and the following KVP variables*/
        Species:"Dog",          /* Assign each Key "Species" and Value "Dog" */
        Color:"Black",          /* Assign KVP */
        Breed:"Labrador",       /* Assign KVP */
        Age:5,                  /* Assign KVP , we do not have to place 5 in " " because 5 is a value "type" number. */
        Sound:"Bark!"           /* Assign KVP */
    };
    document.getElementById("BlackDog").innerHTML = Animal.Sound; /*  create a method by which to call our result from the HTML file
     with the Element id of "BlackDog" to call our "animal_Dictionary" Function result request of the value of our Object, "Animal" Key "Sound" whose value which will be returned is "Bark!" */
}