class EvidenceGameObject extends GameObject{
    constructor(){
        super("Evidence", [""], "UI")
        this.addComponent(new Polygon(), {fillStyle:"DarkSlateGray", points:Assets.square})
        this.transform.scale = new Vector2(800,500)
    }
}