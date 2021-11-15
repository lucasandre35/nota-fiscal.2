function mostrarnome() {
    var nome = document.getElementById("nome").value;

    document.getElementById("resposta").textContent = " Dale Pirraia " + nome + " Te Chega "
}
var mostrar = document.getElementById("mostrar");
mostrar.addEventListener("click",mostrarnome);
    
