// HTML Data Attributes - output a clickable list that states which universe the character exists in
//It is used like this:
//data-attribute_name = “attribute_value”

function displayType(character) {
    var characterType = character.getAttribute("data-character-type");
    alert(characterType + " is " + character.innerHTML + "'s ticker symbol");
}