class MainScene extends Scene{
    constructor(){
        super()
        Globals.stage = 1
        this.instantiate(new GohnGameObject(), new Vector2(-150,200))
        this.instantiate(new EquityGameObject(), new Vector2(-450,200))
        this.instantiate(new HexGameObject(), new Vector2(200,200))
        this.instantiate(new UlyssesGameObject(), new Vector2(500,200))
        this.instantiate(new VictimGameObject(), new Vector2(0,-150))
        //this.instantiate(new MainGameObject(), new Vector2(0,0))
        this.instantiate(new LevelControllerGameObject(), new Vector2(10,20))
        this.instantiate(new WallGameObject(), new Vector2(0,500))
        this.instantiate(new WallGameObject(), new Vector2(0,-400))
        this.instantiate(new WallGameObject(), new Vector2(-750,0), Math.PI/2)
        this.instantiate(new WallGameObject(), new Vector2(750,0), Math.PI/2)
        this.instantiate(new DetectorGameObject(), new Vector2(0,0))
    }
}