class Paper{
    
    constructor(x,y,radius){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.radius=radius;
        this.body=Matter.Bodies.circle(x,y,radius,options);
       this.image=loadImage("paper.png");
       console.log("paper.y = " +y);
       console.log("this.body.pos.y = " + this.body.position.y);
       console.log("this.body name = " + this.body);
       this.body.position.y = y;
       this.body.position.x = x;
       World.add(world,this.body);
      
    }
   display(){
       var pos =this.body.position;
       imageMode(CENTER);
      strokeWeight(0);
      fill("white");
      console.log("pos.y = " +pos.y)
       
       ellipse(pos.x,177,this.radius);
       image(this.image,pos.x,177,35,35);
   }
}