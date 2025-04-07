let numero = parseInt(prompt("Insira um número")); // Declarar a váriavel do número

while (isNaN(idade)){ //enquanto o usuário não inserir um valor válido ele poderá tentar novamente
    idade = parseFloat(prompt("Insira um valor válido")); 
}

if (numero % 2 == 0) { //Condição se o número não for par e mostra de resultados
    alert("Seu número é par")
}

if (número % 2 != 0) { //Condição se o número não for par e mostra de resultados
    alert("Seu número não é par")
}