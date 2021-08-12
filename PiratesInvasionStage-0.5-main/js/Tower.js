class Tower{
   constructor(x,y,w,h){ 
     this.x=x; 
     this.y=y;
      this.width=w;
       this.height=h; 
       var ops= {
          isStatic:true } 
       this.body = Bodies.rectangle(x,y,w,h,ops);
        World.add(world,this.body); 
        this.tower= loadImage("./assets/tower.png") ;
       } display(){
          var pos = this.body.position;
           var angle=this.body.angle;
            push ();
             translate (pos.x,pos.y);
              rotate(angle);
               imageMode(CENTER); 
               image(this.tower , 0 ,0 , this.width , this.height);
                pop ();
               } }
