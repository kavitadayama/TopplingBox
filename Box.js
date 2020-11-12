class Box{
    constructor(x,y,w,h){

        var option = {
            isStatic: true
        }

        this.width = w;
        this.height = h;
        this.body = Bodies.rectangle(x,y,w,h, option );
       
        World.add(world, this.body);

    }

    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        rect(pos.x, pos.y, this.width, this.height);
    }

}