class Plinko{
    constructor(x,y){
        var options ={
            'isStatic': true,
            'restitution':1
        }
        
        this.body = Bodies.rectangle(x,y,options);
        World.add(world,this.body);
    }
    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        stroke(4);
        fill(255,255,255);
        rectMode(RADIUS);
        rect(0,0);
        pop();
    }
}