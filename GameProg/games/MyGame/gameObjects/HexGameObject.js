class HexGameObject extends GameObject{
    constructor(){
        super("Hex", ["Suspect"], "midground")
        this.addComponent(new Polygon(), {fillStyle:"purple", points:Assets.hexagon})
        this.transform.scale = new Vector2(50,50)
        this.suspectColor = "purple"
        this.detectiveColor = "gold"
        this.dialogue1 = "Yo!!! Hex A. Connel in da house!!!"
        this.dialogue2 = "Um... you were the one who first discovered the body, right?"
        this.dialogue3 = "A-ah... yeah... really harshed the vibe. The vic was a cool guy, was talking with him for a bit before he died."
        this.dialogue4 = "Meaning you would be the last person to talk with him?"
        this.dialogue5 = "Ssssomething like that? We were hanging out in my room 'til, like... 9:10? I think that's right, cuz I was composing for about an hour? And I stopped around 10:10."
        this.dialogue6 = "Right, you're a DJ. Were you composing these songs for anything specific? Perhaps an event for the Roundingtons?"
        this.dialogue7 = "It was some sample stuff, so he could decide if he wanted to hire me... not that it matters much now. When I went to let him know I was done..."
        this.dialogue8 = "You found his body."
        this.dialogue9 = "..."
        this.dialogue10 = "Is there anything else you'd like to add?"
        this.dialogue11 = "No, that's pretty much all..."
        this.dialogue12 = "Alright. Let me know if you think of anything else."
        this.dialogue13 = "Oh, ok! Seeya later!"
        this.dialogueArray = [this.dialogue1, this.dialogue2, this.dialogue3, this.dialogue4, this.dialogue5, this.dialogue6, this.dialogue7, 
            this.dialogue8, this.dialogue9, this.dialogue10, this.dialogue11, this.dialogue12, this.dialogue13, "end"]
        this.dialogueColorArray = [this.suspectColor, this.detectiveColor, this.suspectColor, this.detectiveColor, this.suspectColor, this.detectiveColor, this.suspectColor,
            this.detectiveColor, this.suspectColor, this.detectiveColor, this.suspectColor, this.detectiveColor, this.suspectColor, "black"]
    }
}