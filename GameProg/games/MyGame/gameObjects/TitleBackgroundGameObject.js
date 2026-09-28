class TitleBackgroundGameObject extends GameObject{
    constructor(){
        super("TitleBG")
        this.addComponent(new Polygon(), {fillStyle:"black", points:Assets.square})
        this.transform.scale = new Vector2(1200,700)
    }
}