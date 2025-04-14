let numero = parseInt(prompt("Insira um número")); // Declarar a váriavel do número

if (isNaN(numero)){
    numero = parseFloat(prompt("Insira um valor válido")) //Se o usúario não inserir um número ele poderá tentar mais uma vez
}

if (numero % 2 == 0) { //Condição se o número for par e mostra de resultados
    alert("Seu número é par")
}

if (numero % 2 != 0) { //Condição se o número não for par e mostra de resultados
    alert("Seu número não é par")
}
