var cont = 0;

function trocar(){

    if(cont == 0){
        document.getElementById("img").style.backgroundImage = "url('./img/AnsuFati02.png')";
        cont++;
    }else if(cont == 1){
        document.getElementById("img").style.backgroundImage = "url('./img/DeJong02.png')";
        cont++;
    }else if(cont == 2){
        document.getElementById("img").style.backgroundImage = "url('./img/Auba02.png')";
        cont++;
    }else if(cont == 3){
        document.getElementById("img").style.backgroundImage = "url('./img/Depay02.png')";
        cont++;
    }else if(cont == 4){
        document.getElementById("img").style.backgroundImage = "url('./img/Alba03.png')";
        cont++;
    }else if(cont == 5){
        document.getElementById("img").style.backgroundImage = "url('./img/AnsuFati03.png')";
        cont++;
    }else if(cont == 6){
        document.getElementById("img").style.backgroundImage = "url('./img/Auba03.png')";
        cont++;
    }else if(cont == 7){
        document.getElementById("img").style.backgroundImage = "url('./img/Busquets02.png')";
        cont++;
    }else if(cont == 8){
        document.getElementById("img").style.backgroundImage = "url('./img/Depay03.png')";
        cont++;
    }else if(cont == 9){
        document.getElementById("img").style.backgroundImage = "url('./img/Dest02.png')";
        cont++;
    }else if(cont == 10){
        document.getElementById("img").style.backgroundImage = "url('./img/Pedri02.png')";
        cont = 0;
    }
}