const input = require("readline-sync")

  console.log("== bom dia!")
  
  valor = 'R$2000'

  nome = "calebe jorge da silva"

  var nome = input.question("digite seu nome completo" + "\n" + " aqui ")

  var data = input.question("Data de Nascimento? Ex: 23/07/1978 \n")
  
    if (data.length !=10 ){
    console.log("data invalida")
    return
} 

 var cpf = input.question("digite seu cpf" + "\n" + "aqui")
    
      if (cpf.length === 11){
    console.log("\n " + nome + "\n" + " Data de nascimento " + data + "\n" + valor + " Depositado ")



}   else if ((nome && data) && valor );{
    console.log(" consulta concluida ")
} 




  
   
 





 
  

















