class Box {
    constructor(x, y, width, height, color) {
      var options = {
          'isStatic':false,
          'restitution':0.5,
          'friction':0,
          'density':1.5
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.color = color;
      World.add(world, this.body);
      this.visibility=400;
    }
    display(){
      
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      this.visibility=this.visibility-5;
      tint(400,this.visibility);
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      angleMode(RADIANS);
      fill(this.color);
      strokeWeight(2);
      rect(0, 0, this.width, this.height);
      pop();
    }
  }