let doDraw = (function () {

    let makePaddle1 = function(y) {
        ctxGame.fillStyle = "white";
        ctxGame.fillRect(60, y, 9, 90);
    }

    let makePaddle2 = function(y) {
        ctxGame.fillStyle = "white";
        ctxGame.fillRect(516, y, 9, 90);
    }
    
    let makeBall = function(x, y) {
        ctxGame.fillStyle = "white";
        ctxGame.fillRect(x, y, 18, 18);
    }

   let wallCollision = function() {
       ballSpeedY *= -1;
   }

   let goal = function(x) {
        if (x === 1) {
            score1 += 1;
        } else {
            score2 += 1;
        }
   }

   let restartValues = function() {
    paddle1Pos = 243;
    paddle2Pos = 243;
    ballX = 280;
    ballY = 272;
    ballSpeedX = 4;
    ballSpeedY = (Math.random() - Math.random()) * 6;
   }

   let paddleCollision = function(posX, posY) {
       if (!(ballX > (posX + 9) || (ballX + 18) < posX ||
        ballY > (posY + 90) || (ballY + 18) < posY)) {
            if (collided != posX) {
                if (ballSpeedX < 0) {
                    ballSpeedX -= .1;
                } else {  
                    ballSpeedX += .1;
                }
                ballSpeedY = ((Math.random() - Math.random()) * 6)
                ballSpeedX *= -1;
            }
            collided = posX;
        } else if (collided === posX) {
            collided = 0;
        }
   }

    let paint = function() {
        ctxGame.fillStyle = "black";
        ctxGame.fillRect(0, 0, 576, 576);

        ctxGame.fillStyle = "white";
        ctxGame.font = "28px Arial";
        ctxGame.fillText(score1, 20, 28);
        ctxGame.fillText(score2, 548, 28);

        makePaddle1(paddle1Pos);
        makePaddle2(paddle2Pos);
        makeBall(ballX += ballSpeedX, ballY += ballSpeedY);

        //Paddle Movement
       if (player === 1) {
           if (keyState[38] || keyState[87]) {
               paddle1Pos -= 9;
           }
           if (keyState[40] || keyState[83]) {
               paddle1Pos += 9;
           }
           if (paddle2Pos + 44 > ballY + 14) {
               paddle2Pos -= 6;
           }
           if (paddle2Pos + 44 < ballY + 14) {
            paddle2Pos += 6;
           }
       } else if (player === 2) {
           if (keyState[38]) {
               paddle2Pos -= 9;
           }
           if (keyState[87]) {
               paddle1Pos -= 9;
           }
           if (keyState[40]) {
               paddle2Pos += 9;
           }
           if (keyState[83]) {
               paddle1Pos += 9;
           }
       }
       if (paddle1Pos < 0) {
           paddle1Pos = 0;
       }
       if (paddle2Pos < 0) {
           paddle2Pos = 0;
       }
       if (paddle1Pos > 486) {
        paddle1Pos = 486;
       }
       if (paddle2Pos > 486) {
        paddle2Pos = 486;
       }
       if (ballY < 0) {
        ballY = 0;
        wallCollision();
       }
       if (ballY > 558) {
        ballY = 558;
        wallCollision();
       }
       if (ballX < 0) {
           goal(2);
           restartValues();
       }
       if (ballX > 558) {
           goal(1);
           restartValues();
       }
        paddleCollision(60, paddle1Pos);
        paddleCollision(516, paddle2Pos);
    }



    let init = function() {
        restartValues();
        gameLoop = setInterval(paint, 1000/60);
    }

return {
    init: init
    }
}());