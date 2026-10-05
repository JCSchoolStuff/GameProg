class HexGameObject extends GameObject{
    constructor(){
        super("Hex", ["Investigate"], "midground")
        this.addComponent(new Polygon(), {fillStyle:"purple", points:Assets.hexagon})
        this.transform.scale = new Vector2(50,50)
    }
}