let idade = parseInt(prompt("Insira sua idade"))

while (isNaN(numero)){
    idade = parseFloat(prompt("Insira um valor válido")) //enquanto o usuário não inserir um valor válido ele poderá tentar novamente
}

if (idade >= 18){
    alert("você é maior de idade")
}
if (idade < 18) {
    alert("você é menor de idade")
}