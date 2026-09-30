class GenericLevel extends Scene{
    constructor(){
        super()
        this.instantiate(new MainGameObject(), new Vector2(700,600))
        this.instantiate(new PointsGameObject(), new Vector2(10,20))
        Camera.main.backgroundColor = "black"
    }
}