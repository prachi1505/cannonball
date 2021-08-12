class Cannon{
  
  constructor(x,y,w,h,angle){ 
     
  this.x=x; 
  this.y=y;
  this.width=w;
  this.height=h; 
  this.angle=angle
       
  }
        
  display(){
    if(keyIsDown(RIGHT_ARROW)&&this.angle<0.45){
    this.angle=this.angle+0.02
    }
    if(keyIsDown(LEFT_ARROW)&&this.angle>-1.55){
      this.angle=this.angle-0.02
      }
  fill("grey")
  push ();
  translate (this.x,this.y) 
  rotate (this.angle)      
  rect (-15,-25,this.width,this.height)
  pop ()
  arc (this.x-30,this.y+80,130,180,PI,TWO_PI);
  noFill();


  } 
  }