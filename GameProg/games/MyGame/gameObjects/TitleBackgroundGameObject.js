class TitleBackgroundGameObject extends GameObject{
    constructor(){
        super("TitleBG", [], "background")
        this.addComponent(new Polygon(), {fillStyle:"Gray", points:Assets.square})
        this.transform.scale = new Vector2(700,300)
    }
}