class Cara {
    constructor(x, y) {

        var options = {
           // 'restitution':0.8,
           // 'friction':1.0,
            'density': 1
        }

        this.image=loadImage("a.png");
        this.body = Bodies.rectangle(x, y, 150,70, options);
        
        World.add(world, this.body);
        
      }

      cima(){
        Matter.Body.applyForce(this.body, {x:100, y: 0}, {x:0, y: -100});
      }

      display(){
        var pos = this.body.position;
        var angle = this.body.angle;
     
        push();
        
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        image(this.image,-90,-60)
        
        pop();
      }
    }