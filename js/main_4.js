

function clique(){
    document.getElementById("ok").innerHTML="<i>Obrigado por clicar</i>";
}

function outraPagina(){
    window.open("https://pt.khanacademy.org/");// abre outra aba
    window.location.href = "https://pt.khanacademy.org/"; //abre na mesma janela
}

function trocar(elemento){
    //document.getElementById("trocartexto").innerHTML = "Você passou mouse";
    elemento.innerHTML = "Obrigado por passar o mouse";
}

function voltar(elemento){
    //document.getElementById("trocartexto").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";

}
function load(){
    alert("Pagina carregada");
}

function funcaoChange(tag){
    console.log(tag.value);
}