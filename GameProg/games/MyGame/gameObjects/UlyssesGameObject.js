class UlyssesGameObject extends GameObject{
    constructor(){
        super("Ulysses")
        this.addComponent(new DialogueHandler())
        this.addComponent(new Polygon(), {fillStyle:"green", points:Assets.square})
        this.transform.scale = new Vector2(50,50)
    }
}