class MainScene extends Scene{
    constructor(){
        super()
        this.instantiate(new BackgroundGameObject(), new Vector2(0,0))
        this.instantiate(new MainGameObject(), new Vector2(700,600))
        this.instantiate(new FollowerGameObject(), new Vector2(700,670))
        this.instantiate(new StaticGameObject(), new Vector2(Math.random()*1500,Math.random()*400))
        this.instantiate(new StaticGameObject(), new Vector2(Math.random()*1500,Math.random()*400))
        this.instantiate(new StaticGameObject(), new Vector2(Math.random()*1500,Math.random()*400))
        this.instantiate(new StaticGameObject(), new Vector2(Math.random()*1500,Math.random()*400))
        this.instantiate(new StaticGameObject(), new Vector2(Math.random()*1500,Math.random()*400))
        this.instantiate(new StaticGameObject(), new Vector2(Math.random()*1500,Math.random()*400))
        this.instantiate(new StaticGameObject(), new Vector2(Math.random()*1500,Math.random()*400))
    }
}