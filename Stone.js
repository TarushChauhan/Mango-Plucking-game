class Stone{
    constructor(x, y, width, height){
        var options = {
            ' isStatic':false,
            'restitution':0,
            'friction':1,
            'density':1.2
        }
    }
        
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = 20
        this.height = 20;
        this.image = loadImage("stone.png");
        World.add(world, this.body);

        display()   {      
            imageMode(CENTER);
            image(this.image, 400, 350, this.width, this.height);
        }
        



    }
