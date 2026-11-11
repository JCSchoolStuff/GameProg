class EquityGameObject extends GameObject{
    constructor(){
        super("Equity", ["Suspect"], "midground")
        this.addComponent(new Polygon(), {fillStyle:"red", points:Assets.triangle})
        this.transform.scale = new Vector2(50,50)

        //dialogue
        this.suspectColor = "red"
        this.detectiveColor = "gold"
        this.dialogue1 = "Oh, detective! Whatever am I to do? My darling Gil has perished! We were set to be married soon! How could such a tragedy happen?"
        this.dialogue2 = "I understand this is a difficult time for you, ma'am, but I need to ask you about what happened last night."
        this.dialogue3 = "Sorry, I understand... allow me a moment to collect myself."
        this.dialogue4 = "Well, I'd entered Gil's room to dust off that family heirloom he keeps. He'd been doing a lot of work for the gathering, so I wanted to help out."
        this.dialogue5 = "When I finished with that, I left the room. That was when I bumped into Gohn, standing right outside. He invited me to talk in his room."
        this.dialogueArray = [this.dialogue1, this.dialogue2, this.dialogue3, this.dialogue4, this.dialogue5]
        this.dialogueColorArray = [this.suspectColor, this.detectiveColor, this.suspectColor, this.suspectColor, this.suspectColor]
    }
}