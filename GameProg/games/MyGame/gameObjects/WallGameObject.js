class WallGameObject extends GameObject{
    constructor(){
        super("Wall", [], "background")
        this.addComponent(new Polygon(), {fillStyle:"DimGray", points:Assets.square})
        this.transform.scale = new Vector2(1000,100)
    }
}