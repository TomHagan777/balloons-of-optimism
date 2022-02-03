let pills = [];
let numberPills = 10

function setup() {
  cnv = createCanvas(windowWidth, windowHeight);
//  cnv.parent("sketch-div-02");
  
  rectMode(CENTER)
  
  for (let i = 0; i < numberPills; i++){
    let randX = random(-450,windowWidth+450);
    let randY = random(windowHeight/2,windowHeight*2);
    let rotateX = 0;
    let sizeX = 0
    let sizeY = 0
    let myStrokeWeight = 0
    pills[i] = new pill1(randX,randY,rotateX,sizeX,sizeY,myStrokeWeight);
  }
}

function draw() {
  background(255,200,200);
  for (let p of pills){
    p.display();
    p.ascend();
    p.boarder();    
  }
}

class pill1 {
  constructor(randX,randY,rotateX,sizeX,sizeY,myStrokeWeight){
    this.randX = randX;
    this.randY = randY;
    this.r1 = random(0,255);
    this.r2 = random(0,255);
    this.r3 = random(0,255);
    this.rotateX = rotateX;
    this.rotateR = random(-0.002, 0.002)
    this.speed = random(0.5,1);
    
    this.strokeWeight = myStrokeWeight;
      this.strokeWeight1 = 75; //screen size changes
      this.strokeWeight2 = 85;
      this.strokeWeight3 = 100;
    
    this.sizeX = sizeX
    this.sizeY = sizeY
      this.sizeX2 = int(random(1000,1500)); //if area gets too big, use these
      this.sizeY2 = int(random(1000,1500));
        this.mediaMatch1 = [int(random(500,1000)),int(random(500,1000))]; //screen size changes
        this.mediaMatch2 = [int(random(500,2000)),int(random(500,2000))]; 
        this.mediaMatch3 = [int(random(500,4000)),int(random(500,4000))]; 
  }

  display(){    
    this.rotateX = this.rotateX += this.rotateR;  
    
    if (windowWidth > 1000){                     //dynamic media size changes
        this.sizeX = this.mediaMatch3[0];
        this.sizeY = this.mediaMatch3[1];
        this.strokeWeight = this.strokeWeight3;
    } else if (windowWidth > 600){
        this.sizeX = this.mediaMatch2[0];
        this.sizeY = this.mediaMatch2[1];
        this.strokeWeight = this.strokeWeight2;
    } else if(windowWidth > 0) {
        this.sizeX = this.mediaMatch1[0];
        this.sizeY = this.mediaMatch1[1];
        this.strokeWeight = this.strokeWeight1;
    }
    
    if (this.sizeX && this.sizeY >= 1500){   //if total area of shape gets too big
      this.sizeX = this.sizeX2;
      this.sizeY = this.sizeY2;
    }
    
    // console.log('window width: ', windowWidth);
    // console.log("shape area: ", this.sizeX, "x", this.sizeY);
    // console.log("stroke weight: ", this.strokeWeight);
    // console.log("x placement: ", this.randX);
    
    push()
      translate(this.randX,this.randY);
      stroke(0);
      strokeWeight(this.strokeWeight);
      rotate(this.rotateX);
      fill(this.r1,this.r2,this.r3);  
      rect(0, 0, this.sizeX, this.sizeY, 1000);
    pop()    
  }
  
  ascend(){
    this.randY = this.randY - this.speed;
  }
  
  boarder(){
    if (this.randY < -2000) {
      this.randY = windowHeight+1000;
      this.randX = this.randX;
    }
  }
}

function windowResized() { 
    resizeCanvas(windowWidth, windowHeight); 
} 