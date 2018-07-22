//Title + Player Select
ctxTitle.fillStyle = "white";
ctxTitle.font = "80px Arial";
ctxTitle.textAlign = "center";
ctxTitle.fillText("PONG", 288, 100);
ctxTitle.font = "50px Arial";
ctxTitle.fillText("1 PLAYER", 288, 400);
ctxTitle.fillText("2 PLAYER", 288, 470);

//Paddles, Ball, Select
ctxTitle.fillStyle = "white";
ctxTitle.rect(60, 160, 9, 90);
ctxTitle.rect(516, 240, 9, 90);
ctxTitle.rect(316, 240, 18, 18);
ctxTitle.rect(135, 366, 30, 30);
ctxTitle.fill();
