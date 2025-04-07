let numero = parseInt(prompt("Insira um número")); // Declarar a váriavel do número

while (isNaN(numero)){
    numero = parseFloat(prompt("Insira um valor válido")) //enquanto o usuário não inserir um valor válido ele poderá tentar novamente
}

if (numero % 2 == 0) { //Condição se o número não for par e mostra de resultados
    alert("Seu número é par")
}

if (numero % 2 != 0) { //Condição se o número não for par e mostra de resultados
    alert("Seu número não é par")
}