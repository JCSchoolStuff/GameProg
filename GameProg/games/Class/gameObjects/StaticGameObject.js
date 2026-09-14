class StaticGameObject extends GameObject{
    constructor(){
        super()
        this.addComponent(new Polygon(), {fillStyle:"green", points:[
            new Vector2(-20+(Math.random()*10), -30+(Math.random()*10)),
            new Vector2(20+(Math.random()*10), -30+(Math.random()*10)),
            new Vector2(35+(Math.random()*10), 0+(Math.random()*10)),
            new Vector2(20+(Math.random()*10), 30+(Math.random()*10)),
            new Vector2(-20+(Math.random()*10), 30+(Math.random()*10)),
            new Vector2(-35+(Math.random()*10), 0+(Math.random()*10))
        ]})
    }
}