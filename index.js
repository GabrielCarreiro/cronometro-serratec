
var cronometro = (() => {

    document.getElementById('temporizador');


    // Declaração das variaveis, segundo, minuto, hora, cronometro.
    var hora = 0;
    var minuto = 0;
    var segundo = 0;
    var cronometro;


    // Iniciar o relogio do cronometro com a função setInterval
    function iniciar() {
        cronometro = setInterval(time, 1000);
        document.body.removeEventListener('click', iniciar);
        // document.getElementById('btn-iniciar').disabled = true;
    }

    // Função para pausar o relogio do cronometro
    function parar() {
        clearInterval(cronometro) 
        // document.getElementById('btn-iniciar').disabled = false;
    }

    // Função para zerar o cronometro
    function zerar() {
        clearInterval(cronometro)
        segundo = 0;
        minuto = 0;
        hora = 0;
        // document.getElementById('btn-iniciar').disabled = false;
        atualizar();
    }

    // Função para incrementar o segundo a cada segundo, minuto a cada 59 segundos
    function time() {
        segundo++

        if (segundo == 60) {
            segundo = 0;
            minuto++
        } else if (minuto == 60) {
            minuto = 0;
            hora++
        }
        atualizar();
    }

    // Função para atualizar o cronometro na tela do usuario
    function atualizar() {
        temporizador.textContent = retornarTempo();
    }

    //Função para formatar as variaveis em hh:mm:ss, utilizando operador ternario.
    function retornarTempo() {
        var segundos = (segundo < 10) ? "0" + segundo : segundo;
        var minutos = (minuto < 10) ? "0" + minuto : minuto;
        var horas = (hora < 10) ? "0" + hora : hora;

        return `${horas}:${minutos}:${segundos}`
    }

    // var btn = document.getElementById('btn-iniciar');
   
    document.body.addEventListener('click', iniciar);

    return {
        iniciar,
        zerar,
        parar
    }


})()


