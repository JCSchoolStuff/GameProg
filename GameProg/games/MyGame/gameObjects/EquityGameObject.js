class EquityGameObject extends GameObject{
    constructor(){
        super("Equity")
        this.addComponent(new DialogueHandler())
        this.addComponent(new Polygon(), {fillStyle:"red", points:Assets.triangle})
        this.transform.scale = new Vector2(50,50)
    }
}