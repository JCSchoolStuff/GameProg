class MainScene extends Scene{
    constructor(){
        super()
        this.instantiate(new GohnGameObject(), new Vector2(600,200))
        this.instantiate(new EquityGameObject(), new Vector2(300,200))
        this.instantiate(new HexGameObject(), new Vector2(900,200))
        this.instantiate(new UlyssesGameObject(), new Vector2(1200,200))
        this.instantiate(new MainGameObject(), new Vector2(750,400))
    }
}