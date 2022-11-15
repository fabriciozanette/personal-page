
const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;

while (contador<listaDeTeclas.length) {
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];

    console.log(instrumento);

    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function () {
        tocaSom(idAudio)
    }
    contador++
}

function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play()
}


/*
const listaDeTeclas = document.querySelectorAll('.tecla')

for ( i=0 ; i < listaDeTeclas.length; i++ ){
    
    listaDeTeclas[i].onclick = function () {        
        // const tecla         = listaDeTeclas[i]
        // const instrumento   = tecla.classList[1]
        
        console.log(listaDeTeclas[1].classList[1])
        tocarSom(tecla.instrumento)
        //tocarSom(this.textContent.toLowerCase());
    }
    
}


function tocarSom(idElementoAudio){
    //const somEscolhido  = document.querySelector(idElementoAudio).textContent;
    //const elementoMusica = ('#som_tecla_'+ somEscolhido.toLowerCase());
//    const elementoAudio = document.querySelector(idElementoAudio);
//    elementoAudio.play(); 
    //let idCompleto = '#som_tecla_'+ idElementoAudio
    let idCompleto = '#som_' + idElementoAudio
    alert(idCompleto)
    document.querySelector(idCompleto).play()
}
*/
