class VictimGameObject extends GameObject{
    constructor(){
        super("Victim")
        this.addComponent(new DialogueHandler())
        this.addComponent(new Polygon(), {fillStyle:"blue", points:Assets.circle})
        this.transform.scale = new Vector2(50,50)
    }
}