class Plinko{
    constructor(x,y,width){
        var opt = {
            restitution:0.5,
            friction:0,
            isStatic:true
        }
        this.body = Bodies.circle(x,y,width,opt);
        World.add(world,this.body);
        this.x = x;
        this.width = width;

        this.image = loadImage("ball.png");

    }
    display(){
        var pos  = this.body.position;
        push();
        translate(pos.x,pos.y);
        ellipseMode(CENTER);
        fill("lightblue");
        strokeWeight(1);
        ellipse(0,0,this.width*2,this.width*2);
        pop();
    }
}