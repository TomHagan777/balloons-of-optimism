let pills = [];
let numberPills = 8;
function setup() {
    cnv = createCanvas(windowWidth, windowHeight);
    // cnv.parent("sketch-div-02"); //for website work
    resetSketch();
    cnv.mousePressed(resetSketch);
}
function draw() {
    background(255, 200, 200);
    for (let p of pills) {
        p.display();
        p.ascend();
        p.boarder();
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
        this.sizeX = sizeX;
        this.sizeY = sizeY;
        this.sizeX2 = int(random(1000, 1500));
        this.sizeY2 = int(random(1000, 1500));
        this.mediaMatch1 = [int(random(500, 1000)), int(random(500, 1000))];
        this.mediaMatch2 = [int(random(500, 2000)), int(random(500, 2000))];
        this.mediaMatch3 = [int(random(500, 4000)), int(random(500, 4000))];
    }
    display() {
        this.rotateX = this.rotateX += this.rotateR;
        if (windowWidth > 1000) {
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
        if (this.sizeX && this.sizeY >= 1500) {
            this.sizeX = this.sizeX2;
            this.sizeY = this.sizeY2;
        }
        push();
          translate(this.randX, this.randY);
          stroke(0);
          strokeWeight(this.strokeWeight);
          rotate(this.rotateX);
          fill(this.r1, this.r2, this.r3);
          rect(0, 0, this.sizeX, this.sizeY, 1000);
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
}
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
