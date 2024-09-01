//2Crie uma array de planetas que inclua "Terra", "Marte", "Plutão", "Vênus", "Júpiter", "Saturno"  e, em seguida, peça ao usuário para digitar o nome de um planeta. Verifique se o planeta que o usuário informou está na array e informe ao usuário.

var planetas = ["Terra", "Marte", "Plutão", "Vênus", "Júpiter", "Saturno"]

var inputUsuario = prompt("Olá! por favor, Digite o nome de um planeta: ")

let busca = planetas.find((planeta) =>{
    return planeta === inputUsuario
})

if(busca == inputUsuario){
    alert(`O planeta ${busca}Ele está no array!`)
} else {
    alert(`Infelizmente o planeta ${inputUsuario} não está no array. :/`)
}