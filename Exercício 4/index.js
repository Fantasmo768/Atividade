let valorCompra = parseFloat(prompt("Insira o valor da sua compra")) //variável que vai pegar o valor da compra
let valorDesconto = parseFloat(valorCompra*0.1) //variável que define o valor do desconto
let valorDescontado = parseFloat(valorCompra - valorDesconto) //variável que define o valor total

if (isNaN(valorCompra)){ //condição se o valor não for um número
    alert ("O valor não é um número") 
}

if (valorCompra >= 100){ //condição se o número for maior ou igual a 100
    alert (`Você ganhou um desconto de 10% por que sua conta passou de 100 reais, o valor do desconto é ${valorDesconto.toFixed(2)} e o valor final é ${valorDescontado.toFixed(2)}`)
}

if (valorCompra <100) { //condição se o número for menor que 100
    alert ("Hoje não tem desconto");
}
