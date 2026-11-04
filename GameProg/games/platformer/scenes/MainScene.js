class MainScene extends Scene{
  constructor(){
    super()
    this.instantiate(new SquareGameObject(), new Vector2(0,0), 0)
    this.instantiate(new PlatformGameObject(), new Vector2(0,50), 0)
    this.instantiate(new PlatformGameObject(), new Vector2(0,-70), 0)
    this.instantiate(new CoinGameObject(), new Vector2(50,20), 0)
  }
}
