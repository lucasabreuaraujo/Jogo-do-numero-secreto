function chuteValido(chute){
    const numero = +chute

    if(numeroInvalido(numero)){
        elementoChute.innerHTML+='<div>Valor inválido</div>'
        return
    }
     if(menorOuMaiorQuePermitido(numero)){
        elementoChute.innerHTML+=`<div>Valor inválido: Escolha um número entre ${menorValor} e ${maiorValor}</div>`
        return

    }
    if(numero === numeroSecreto){
        document.body.innerHTML = ` <h2>Parabéns, você acertou! </h2>
        <h3>O número secreto era ${numeroSecreto}</h3>

        <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
        `
    }else if (numero > numeroSecreto){
        elementoChute.innerHTML+= `<div>O número secreto é menor <i class="fa-solid fa-arrow-down"></i></div>`
    }else {
        elementoChute.innerHTML+= `<div>O número secreto é maior <i class="fa-solid fa-arrow-up"></i></div>`
    }
}

function numeroInvalido(numero) {
    return Number.isNaN(numero)
}

function menorOuMaiorQuePermitido(numero){
    return numero < menorValor || numero > maiorValor
}

document.body.addEventListener('click', e => {
    if(e.target.id == 'jogar-novamente'){
        window.location.reload()
    }
})
