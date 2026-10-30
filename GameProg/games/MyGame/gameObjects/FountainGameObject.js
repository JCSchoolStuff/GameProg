class FountainGameObject extends GameObject{
    constructor(){
        super("Fountain", [], "background")
        this.addComponent(new Polygon(), {fillStyle:"white", points:Assets.circle})
        this.transform.scale = new Vector2(200,200)
        this.addComponent(new Collider())
    }
}