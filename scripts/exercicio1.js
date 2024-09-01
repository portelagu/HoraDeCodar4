 //1 Crie um programa onde o usuário possa cadastrar estudantes sem limites, e, em seguida, Se o usuário digitar "PARE" o programa deve exibir a quantidade de estudantes cadastrados e a lista com cada um deles. 
 var estudantes = []
 var contagem = true;
 var tabela = document.getElementById("tabela")


 while (contagem == true) {
     var estudante = prompt("Cadastre o estudante digitando o nome: ")
     if (estudante != "PARE") {
         estudantes.push(estudante)
     } else {
         contagem = false;
     }
 }

 estudantes.forEach(
     (estudante) => {
         var linha = document.createElement("tr")
         var celula = document.createElement("td")
         celula.textContent = estudante
         linha.appendChild(celula) // NESTA LINHA O APPEND CHILD FUNCIONA DA SEGUINTE MANEIRA: Está adicionando a celula à linha!!!!
         tabela.appendChild(linha) // AQUI O APPEND CHILD ESTÁ ADICIONANDO A LINHA Á TABELA!!!!!
     }
 )

 document.getElementById("contagem").textContent = `A quantidade de estudantes cadastrados no total é: ${estudantes.length}. Siga uma lista de todos os estudantes em questão: `