function Color_Function() {
    var Color_Output;
    var Colors = document.getElementById("Color_Input").value;
    var Color_String = " is a great color!";
    switch (Colors) {
        case "Red":
            Color_Output = "Red" + Color_String;
            break;
        case "Yellow":
            Color_Output = "Yellow" + Color_String;
            break;
        case "Green":
            Color_Output = "Green" + Color_String;
            break;
        case "Blue":
            Color_Output = "Blue" + Color_String;
        break;
        case "Pink":
        Color_Output = "Pink" + Color_String;
        break;
        case "Purple":
        Color_Output = "Purple" + Color_String;
        break;
        default:
        Color_Output = "Please enter a color exactly as written in the above list.";
    }
    document.getElementById("Output").innerHTML = Color_Output;
}

// Get Element by CLASS NAME method
function Hello_World_Function() {
    var A = document.getElementsByClassName("Click");
    A[0].innerHTML = "The text has changed!";
}

// Canvas Element with createLinearGradient()method.
var c = document.getElementById("graphic_Canvas");
var ctx = c.getContext("2d");
// Create gradient
var grd = ctx.createLinearGradient(0,0,200,0);
grd.addColorStop(0,"orange");
grd.addColorStop(1,"purple");
// Fill with gradient
ctx.fillStyle = grd;
ctx.fillRect(10,10,180,80);