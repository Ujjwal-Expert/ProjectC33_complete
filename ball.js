class Ball{
    constructor(x,y,width){
        var opt = {
            restitution:0.5,
            friction:0,
            isStatic:false
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
        imageMode(CENTER);
        image(this.image,0,0,this.width*2,this.width*2);
        pop();
    }
}