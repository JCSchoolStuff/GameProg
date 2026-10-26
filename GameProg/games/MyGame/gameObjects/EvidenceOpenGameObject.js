class EvidenceOpenGameObject extends GameObject{
    constructor(){
        super("EvidenceControl", [""], "UI")
        this.addComponent(new Polygon(), {fillStyle:"DarkSlateGray", points:Assets.square})
        this.transform.scale = new Vector2(100,100)
        this.addComponent(new EvidenceHandler())
    }
}