class TitleScene extends Scene{
    constructor(){
        super()
        this.instantiate(new TitleBackgroundGameObject(), new Vector2(460,260))
        this.instantiate(new TitleTextGameObject(), new Vector2(470,100))
        this.instantiate(new TitleButtonGameObject(), new Vector2(670,300))
        this.instantiate(new LevelControllerGameObject())
    }
}