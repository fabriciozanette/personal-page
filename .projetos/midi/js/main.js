
const listaDeTeclas = document.querySelectorAll('.tecla');


for (let contador = 0; contador < listaDeTeclas.length; contador++){
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];

    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function (valor) {
//        console.log(valor)
        tocaSom(idAudio);        
    }

    tecla.onkeydown = function(evento) {
//        console.log(evento)
//        console.log(evento)

        if (teclaTocaSom(evento.code))  {
            tecla.classList.add('ativa');
        } 
    }
    tecla.onkeyup = function(evento) {        
        if (teclaTocaSom(evento.code)) {
            tecla.classList.remove('ativa');
        }
    }
}

//-----------------------------------------------------------------------
// Valida se a tecla precionada deve apresentar evento de ativa/inativa
//-----------------------------------------------------------------------
function teclaTocaSom(teclaAcionada){
    if(teclaAcionada === "Space" || teclaAcionada === "Enter") {
        return true;
    } else{
        return false;
    }
}

function tocaSom(seletorAudio){
    const elemento = document.querySelector(seletorAudio);

    if (elemento != null && elemento.localName == "audio"){
        document.querySelector(seletorAudio).play();
    }else{
        console.log('Elemento Não Encontrado!')
    }
}



/* 
---------------------------------------------------------------
-> Como fazer com while.
---------------------------------------------------------------
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
*/

/* 
---------------------------------------------------------------
-> Feito com a logica do THIS
---------------------------------------------------------------
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
