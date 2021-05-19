class Stone{
	constructor(x,y,width,height){
		var options = {
			'restitution' : 1,
			'friction' : 1,
			'density' : 12
		}
		this.x=x;
		this.y=y;
		this.width = width;
		this.height = height;
		this.body = Bodies.rectangle(x, y, width, height, options);
		World.add(world, this.body);

	}
	display()
	{
			var stonepos=this.body.position;	
			var angle = this.body.angle;

			push()
			translate(stonepos.x, stonepos.y);
			rotate(angle);
			rectMode(CENTER)
			rect(0,0,this.width,this.height);
			strokeWeight(4);
			stroke("black");
			fill("gray");
			pop()
	}

}