class DialogueBoxGameObject extends GameObject{
    constructor(){
        super("DialogueBox", [], "UI")
        this.addComponent(new Polygon(), {fillStyle:"black", points:Assets.square})
        this.transform.scale = new Vector2(1000,150)
    }
}