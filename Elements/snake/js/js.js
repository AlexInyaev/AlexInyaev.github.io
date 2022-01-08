
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let buttonStart = document.querySelector('.s1');

let widthCnv = 30,
    heightCnv = 30,
    box1 = 20,
    count = 0,
    color1 = '#00f000',
    color2 = '#008000',
    color3 = '#FFFF80',
    color4 = '#ff0000',
    cheet = false;
// ================================= геро  тест ======================

document.querySelector('.count1').innerHTML = instanceOfDeviceOrientationEvent.alpha;

// ==============================================================================================

let p1i = 1;
function pause() {
    p1i++;
    while (p1i % 2 == 0) {
        continue;
    }
}
// document.querySelector('.p1').onclick = pause;

// =====================================================================================================

function sizeChange(e) {
    console.log(e.clientX)

}
canvas.onmousedown = sizeChange;

// ======================================================================================================================= changColor


function changColor() {
    color1 = document.querySelector('#color1').value;
    color2 = document.querySelector('#color2').value;
    color3 = document.querySelector('#color3').value;
    color4 = document.querySelector('#color4').value;

}

document.querySelector('.b1').onclick = changColor;

// ==============================================================================================================

function changSizeFild() {
    widthCnv = document.querySelector('#widthCanva').value;
    heightCnv = document.querySelector('#heightCanva').value;
    canvas.setAttribute('width', (widthCnv * 20));
    canvas.setAttribute('height', (heightCnv * 20));
    ctx.clearRect(0, 0, '610', '610');

    // 
    cheet = document.querySelector('#checkbox').checked;
    // 
}

document.querySelector('.changSizeFild').onclick = changSizeFild;

// ==========================================   для    отрисовка препядствия
const stoneImg = new Image(box1, box1);
stoneImg.src = 'img/bronze.png';

let stone = [];

let st = 0;
let itrSt = 0;



// =======================================================================================================================startGame
// ======================================================================================================================= drawFild
function startGame() {
    ctx.clearRect(0, 0, '610', '610');
    function drawFild(ctx, color1, color2, color3, color4,
        widthCnv, heightCnv, box1 = 20, box2 = 18, box3 = 12, box4 = 10, box5 = 7) {

        // function draw(контекст, цвет обводки, цвет внешнего куба, цвет линии, цвет центра, ширина поля(конвы), высота поля (конвы)) 

        let x1 = 0,
            x2 = 1,
            x3 = 4,
            x4 = 5,
            x5 = 7,
            y1 = 0,
            y2 = 1,
            y3 = 4,
            y4 = 5,
            y5 = 7;

        for (let i = 0; i < heightCnv; i++) {

            for (let j = 0; j < widthCnv; j++) {
                ctx.fillStyle = color1;
                ctx.fillRect(x1, y1, box1, box1);
                ctx.fillStyle = color2;
                ctx.fillRect(x2, y2, box2, box2);
                ctx.clearRect(x3, y3, box3, box3);
                ctx.strokeStyle = color3;
                ctx.strokeRect(x4, y4, box4, box4);
                ctx.fillStyle = color4;
                ctx.fillRect(x5, y5, box5, box5);

                x1 += box1;
                x2 += box1;
                x3 += box1;
                x4 += box1;
                x5 += box1;
            }
            x1 = 0;
            x2 = 1;
            x3 = 4;
            x4 = 5;
            x5 = 7;

            y1 += box1;
            y2 += box1;
            y3 += box1;
            y4 += box1;
            y5 += box1;



        }

    }

    // ========================================================================================
    const foodImg = new Image(box1, box1);
    foodImg.src = 'img/apple.png';

    let snake = [];

    snake[0] = {                              //стар. коорд. головы
        x: Math.floor(widthCnv / 2) * box1,
        y: Math.floor(heightCnv / 2) * box1
    }

    let food = {                              //коорд. еды
        x: Math.floor(Math.random() * widthCnv) * box1,
        y: Math.floor(Math.random() * heightCnv) * box1
    }
    // ======================================================

    document.addEventListener("keydown", direction); //обработчик события при нажатии кнопки вызывает футкцию direction

    // ========================
    // document.querySelector('.toTop').onclick = () => dir = 'up';

    // ==========================

    let dir;
    document.querySelector('.toTop').onclick = () => dir = 'up';
    document.querySelector('.toBottom').onclick = () => dir = 'down';
    document.querySelector('.toLeft').onclick = () => dir = 'left';
    document.querySelector('.toRight').onclick = () => dir = 'right';
    // =========================================================================== direction

    function direction(event) {

        if (event.keyCode == 65 && dir != 'right') {

            dir = 'left';
            // console.log('left');

        } else if (event.keyCode == 87 && dir != 'down') {

            dir = 'up';
            // console.log('up');

        } else if (event.keyCode == 68 && dir != 'left') {

            dir = 'right';
            // console.log('right');

        } else if (event.keyCode == 83 && dir != 'up') {

            dir = 'down';
            // console.log('down');

        }
    }
    // ============================================================================ eatTail

    function eatTail(arr, head) {
        if (arr.length > 3) {
            for (let i = 0; i < arr.length; i++) {
                if (arr[i].x == head.x && arr[i].y == head.y) {
                    clearInterval(game);
                    buttonStart.removeAttribute('disabled');
                    count = 0;
                    stone.length = 0;
                }
            }
        }
    }
    // ============================================================================ eatStone

    function eatStone(arr, head) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].x == head.x && arr[i].y == head.y) {
                clearInterval(game);
                buttonStart.removeAttribute('disabled');
                count = 0;
                arr.length = 0;
            }
        }

    }

    // ============================================================================= drawGame

    function drawGame() {


        document.querySelector('.count').textContent = "Счет :" + ' ' + count;

        drawFild(ctx, color1, color2, color3, color4, widthCnv, heightCnv);                       // сначала отрисовываем поле тагже затераем след


        ctx.drawImage(foodImg, food.x, food.y, box1, box1);   // отрисовка еды
        // ===============================================================================

        if (st < count) {

            stone.push({
                x: Math.floor(Math.random() * widthCnv) * box1,
                y: Math.floor(Math.random() * heightCnv) * box1
            })



        }
        for (let i = 0; i < stone.length; i++) {
            ctx.drawImage(stoneImg, stone[i].x, stone[i].y, box1, box1); // отрисовка препядствия
        }
        st = count;

        // ==================================================================================================

        let snakeX = snake[0].x;
        let snakeY = snake[0].y;


        if (dir == 'left') snakeX -= box1;
        if (dir == 'right') snakeX += box1;
        if (dir == 'up') snakeY -= box1;
        if (dir == 'down') snakeY += box1;



        let newHead = {
            x: snakeX,
            y: snakeY
        };

        if (!cheet) {
            if (snakeX < 0 || snakeX > box1 * widthCnv - box1 || snakeY < 0 || snakeY > box1 * heightCnv - box1) {
                clearInterval(game);
                buttonStart.removeAttribute('disabled');
                count = 0;
                stone.length = 0;
            }

            eatTail(snake, newHead);
            eatStone(stone, newHead);
        }
        let ts = '';

        let repeatCont = false;




        if (snakeX == food.x && snakeY == food.y) {  // еда
            count++;

            do {

                repeatCont = false;

                food = {
                    x: Math.floor(Math.random() * widthCnv) * box1,   // отрисовка еды
                    y: Math.floor(Math.random() * heightCnv) * box1
                }



                if (count > 1) {
                    for (let i = 0; i < stone.length; i++) {

                        if (food.x == stone[i].x && food.y == stone[i].y) {
                            ts = food.x + '=' + stone[i].x + '/' + food.y + '=' + stone[i].y;
                            // alert(ts);

                            repeatCont = true;
                        }
                    }
                }


            } while (repeatCont);


        } else {
            snake.pop();
        }



        snake.unshift(newHead);

        for (let i = 0; i < snake.length; i++) {

            ctx.fillStyle = i == 0 ? 'blue' : 'red';
            ctx.fillRect(snake[i].x, snake[i].y, box1, box1)

        }


    }

    var game = setInterval(drawGame, 200);
    buttonStart.setAttribute('disabled', 'true');



}


document.querySelector('.s1').onclick = startGame;



