class GenericScene extends Scene{
    constructor(){
        super()
        this.instantiate(new MainGameObject(), new Vector2(0,0))
        Camera.main.backgroundColor = "LightGray"
    }
}