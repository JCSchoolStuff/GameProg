class MainGameObject extends GameObject{
    constructor(){
        super("Main", [], "midground")
        this.addComponent(new UpdateComponent())
        this.addComponent(new DialogueHandler())
        this.addComponent(new Polygon(), {fillStyle:"gold", points:Assets.star})
        this.transform.scale = new Vector2(50,50)
    }
}