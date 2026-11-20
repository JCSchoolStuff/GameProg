class HexGameObject extends GameObject{
    constructor(){
        super("Hex", ["Suspect"], "midground")
        this.addComponent(new Polygon(), {fillStyle:"purple", points:Assets.hexagon})
        this.transform.scale = new Vector2(50,50)
        this.dialogueArray = []
        this.dialogueColorArray = []
    }
}