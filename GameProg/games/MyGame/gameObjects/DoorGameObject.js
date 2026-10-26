class DoorGameObject extends GameObject{
    constructor(){
        super("Door", [], "foreground")
        this.addComponent(new Polygon(), {fillStyle:"SaddleBrown", points:Assets.doorFront})
        this.transform.scale = new Vector2(144,141)
    }
}