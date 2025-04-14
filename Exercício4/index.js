let valorCompra = parseFloat(prompt("Insira o valor da sua compra")) //variável que vai pegar o valor da compra


if (isNaN(valorCompra)){
    valorCompra = parseFloat(prompt("Insira um valor válido")) //enquanto o usuário não inserir um valor válido ele poderá tentar novamente
}

let valorDesconto = parseFloat(valorCompra*0.1) //variável que define o valor do desconto
let valorDescontado = parseFloat(valorCompra - valorDesconto) //variável que define o valor total

if (valorCompra >= 100){ //condição se o número for maior ou igual a 100
    alert (`Você ganhou um desconto de 10% por que sua compra passou de 100 reais, o valor do desconto é ${valorDesconto.toFixed(2)} e o valor final é ${valorDescontado.toFixed(2)}`)
}

if (valorCompra <100) { //condição se o número for menor que 100
    alert ("Hoje não tem desconto");
}
