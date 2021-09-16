function insert(num) {
    document.getElementById('Resultado').innerHTML += num;
}

function clean() {
    document.getElementById('Resultado').innerHTML = "";
}

function back() {
    var resultado = document.getElementById('Resultado').innerHTML;
    document.getElementById('Resultado').innerHTML = resultado.substring(0, resultado.length -1);
}

function calcular() {
    var resultado = document.getElementById('Resultado').innerHTML;
    if(resultado.length > 1 && resultado.length < 17) {
        document.getElementById('Resultado').innerHTML = eval(resultado);
    }
    else if (resultado.length < 1){
       var erro = document.getElementById('Resultado');
        erro.innerText = "Nada a Calcular";
    }
    else {
        var aumenta = document.getElementById('Resultado');
        var alinha = document.getElementsByTagName('table')[0];

        document.getElementById('Resultado').innerHTML = eval(resultado);
        aumenta.style.width = "500px";
        alinha.style.marginLeft = "150px";

        document.getElementsByTagName('button')[0].onclick = function volta() {
            var aumentar = document.getElementById('Resultado');
            var alinhar = document.getElementsByTagName('table')[0];
    
            document.getElementById('Resultado').innerHTML = "";
            aumentar.style.width = "215px";
            alinhar.style.marginLeft = "0px";
        }
    }
}

 function merito() {
    var facil = document.getElementById('animarp');
    var medio = document.getElementById('divertidop');
    var dificil = document.getElementById('animar');
    var dificil2 = document.getElementById('divertido');


    facil.onclick?
    window.alert("Parabens, voce conseguiu!!!Estamos apenas começando continue"):""
    
    medio.onclick? 
    window.alert("Uau, voce conseguiu um nivel dificil, parabens, avance mais um nivel"):""
    
    dificil.onclick?
    window.alert("Uau, voce conseguiu o segundo mais dificl, parabens, va para o ultimo nivel"):""
    
    dificil2.onclick?
    window.alert("Uau, voce conseguiu o mais dificil, parabens"):""


}

