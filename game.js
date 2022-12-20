//Ajustando os limites da tela
var altura = 0
var largura = 0

function ajustaTamanhoPalcoJogo () {

    altura = window.innerHeight
    largura = window.innerWidth

    console.log(largura, altura)

}

ajustaTamanhoPalcoJogo()

//Criando posições randômicas
function posicaoRandomica() {
    //remover mosquito anterior (caso exista)
    if (document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove()
    }
    var posicaoX = Math.floor(Math.random() * largura) - 90
    var posicaoY = Math.floor(Math.random() * altura) - 90

    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    console.log(posicaoX, posicaoY)

    //criar o elemento HTML 
    var mosquito = document.createElement('img')
    mosquito.src = 'imagens/mosquito.png'
    mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'

    document.body.appendChild(mosquito)

}

//modificando o tamanho do mosquito aleatoriamente
function tamanhoAleatorio() {
    var classe = Math.floor(Math.random() * 3)

    switch(classe) {
        case 0:
            return 'mosquito1'
        case 1:
            return 'mosquito2'
        case 2: 
            return 'mosquito3'
    }
}

//modificando a posição do mosquito aleatoriamente
function ladoAleatorio() {
    var classe = Math.floor(Math.random() * 2)

    switch(classe) {
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'
    }

}