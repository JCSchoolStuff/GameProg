class Level02 extends Scene{
    constructor(){
        super()
        //this.instantiate(new BackgroundGameObject(), new Vector2(0,0))
        // this.instantiate(new MainGameObject(), new Vector2(700,600))
        this.instantiate(new EnemyGameObject(), new Vector2(500,150), Math.PI)
        this.instantiate(new EnemyGameObject(), new Vector2(1000,200), Math.PI)
        //this.instantiate(new StaticGameObject(), new Vector2(Math.random()*1500,Math.random()*400))
        // this.instantiate(new PointsGameObject(), new Vector2(0,20))
        this.instantiate(new LevelControllerGameObject())
    }
}