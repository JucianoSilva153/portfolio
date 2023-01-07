var antScroll = window.scrollY;

// Verifica se o scroll está sendo usado e desatctiva o menu
window.onscroll = function (){
    var actuScroll = window.scrollY;
    var menu = document.getElementById("Hidden-Menu");

    if(menu.style.display == "block"){
        if(antScroll < actuScroll){
            menu.style.display = "none";
        }
    }
}

function abrirMenu(){
    var menu = document.getElementById("Hidden-Menu");
    
    if(menu.style.display == "block"){
        menu.style.display = "none";
        // console.log("Entrou");
    }else{
        menu.style.display = "block";
        // menu.style.animation = "Abrir 0.5s ease";
    }
}
