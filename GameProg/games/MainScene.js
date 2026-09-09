class MainScene extends Scene{
    constructor(){
        super()
        this.instantiate(new MainGameObject())
        this.instantiate(new FollowerGameObject())
        this.instantiate(new StaticGameObject())
    }
}