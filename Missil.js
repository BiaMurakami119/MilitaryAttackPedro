class Missil{
    constructor() {
        var y = random(50, windowHeight-50)
        var options = {
        isStatic: true
        };
        this.body = Bodies.rectangle(1100, y, 200, 100, options);
        this.image = loadImage("b.png");
    
        //this.speed = 3;
        World.add(world, this.body);
        this.pos = this.body.position;
    }

    display(){
       
        push();
        translate(this.pos.x, this.pos.y);
        imageMode(CENTER);
        image(this.image, 0, 0, 200, 100);
        pop();
        this.pos.x -= 10;
    }
}