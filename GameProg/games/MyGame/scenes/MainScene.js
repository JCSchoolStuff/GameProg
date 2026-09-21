class MainScene extends Scene{
    constructor(){
        super()
        this.instantiate(new GohnGameObject(), new Vector2(700,400))
        this.instantiate(new EquityGameObject(), new Vector2(500,400))
        this.instantiate(new HexGameObject(), new Vector2(900,400))
        this.instantiate(new UlyssesGameObject(), new Vector2(1100,400))
        this.instantiate(new MainGameObject(), new Vector2(700,600))
    }
}