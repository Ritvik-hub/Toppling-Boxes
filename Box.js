class Box{
    constructor (x,y,width,height){
        this.width=width;
        this.height=height;
    var Option={
        restituion:1.0
    }
    this.body=Bodies.rectangle(x,y,width,height,Option);
    World.add(world,this.body);

    }
    display (){
        fill("white");
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();

    }


}