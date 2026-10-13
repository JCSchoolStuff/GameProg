class DetectorGameObject extends GameObject{
    constructor(){
        super("Detector", ["Investigate"], "foreground")
        this.addComponent(new Polygon(), {fillStyle:"gray", points:Assets.doorFront})
        this.transform.scale = new Vector2(120,100)
    }
}