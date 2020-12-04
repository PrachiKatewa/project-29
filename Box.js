class Box extends BaseClass{
    constructor(x, y){
      super(x,y,50,50);
     
    }

    display(){

      super.display();
      
      var pos =this.body.position;
    rectMode(CENTER);
    fill("blue");
    rect(pos.x, pos.y, this.width, this.height);
   
    }
  
  }
  