
var contador = 0;

function Seguinte(){
    if(contador == 0){
        document.getElementById("feedback").innerHTML = "Estou muito satisfeito, principalmente com o tempo de entrega";
        document.getElementById("Nome").innerHTML = "Juciano Silva"
        contador++;
    }else if(contador == 1){
        document.getElementById("feedback").innerHTML = "Estou muito satisfeita, principalmente com a qualidade da comida.";
        document.getElementById("Nome").innerHTML = "António José"
        contador++;
    }else if(contador == 2){
        document.getElementById("feedback").innerHTML = "Estou muito satisfeito, principalmente com o serviço de boa qualidade";
        document.getElementById("Nome").innerHTML = "José Baba"
        contador = 0;
    }
}