class TitleScene extends Scene{
    constructor(){
        super()
        this.instantiate(new TitleBackgroundGameObject(), new Vector2(0,-200))
        this.instantiate(new TitleTextGameObject(), new Vector2(500,100))
        this.instantiate(new TitleButtonGameObject(), new Vector2(675,200))
        this.instantiate(new LevelControllerGameObject())
        //Camera.main.backgroundColor = "Black"
    }
}