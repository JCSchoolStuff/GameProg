class MainScene extends Scene{
    constructor(){
        super()
        Globals.investigation = 0
        this.instantiate(new GohnGameObject(), new Vector2(600,200))
        this.instantiate(new EquityGameObject(), new Vector2(300,200))
        this.instantiate(new HexGameObject(), new Vector2(900,200))
        this.instantiate(new UlyssesGameObject(), new Vector2(1200,200))
        this.instantiate(new VictimGameObject(), new Vector2(750,350))
        this.instantiate(new MainGameObject(), new Vector2(750,500))
    }
}