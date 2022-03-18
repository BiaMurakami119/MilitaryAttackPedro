class Caça {
    constructor(x, y) {
        var options = {
          isStatic:true
        }
        this.image=loadImage("c.png");
        this.body = Bodies.rectangle(x, y, 150,70, options);
     
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        var angle = this.body.angle;
     
        push();
        
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        image(this.image,-350,-150)
        
        pop();
      }
    }