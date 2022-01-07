let canvas = document.getElementById("snake");
let context = canvas.getContext("2d"); //context renderiza o desenho que vai aparecer no canvas
let box = 32; //32px cada quadrado

function criarBG() {
    context.fillStyle = "lightgreen";
    context.fillRect (0, 0, 16 * box, 16 * box); //cria o retangulo onde vai acontecer o jogo.
}

criarBG();