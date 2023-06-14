let pills = [];
let numberPills = 8;

let clickMeEnd = 50;
let easyease = 0.03;
let clickMe = -2;

function setup() {
    cnv = createCanvas(windowWidth, windowHeight);
    // cnv.parent("sketch-div-02"); //for website work
    cnv.mousePressed(resetSketch);

    textAlign(CENTER);
    textSize(16);
    textFont('Inter', 'Helvetica', 'Arial', 'sans serif');

    rectMode(CENTER);
    for (let i = 0; i < numberPills; i += 1) {
        let randX = random(-450, windowWidth + 450);
        let randY = random(0, windowHeight * 2);
        let rotateX = 0;
        let sizeX = 0;
        let sizeY = 0;
        let myStrokeWeight = 0;
        pills[i] = new pill1(randX,randY,rotateX,sizeX,sizeY,myStrokeWeight);
    }
}
function draw() {
    background(255, 200, 200);
    for (let p of pills) {
        p.display();
        p.ascend();
        p.boarder();
    }
    if (clickMe === 50){
        clickMe = 50;
    } else if (clickMe >=-20 && frameCount >= 60){
        let targetY = clickMeEnd * 0.5;
        let dy = targetY - clickMe;
        clickMe += dy * easyease;
        push()
            rectMode(CORNER);
            fill(50,150);
            strokeWeight(0)
            stroke(255,255,255,150)
            rect(width-225, -20, 200, clickMe+35, 0);
            fill(255,200);
            noStroke();
            textStyle(BOLD)
            text('click screen to redraw', width-125, clickMe);
        pop()
    }
}
class pill1 {
    constructor(randX, randY, rotateX, sizeX, sizeY, myStrokeWeight) {
        this.randX = randX;
        this.randY = randY;
        this.r1 = random(100, 255);
        this.r2 = random(0, 255);
        this.r3 = random(50, 255);
        this.rotateX = rotateX;
        this.rotateR = random(-0.0005, 0.0005);
        this.speed = random(0.25, 0.50);
        this.strokeWeight = myStrokeWeight;
        this.strokeWeight1 = 75;
        this.strokeWeight2 = 85;
        this.strokeWeight3 = 100;
        this.strokeWeight4 = 200;
        this.sizeX = sizeX;
        this.sizeY = sizeY;
        this.sizeX2 = int(random(1000, 1500));
        this.sizeY2 = int(random(1000, 1500));
        this.mediaMatch1 = [int(random(500, 1000)), int(random(500, 1000))];
        this.mediaMatch2 = [int(random(500, 2000)), int(random(500, 2000))];
        this.mediaMatch3 = [int(random(500, 4000)), int(random(500, 4000))];
        this.mediaMatch4 = [int(random(500, 3000)), int(random(500, 3000))];
    }
    display() {
        this.rotateX = this.rotateX += this.rotateR;
        if (windowWidth > 2000) {
            this.sizeX = this.mediaMatch4[0];
            this.sizeY = this.mediaMatch4[1];
            this.strokeWeight = this.strokeWeight4;
        } else if (windowWidth > 1000) {
            this.sizeX = this.mediaMatch3[0];
            this.sizeY = this.mediaMatch3[1];
            this.strokeWeight = this.strokeWeight3;
        } else if (windowWidth > 600) {
            this.sizeX = this.mediaMatch2[0];
            this.sizeY = this.mediaMatch2[1];
            this.strokeWeight = this.strokeWeight2;
        } else if (windowWidth > 0) {
            this.sizeX = this.mediaMatch1[0];
            this.sizeY = this.mediaMatch1[1];
            this.strokeWeight = this.strokeWeight1;
        }
        
        if (windowWidth < 2000 && this.sizeX && this.sizeY >= 1500) {
            this.sizeX = this.sizeX2;
            this.sizeY = this.sizeY2;
        }

        push();
          translate(this.randX, this.randY);
          stroke(0);
          strokeWeight(this.strokeWeight);
          rotate(this.rotateX);
          fill(this.r1, this.r2, this.r3);
          rect(0, 0, this.sizeX, this.sizeY, 100000);
        pop();
    }
    ascend() {
        this.randY = this.randY - this.speed;
    }
    boarder() {
        if (this.randY < -2000) {
            this.randY = windowHeight + 1000;
            this.randX = this.randX;
        }
    }
}
function resetSketch() {
    rectMode(CENTER);
    for (let i = 0; i < numberPills; i += 1) {
        let randX = random(-450, windowWidth + 450);
        let randY = random(0, windowHeight * 2);
        let rotateX = 0;
        let sizeX = 0;
        let sizeY = 0;
        let myStrokeWeight = 0;
        pills[i] = new pill1(randX,randY,rotateX,sizeX,sizeY,myStrokeWeight);
    }
    clickMe = -100;
}
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
