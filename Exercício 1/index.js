let numero = parseFloat(prompt("Insira um número")) // Declarar a váriavel

while (isNaN(numero)){
    numero = parseFloat(prompt("Insira um valor válido")) //enquanto o usuário não inserir um valor válido ele poderá tentar novamente
}
if (numero > 0) { //Condição com maior que zero
    alert("O número é positivo")
}
if (numero == 0) { //Condição se for igual a zero
    alert("O número é neutro")
}
if (numero < 0) { //Condição se for menor que zero
    alert("O número não é positivo")
}