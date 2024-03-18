let n1 = parseInt(document.getElementById("nota1").value)
let n2 = parseInt(document.getElementById("nota2").value)
let med = 0
let aprovado = med >= 60;
let recuperacao = med == 50 && med >= 59;
let reprovado = med <= 49;

function soma(){

let sum = n1 + n2;
let med = sum/2;

    if(aprovado){
        console.log("Você está aprovado")
    }

    if(recuperacao){
        alert("Você em recuperação")
    }

    if(reprovado){
        alert("Você está reprovado")
    }
}