


function carregar() {
    var titulo = window.document.querySelector("#msgHora")
    var imagem = window.document.querySelector("#ibagen")
    
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()

    titulo.innerHTML = `Agora são exatamente <strong>${hora}:${minuto}</strong>.`

    if (hora >= 0 && hora <12){
        //Bom dia 
        imagem.src = "imagens/manha1.png"
        document.body.style.backgroundImage = "linear-gradient(to left,#8C895A,#B0D1D9)";
        
    }else if (hora >=12 && hora <= 18){
        //boa tarde
        imagem.src = "imagens/tarde.png"
        document.body.style.backgroundImage =  "linear-gradient(to left,#73624D,#D94711)";
    } else{
        //boa noite
        imagem.src = "imagens/noite.png"
        document.body.style.backgroundImage =  "linear-gradient(to left,#3f1202,#2A5559)";
    }

}