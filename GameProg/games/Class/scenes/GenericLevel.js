class GenericLevel extends Scene{
    constructor(){
        super()
        //this.instantiate(new BackgroundGameObject(), new Vector2(0,0))
        this.instantiate(new MainGameObject(), new Vector2(700,600))
        this.instantiate(new PointsGameObject(), new Vector2(0,20))
    }
}