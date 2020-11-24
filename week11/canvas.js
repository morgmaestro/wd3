const canvas = document.getElementById("Game");
const context = canvas.getContext('2d');

let cPosX = canvas.width/2;
let cPosY = canvas.height/2;
let cVelX = 3.4;
let cVelY = 4.2;
let cRad = 60;

let cRed = document.getElementById("cRed");
let cOrange = document.getElementById("cOrange");
let cYellow = document.getElementById("cYellow");
let cGreen = document.getElementById("cGreen");
let cBlue = document.getElementById("cBlue");
let cIndigo = document.getElementById("cIndigo");
let cViolet = document.getElementById("cViolet");

let clicked = false;

context.fillStyle = "yellow";

function draw(){
    context.clearRect(0, 0, canvas.width, canvas.height);
    drawCircle();
    if(clicked === false){
        moveCircle();
    };
    window.requestAnimationFrame(draw);
}

function drawCircle() {
    context.beginPath();
    
    context.globalAlpha = 0.7;
    context.ellipse(cPosX, cPosY, cRad, cRad, 0, 0, 2*Math.PI);
    context.fill();
}

function moveCircle() {
    if(cPosY+cRad >= canvas.height || cPosY-cRad <= 0){
        cVelY *= -1;
    }
 
    if(cPosX+cRad >= canvas.width || cPosX-cRad <= 0){
        cVelX = cVelX * -1;
    }

    cPosX = cPosX + cVelX;
    cPosY = cPosY + cVelY;
    // every frame we're going to move a little bit.
    // javascript is about 60-70fps (frames per second)
}

draw();

canvas.addEventListener("click", function(event){

    let mouseXp = event.pageX - event.target.offsetLeft;
    let mouseYp = event.pageY - event.target.offsetTop;

    let distX = Math.abs(cPosX - mouseXp);
    let distY = Math.abs(cPosY - mouseYp);

    if(distX < cRad && distY < cRad){
        console.log(clicked);
        counter += 1;
        clicked = !clicked;
    }
});

function drawRed() {
    context.fillStyle = "rgba(255, 0, 0, .7)";
    context.fill();
    window.requestAnimationFrame(drawRed);
}

cRed.addEventListener("click", function(event) {
    drawRed();
});

function drawOrange() {
    context.fillStyle = "rgba(255, 165, 0, .7)";
    context.fill();
    window.requestAnimationFrame(drawOrange);
}

cOrange.addEventListener("click", function(event) {
    drawOrange();
});

function drawYellow() {
    context.fillStyle = "rgba(255, 255, 0, .7)";
    context.fill();
    window.requestAnimationFrame(drawYellow);
}

cYellow.addEventListener("click", function(event) {
    drawYellow();
});

function drawGreen() {
    context.fillStyle = "rgba(0, 128, 0, 0.7)";
    context.fill();
    window.requestAnimationFrame(drawGreen);
}

cGreen.addEventListener("click", function(event) {
    drawGreen();
});

function drawBlue() {
    context.fillStyle = "rgba(0, 0, 255, .7)";
    context.fill();
    window.requestAnimationFrame(drawBlue);
}

cBlue.addEventListener("click", function(event) {
    drawBlue();
});

function drawIndigo() {
    context.fillStyle = "rgba(75, 0, 130, .7)";
    context.fill();
    window.requestAnimationFrame(drawIndigo);
}

cIndigo.addEventListener("click", function(event) {
    drawIndigo();
});

function drawViolet() {
    context.fillStyle = "rgb(238, 130, 238, .7)";
    context.fill();
    window.requestAnimationFrame(drawViolet);
}

cViolet.addEventListener("click", function(event) {
    drawViolet();
});


// offsetX & offsetY give the point of a click