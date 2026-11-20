class UlyssesGameObject extends GameObject{
    constructor(){
        super("Ulysses", ["Suspect"], "midground")
        this.addComponent(new Polygon(), {fillStyle:"green", points:Assets.square})
        this.transform.scale = new Vector2(50,50)
        this.dialogueArray = []
        this.dialogueColorArray = []
    }
}