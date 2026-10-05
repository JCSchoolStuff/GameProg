class EquityGameObject extends GameObject{
    constructor(){
        super("Equity", ["Investigate"], "midground")
        this.addComponent(new Polygon(), {fillStyle:"red", points:Assets.triangle})
        this.transform.scale = new Vector2(50,50)
    }
}