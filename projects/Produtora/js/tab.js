function Trocar(btn) {
    if (btn == 0) {
        document.getElementById("SEC01").style.display = "block";
        document.getElementById("SEC02").style.display = "none";
        document.getElementById("SEC03").style.display = "none";
        document.getElementById("SEC04").style.display = "none";

        // -----------------------------------------------------
        document.getElementById("btn1").style.background = "black";
        document.getElementById("btn2").style.background = "red";
        document.getElementById("btn3").style.background = "red";
        document.getElementById("btn4").style.background = "red";
        
    } else if (btn == 1) {
        document.getElementById("SEC02").style.display = "block";
        document.getElementById("SEC01").style.display = "none";
        document.getElementById("SEC03").style.display = "none";
        document.getElementById("SEC04").style.display = "none";
        // -----------------------------------------------------

        document.getElementById("btn1").style.background = "red";
        document.getElementById("btn2").style.background = "black";
        document.getElementById("btn3").style.background = "red";
        document.getElementById("btn4").style.background = "red";
        
    } else if (btn == 2) {
        document.getElementById("SEC03").style.display = "block";
        document.getElementById("SEC01").style.display = "none";
        document.getElementById("SEC02").style.display = "none";
        document.getElementById("SEC04").style.display = "none";
        // -----------------------------------------------------

        document.getElementById("btn1").style.background = "red";
        document.getElementById("btn2").style.background = "red";
        document.getElementById("btn3").style.background = "black";
        document.getElementById("btn4").style.background = "red";
        
    } else if (btn == 3) {
        document.getElementById("SEC04").style.display = "block";
        document.getElementById("SEC03").style.display = "none";
        document.getElementById("SEC02").style.display = "none";
        document.getElementById("SEC01").style.display = "none";
        // -----------------------------------------------------

        document.getElementById("btn1").style.background = "red";
        document.getElementById("btn2").style.background = "red";
        document.getElementById("btn3").style.background = "red";
        document.getElementById("btn4").style.background = "black";
        
    }
}