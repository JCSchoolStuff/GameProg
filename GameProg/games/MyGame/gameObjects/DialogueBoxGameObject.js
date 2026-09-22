class DialogueBoxGameObject extends GameObject{
    constructor(){
        super("DialogueBox")
        this.addComponent(new Polygon(), {fillStyle:"gray", points:Assets.square})
        this.transform.scale = new Vector2(1000,150)
    }
}