
class Rope {
    constructor(bodyA,pointB){

       var Cons_options={
           bodyA:bodyA,
           pointB:pointB,
           stiffness:1.2,
           length:280
       }

   this.pointB=pointB
        this.sling = Constraint.create(Cons_options);
        World.add(world,this.sling)
    }
   attach(body){
       this.sling.bodyA = body;
   }
    fly(){
        this.sling.bodyA=null;
    }
    display(){
        if(this.sling.bodyA){

        
       var pointA=this.sling.bodyA.position;
       var pointB=this.pointB; 
     strokeWeight(5);
     line (pointB.x,pointB.y,pointA.x,pointA.y);
    }
}
}






























