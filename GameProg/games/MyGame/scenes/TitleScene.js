class TitleScene extends Scene{
    constructor(){
        super()
        this.instantiate(new TitleBackgroundGameObject(), new Vector2(700,370))
        this.instantiate(new TitleTextGameObject(), new Vector2(500,100))
        this.instantiate(new TitleButtonGameObject(), new Vector2(500,200))
        this.instantiate(new LevelControllerGameObject())
    }
}