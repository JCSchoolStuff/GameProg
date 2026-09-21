class GohnGameObject extends GameObject{
    constructor(){
        super("Gohn")
        this.addComponent(new DialogueHandler())
        this.addComponent(new Polygon(), {fillStyle:"orange", points:Assets.pentagon})
        this.transform.scale = new Vector2(50,50)
    }
}