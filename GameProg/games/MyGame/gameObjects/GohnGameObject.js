class GohnGameObject extends GameObject{
    constructor(){
        super("Gohn", ["Suspect"], "midground")
        this.addComponent(new Polygon(), {fillStyle:"orange", points:Assets.pentagon})
        this.transform.scale = new Vector2(50,50)
        this.suspectColor = "orange"
        this.detectiveColor = "gold"
        this.dialogue1 = "... Graham??? You're the detective on this case??"
        this.dialogue2 = "Gohn... you didn't do anything, did you?"
        this.dialogueArray = [this.dialogue1, this.dialogue2]
        this.dialogueColorArray = [this.suspectColor, this.detectiveColor]
    }
}