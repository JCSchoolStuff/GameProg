class ShortWallGameObject extends GameObject{
    constructor(){
        super("ShortWall", ["Geometry"], "background")
        this.addComponent(new Polygon(), {fillStyle:"DimGray", points:Assets.square})
        this.transform.scale = new Vector2(600,100)
        this.addComponent(new Collider())
    }
}