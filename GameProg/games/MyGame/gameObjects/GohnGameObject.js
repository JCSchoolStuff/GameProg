class GohnGameObject extends GameObject{
    constructor(){
        super("Gohn", ["Investigate"], "midground")
        this.addComponent(new Polygon(), {fillStyle:"orange", points:Assets.pentagon})
        this.transform.scale = new Vector2(50,50)
    }
}