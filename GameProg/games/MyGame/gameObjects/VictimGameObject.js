class VictimGameObject extends GameObject{
    constructor(){
        super("Victim", ["Investigate"], "midground")
        this.addComponent(new Polygon(), {fillStyle:"blue", points:Assets.circle})
        this.transform.scale = new Vector2(50,50)
    }
}