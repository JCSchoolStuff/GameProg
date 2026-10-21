class MainGameObject extends GameObject{
    constructor(){
        super("Main", [], "foreground")
        this.addComponent(new UpdateComponent())
        this.addComponent(new Polygon(), {fillStyle:"gold", points:Assets.star})
        this.addComponent(new Health(), {health:2})
        this.addComponent(new Collider())
        //this.transform.scale = new Vector2(2,2)
    }
}