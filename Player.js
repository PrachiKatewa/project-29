class Player extends BaseClass {
    constructor(x,y){
      super(x,y,50,50);
      this.image = loadImage("polygon.png");
    }
  
    display() {
      //this.body.position.x = mouseX;
      //this.body.position.y = mouseY;
      imageMode(CENTER);
      image(this.image,this.body.position.x,this.body.position.y,50,50)

      super.display();
    }
  }

 