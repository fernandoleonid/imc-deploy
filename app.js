'use strict'

const botaoCalcular = document.getElementById('calcular')

function calcularImc (peso, altura) {
    const resultado = peso / (altura * altura)
    return resultado.toFixed(1)
}

function classificarImc (imc) {
    let classificacao = ''
    if (imc < 18.5){
        classificacao = 'abaixo do peso'
    }else if (imc < 25) {
        classificacao = 'peso ideal'
    }else if (imc < 30) {
        classificacao = 'acima do peso'
    }else if (imc < 35) {
        classificacao = 'obesidade grau I'
    }else if (imc < 40) {
        classificacao = 'obesidade grau II'
    }else{
        classificacao = 'obesidade grau III'
    }
    return classificacao
}

function mostrarImc () {
    const resultado = document.getElementById('resultado')
    const peso = document.getElementById('peso')
    const altura = document.getElementById('altura')
    const nome = document.getElementById('nome')

    if (peso.value == '' || altura.value == '' || nome.value == '') {
        alert ('Preencha todos os campos!!!')
        return false
    }

    const indiceImc = calcularImc(peso.value, altura.value)
    const classificacao = classificarImc (indiceImc)

    resultado.value = `${nome.value} seu IMC é ${indiceImc} e sua classificação é ${classificacao}`
}

botaoCalcular.addEventListener('click', mostrarImc)