class GohnGameObject extends GameObject{
    constructor(){
        super("Gohn", ["Suspect"], "midground")
        this.addComponent(new Polygon(), {fillStyle:"orange", points:Assets.pentagon})
        this.transform.scale = new Vector2(50,50)
        this.suspectColor = "orange"
        this.detectiveColor = "gold"
        this.dialogue1 = "... Graham??? You're the detective on this case??"
        this.dialogue2 = "Gohn... you didn't do anything, did you?"
        this.dialogue3 = "Wh-what? You know I could never... KILL someone!"
        this.dialogue4 = "... only thing I know is that anyone is capable of anything."
        this.dialogueArray = [this.dialogue1, this.dialogue2, this.dialogue3, this.dialogue4, " "]
        this.dialogueColorArray = [this.suspectColor, this.detectiveColor, this.suspectColor, this.detectiveColor, "black"]
    }
}