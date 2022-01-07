let canvas = document.getElementById("snake");
let context = canvas.getContext("2d"); //context renderiza o desenho que vai aparecer no canvas
let box = 32; //32px cada quadrado
let snake = [];
snake[0] = {  //tamanho da cobrinha
    x: 8 * box,
    y: 8 * box
}

let direction = "right";

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

function iniciarJogo() {
    criarBG();
    criarSnake();

    let snakeX =  snake[0].x;
    let snakeY = snake[0].y;

    if (direction == "right") snakeX += box; //se a direção da cobra for para a direita, irá acrescentar um quadradinho.
    if (direction == "left") snakeX -= box;
    if (direction == "up") snakeY -= box;
    if (direction == "down") snakeY += box; 

    snake.pop(); //retira o ultimo quadrinho do array
    
    let newHead = { //vai acrescrentar quadrinho na frente
        x: snakeX,
        y: snakeY
    }

    snake.unshift(newHead);
}


let jogo = setInterval(iniciarJogo, 100);
