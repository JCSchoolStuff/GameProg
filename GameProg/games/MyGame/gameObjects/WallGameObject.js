class WallGameObject extends GameObject{
    constructor(){
        super("Wall", ["Geometry"], "background")
        this.addComponent(new Polygon(), {fillStyle:"DimGray", points:Assets.square})
        this.transform.scale = new Vector2(800,100)
        this.addComponent(new Collider())
    }
}