let idade = parseInt(prompt("Insira sua idade")); //Declarar  a váriavel da idade

if (isNaN(idade)){
    idade = parseFloat(prompt("Insira um valor válido")) //Se o usúario não inserir um número ele poderá tentar mais uma vez
}
if (idade >= 18){ //Condição maior de idade e mostra de resultados
    alert("você é maior de idade");
}
if (idade < 18) { //Condição menor de idade e mostra de resultados
    alert("você é menor de idade");
}
