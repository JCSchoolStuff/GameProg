class HexGameObject extends GameObject{
    constructor(){
        super("Hex")
        this.addComponent(new DialogueHandler())
        this.addComponent(new Polygon(), {fillStyle:"purple", points:Assets.hexagon})
        this.transform.scale = new Vector2(50,50)
    }
}