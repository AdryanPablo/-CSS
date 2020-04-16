var janela
var ladoEsquerdo
var ladoDireito
var estadoDaJanela

function iniciar () {

    console.log('Página carregada!')

    janela = document.getElementById('janela')
    ladoEsquerdo = document.getElementById('ladoEsquerdo')
    ladoDireito = document.getElementById('ladoDireito')

    estadoDaJanela = 'fechada'

    janela.addEventListener('click', function (event){
        console.log('Clicou!')
        escolherAção()
    })

}

function escolherAção () {

    console.log('Escolhendo ação.')

    if (estadoDaJanela == 'fechada') {

        abrirJanela()

    } else if (estadoDaJanela == 'aberta') {

        fecharJanela()

    }

}

function abrirJanela () {

    console.log('Abrindo janela.')

    ladoEsquerdo.style.transform = 'translate(-50%)'
    ladoDireito.style.transform = 'translate(50%)'

    estadoDaJanela = 'aberta'

}

function fecharJanela () {

    console.log('Fechando janela.')

    ladoEsquerdo.style.transform = 'translate(0%)'
    ladoDireito.style.transform = 'translate(0%)'

    estadoDaJanela = 'fechada'

}

window.addEventListener('load', iniciar)