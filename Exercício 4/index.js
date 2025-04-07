let valorCompra = parseFloat(prompt("Insira o valor da sua compra"))
let valorDesconto = parseFloat(valorCompra*0.1)
let valorDescontado = parseFloat(valorCompra - valorDesconto)

if (isNaN(valorCompra)){
    alert ("O valor não é um número") //enquanto o usuário não inserir um valor válido ele poderá tentar novamente
}

if (valorCompra >= 100){
    alert (`Você ganhou um desconto de 10% por que sua conta passou de 100 reais, o valor do desconto é ${valorDesconto.toFixed(2)} e o valor final é ${valorDescontado.toFixed(2)}`)
}

if (valorCompra <100) {
    alert ("Hoje não tem desconto");
}
