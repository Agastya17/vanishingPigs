class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");

    this.visible = 255;
  }
  display(){
    console.log(this.body.speed);
    if(this.body.speed < 3){
      super.display();
    }
    else{
      //do not display the pigs
      //invisible? destroy?
      World.remove(world, this.body);
      push();
      this.visible = this.visible - 5;
      tint(255, this.visible);
      image(this.image, this.body.position.x, this.body.position.y, 50, 50);
      pop();
    }
  }

};
/*
tint - transparent layer over any other colour

score = score + 1 --> incrementation
score = score - 1 --> decrementation

*/