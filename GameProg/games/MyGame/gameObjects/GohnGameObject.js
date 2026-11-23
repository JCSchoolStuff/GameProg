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
        this.dialogue5 = "Did... did you really feel so betrayed that I used to be a thief?"
        this.dialogue6 = "... let's just move on to your testimony, Gohn."
        this.dialogue7 = "Oh, um... w-well, I wanted to talk to Equity after dinner, so I was looking for her... a-and then I saw her leaving the victim's room at... 9:10?"
        this.dialogue8 = "What did you want to talk to her for?"
        this.dialogue9 = "I-I just, uh... wanted to know the others here."
        this.dialogue10 = "A-anyways, um... we talked until 9:45ish, then she left to sleep... I spotted Ulysses going into his room at the time... but I just stayed in mine."
        this.dialogue11 = "So Ulysses wasn't in his room... and you're certain you didn't do anything else?"
        this.dialogue12 = "A-are you trying to imply something? I... I've turned over a new leaf, I didn't..."
        this.dialogue13 = "... better hope I don't find out you lied to me. I'm going to keep investigating."
        this.dialogueArray = [this.dialogue1, this.dialogue2, this.dialogue3, this.dialogue4, this.dialogue5, this.dialogue6, this.dialogue7, 
            this.dialogue8, this.dialogue9, this.dialogue10, this.dialogue11, this.dialogue12, this.dialogue13, "end"]
        this.dialogueColorArray = [this.suspectColor, this.detectiveColor, this.suspectColor, this.detectiveColor, this.suspectColor, this.detectiveColor, this.suspectColor,
            this.detectiveColor, this.suspectColor, this.suspectColor, this.detectiveColor, this.suspectColor, this.detectiveColor, "black"]
    }
}