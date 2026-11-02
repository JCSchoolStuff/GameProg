class EquityGameObject extends GameObject{
    constructor(){
        super("Equity", ["Suspect"], "midground")
        this.addComponent(new Polygon(), {fillStyle:"red", points:Assets.triangle})
        this.transform.scale = new Vector2(50,50)
        this.dialogue1 = "Oh, detective! Whatever am I to do? My darling Gil has perished! We were set to be married soon. How could such a tragedy happen?"
        this.dialogueColor1 = "red"
        this.dialogue2 = "I understand this is a difficult time for you, ma'am, but I need to ask you about what happened last night."
        this.dialogueColor2 = "gold"
        this.dialogueArray = [this.dialogue1, this.dialogue2]
        this.dialogueColorArray = [this.dialogueColor1, this.dialogueColor2]
    }
}