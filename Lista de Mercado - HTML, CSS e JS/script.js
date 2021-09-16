
function adicionarItem(){ 
var input = document.getElementById("itensAdicionar");
var novoItem = input.value;

if(novoItem.trim() == ""){
    window.alert("Campo vazio. Por favor, insira algo");
    return;
}
 
criarOption(novoItem);

document.getElementById("itensAdicionar").value = null; 
}

function criarOption(novoItem){
    var novoOption = document.createElement('option');
    novoOption.innerText= novoItem;
    document.querySelector('#listagem').appendChild(novoOption);
}


function salvarLista(){
    var options = document.querySelectorAll("option");
    var itensLista = [];

for (var option of options){
    itensLista.push(option.innerText);
}
localStorage.setItem("Local", JSON.stringify(itensLista));
}


function carregarLista(){
    var memoria = localStorage.getItem("Local");

    if(memoria == '[]'){
        window.alert("Não há itens salvos!");
        return; 
    }

    memoria = JSON.parse(memoria);

    for( var novoItem of memoria){
        criarOption(novoItem);
    }

}
