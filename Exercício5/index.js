let numero = parseInt(prompt("Insira um número")); // Declarar a váriavel do número

if (isNaN(numero)){
    numero = parseFloat(prompt("Insira um valor válido")) //Se o usúario não inserir um número ele poderá tentar mais uma vez
}
if (numero % 5 == 0) { //Condição se o número for múltiplo de 5 e mostra de resultados
    alert("Seu número é múltiplo de 5")
}

if (numero % 5 != 0) { //Condição se o número não for múltiplo de 5 e mostra de resultados
    alert("Seu número não é múltiplo de 5")
}
