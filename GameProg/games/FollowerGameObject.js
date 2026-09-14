class FollowerGameObject extends GameObject{
    constructor(){
        super()
        this.addComponent(new FollowerHandler())
        this.addComponent(new Polygon(), {fillStyle:"orange", points:[
            new Vector2(0,-10),
            new Vector2(-10,10),
            new Vector2(10,10),
        ]})
    }
}