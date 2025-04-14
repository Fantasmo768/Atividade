let numero = parseFloat(prompt("Insira um número")) // Declarar a váriavel

if (isNaN(numero)){
    numero = parseFloat(prompt("Insira um valor válido")) //Se o usúario não inserir um número ele poderá tentar mais uma vez
}
if (numero > 0) { //Condição com maior que zero e mostra de resultados
    alert("O número é positivo")
}
if (numero == 0) { //Condição se for igual a zero e mostra de resultados
    alert("O número é neutro")
}
if (numero < 0) { //Condição se for menor que zero e mostra de resultados
    alert("O número não é positivo")
}
