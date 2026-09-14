class BackgroundGameObject extends GameObject{
    constructor(){
        super()
        this.addComponent(new Polygon(), {fillStyle:"black", points:[
            new Vector2(0, 0),
            new Vector2(5000, 0),
            new Vector2(5000, 2000),
            new Vector2(0, 2000)
        ]})
    }
}