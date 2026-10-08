class HelperGameObject extends GameObject{
    constructor(){
        super("HelperGameObject", [], "foreground")
        this.addComponent(new Polygon(), {fillStyle: "purple", points:Assets.triangle})
    }
}