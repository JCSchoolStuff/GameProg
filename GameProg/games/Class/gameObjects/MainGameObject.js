class MainGameObject extends GameObject{
    constructor(){
        super()
        this.addComponent(new UpdateComponent())
        this.addComponent(new Polygon(), {fillStyle:"gold", points:[
            new Vector2(0, -30),
            new Vector2(10, 0),
            new Vector2(40, 0),
            new Vector2(15, 20),
            new Vector2(25, 50),
            new Vector2(0, 30),
            new Vector2(-25, 50),
            new Vector2(-15, 20),
            new Vector2(-40, 0),
            new Vector2(-10, 0)
        ]})
    }
}