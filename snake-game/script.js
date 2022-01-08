let canvas = document.getElementById("snake");
let context = canvas.getContext("2d"); //context renderiza o desenho que vai aparecer no canvas
let box = 32; //32px cada quadrado
let snake = [];
snake[0] = {  //tamanho da cobrinha
    x: 8 * box,
    y: 8 * box
}

let direction = "right";
let food = { // cria as comidinhas aleatórias
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box
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

function drawFood() {
    context.fillStyle = "red"
    context.fillRect(food.x, food.y, box, box);
}


document.addEventListener('keydown', update); //evento de escuta

function update (event){ //vai captar os movimentos do teclado
    if (event.keyCode == 65 && direction != "right") direction = "left"; 
    if (event.keyCode == 87 && direction != "down") direction = "up";
    if (event.keyCode == 68 && direction != "left") direction = "right";
    if (event.keyCode == 83 && direction != "up") direction = "down";
}

function iniciarJogo() {
    if (snake[0].x > 15 * box && direction == "right") snake[0].x = 0; //quando bater na parede da box, a cobrinha sai do outro lado.
    if (snake[0].x < 0 && direction == "left") snake[0].x = 16 * box;
    if (snake[0].y > 15 * box && direction == "down") snake [0].y = 0;
    if (snake[0].y < 0 && direction == "up") snake[0].y = 16 * box;

    criarBG();
    criarSnake();
    drawFood();

    let snakeX =  snake[0].x;
    let snakeY = snake[0].y;

    if (direction == "right") snakeX += box; //se a direção da cobra for para a direita, irá acrescentar um quadradinho.
    if (direction == "left") snakeX -= box;
    if (direction == "up") snakeY -= box;
    if (direction == "down") snakeY += box; 

    if (snakeX != food.x || snakeY != food.y) {
        snake.pop(); // retira o ultimo quadrinho do array
    }else {
        food.x = Math.floor(Math.random() * 15 + 1) * box;
        food.y = Math.floor(Math.random() * 15 + 1) * box;
    }

    let newHead = { //vai acrescrentar quadrinho na frente
        x: snakeX,
        y: snakeY
    }

    snake.unshift(newHead);
}


let jogo = setInterval(iniciarJogo, 100);
