function Opcoes(accao){
    if(accao == "mostrar"){
        document.getElementById("ops").style.display = "block";
        document.getElementById("ops").style.animation = "Mostrar 0.8s ease-in-out";
    }else if(accao == "ocultar"){
        document.getElementById("ops").style.display = "none";
    }
}