/*var vazio = {};
vazio.soQueNao = 1000;
console.log(vazio.soQueNao);

var artigo = {"titulo": "Introdução a Javascript", "5": 22};
console.log(artigo["5"]);
artigo["5"] = 20;
console.log(artigo[2 + 3]);
delete artigo["titulo"];
console.log(artigo)

var nomePropriedade = "length";
var text = "alguma coisa";
console.log(text[nomePropriedade]);

*/

/*Inicio da Parte dois do Curso de JavaScript*/

function soma(n1,n2){
    return n1 + n2;
}

function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome);
}

alert(soma(5,10));

let mudar = prompt("Digite uma frase");
alert(setReplace(mudar,"Japão","Brasil"));

function validaIdade(idade){
    var validar = true;
    if (idade >= 18){
        validar = true;
    }else{
        validar = false;
    }
    return validar;
}
var idade = prompt("Qual sua idade? ")
alert(validaIdade(idades));