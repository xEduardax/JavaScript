let canvas = document.getElementById("snake");
let context = canvas.getContext("2d"); //context renderiza o desenho que vai aparecer no canvas
let box = 32; //32px cada quadrado
let snake = [];
snake[0] = {  //tamanho da cobrinha
    x: 8 * box,
    y: 8 * box
}

function criarBG() {
    context.fillStyle = "lightgreen";
    context.fillRect (0, 0, 16 * box, 16 * box); //cria o retangulo onde vai acontecer o jogo.
}

function criarSnake() { //vai percorrer o vetor e acrescentar 
    for (i=0; i < snake.length; i++) {
        context.fillStyle = "green";
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}

criarBG();
criarSnake();