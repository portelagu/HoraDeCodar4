/* 3 Vamos criar uma lista de compras. 

Crie uma array de frutas, exiba-a ao usuário e, em seguida, peça ao usuário para digitar o nome de uma das frutas.

Caso a fruta esteja no array, remova-a e exiba a mensagem "Fruta foi retirada da lista". 

Peça novamente para o usuário digitar o nome de uma fruta para ser removida. 

Sempre que o usuário procurar por uma fruta que não está no array exiba a mensagem "Fruta indisponível no nosso mercado". 

Quando o array não possuir mais itens dentro de si, escreva "Lista de compras finalizada". */

var frutas = ["Mamão", "Banana", "Melão", "Limão", "Morango"]
alert(frutas)

while(frutas.length != 0){
    var escolha = prompt("Olá! Por favor, digite o nome de uma fruta: ")

    if (frutas.includes(escolha)){
        var indice = frutas.indexOf(escolha)
        frutas.splice(indice, 1)
    } else {
        alert("Fruta indisponível no nosso mercado.")
    }
}

alert("Lista de compras finalizada.")