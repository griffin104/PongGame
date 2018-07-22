function menu(event) {
    key = event.key;
    switch (key) {
        case "ArrowDown":
        case "s":
        player = 2;
        ctxTitle.beginPath();
        ctxTitle.fillStyle = "black";
        ctxTitle.rect(135, 366, 30, 30);
        ctxTitle.fill();
        ctxTitle.beginPath();
        ctxTitle.fillStyle = "white";
        ctxTitle.rect(135, 436, 30, 30);
        ctxTitle.fill();
        break;

        case "ArrowUp":
        case "w":
        player = 1;
        ctxTitle.beginPath();
        ctxTitle.fillStyle = "white";
        ctxTitle.rect(135, 366, 30, 30);
        ctxTitle.fill();
        ctxTitle.beginPath();
        ctxTitle.fillStyle = "black";
        ctxTitle.rect(135, 436, 30, 30);
        ctxTitle.fill();
        break;

        case " ":
        titleScreen.style.display = "none";
        game.style.display = "block";
        document.removeEventListener("keydown", menu);
        doDraw.init();
        break;
    }
}

function gameControl(event) {
    keyState[event.keyCode || event.which] = true;
}

function gameControl2(event) {
    keyState[event.keyCode || event.which] = false;
}

document.addEventListener("keydown", menu);
document.addEventListener("keydown", gameControl);
document.addEventListener("keyup", gameControl2);
    